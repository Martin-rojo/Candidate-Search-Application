import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(saved);
  }, []);

  const handleRemove = (id: number) => {
    const updated = savedCandidates.filter(candidate => candidate.id !== id);
    localStorage.setItem('savedCandidates', JSON.stringify(updated));
    setSavedCandidates(updated);
  };

  if (savedCandidates.length === 0) {
    return <h1>No potential candidates saved</h1>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>
                <img 
                  src={candidate.avatar_url} 
                  alt={candidate.login}
                  style={{ width: '50px', height: '50px', borderRadius: '4px' }}
                />
              </td>
              <td>
                {candidate.name || candidate.login}
                <br />
                <span style={{ opacity: 0.7 }}>({candidate.login})</span>
              </td>
              <td>{candidate.location || '-'}</td>
              <td>
                {candidate.email ? (
                  <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
                ) : '-'}
              </td>
              <td>{candidate.company || '-'}</td>
              <td>{candidate.bio || '-'}</td>
              <td>
                <button
                  onClick={() => handleRemove(candidate.id)}
                  style={{ 
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    border: 'none',
                    color: 'white'
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;