import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sameGroup, setSameGroup] = useState<Candidate[]>([]); 
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isComplete, setIsComplete] = useState(false);
  const MAX_CANDIDATES = 20;

  const loadNextCandidate = async (users?: Candidate[]) => {
    try {
      setLoading(true);
      
      if (currentIndex >= MAX_CANDIDATES - 1) {
        setIsComplete(true);
        setCurrentCandidate(null);
        setError('You have reviewed all available candidates');
        return;
      }

      const candidateList = users || sameGroup;
      if (currentIndex >= candidateList.length) {
        setIsComplete(true);
        setCurrentCandidate(null);
        setError('No more candidates available');
        return;
      }

      const userDetails = await searchGithubUser(candidateList[currentIndex].login);
      
      if (userDetails) {
        setCurrentCandidate(userDetails);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        setError('Failed to load candidate details');
      }
    } catch (error) {
      setError('Failed to load candidate');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    if (currentCandidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(currentCandidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
      loadNextCandidate();
    }
  };

  const handleSkip = () => {
    loadNextCandidate();
  };

  useEffect(() => {
    async function getCandidates() {
      try {
        const users = await searchGithub();
        if (users && users.length > 0) {
          const limitedUsers = users.slice(0, MAX_CANDIDATES);
          setSameGroup(limitedUsers);
          await loadNextCandidate(limitedUsers);
        } else {
          setError('No candidates found');
        }
      } catch (error) {
        setError('Failed to fetch candidates');
      }
    }
    
    getCandidates();
  }, []);

  const getRemainingCandidates = () => {
    return MAX_CANDIDATES - currentIndex;
  };

  if (loading) return <div>Loading...</div>;
  if (isComplete || error) return <div>{error}</div>;
  if (!currentCandidate) return <div>No candidates available</div>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Candidate Search</h1>
      <div className="candidate-card">
        <p style={{ opacity: 0.7 }}>
          Remaining candidates: {getRemainingCandidates()}
        </p>
        <img 
          src={currentCandidate.avatar_url} 
          alt={currentCandidate.login}
          style={{ width: '200px', height: '200px', borderRadius: '8px' }}
        />
        <h2>
          {currentCandidate.name || currentCandidate.login}
          <span style={{ opacity: 0.7 }}>({currentCandidate.login})</span>
        </h2>
        {currentCandidate.location && (
          <p>Location: {currentCandidate.location}</p>
        )}
        {currentCandidate.email && (
          <p>Email: <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email}</a></p>
        )}
        {currentCandidate.company && (
          <p>Company: {currentCandidate.company}</p>
        )}
        {currentCandidate.bio && (
          <p>Bio: {currentCandidate.bio}</p>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <button 
            onClick={handleSkip}
            style={{ 
              backgroundColor: 'red',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0',
              lineHeight: '1',
              cursor: 'pointer'
            }}
            disabled={isComplete}
          >
            <span style={{ 
              position: 'relative', 
              top: '-2px' 
            }}>
              -
            </span>
          </button>
          <button 
            onClick={handleSave}
            style={{ 
              backgroundColor: 'green',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0',
              lineHeight: '1',
              cursor: 'pointer'
            }}
            disabled={isComplete}
          >
            <span style={{ 
              position: 'relative', 
              top: '-1px' 
            }}>
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;