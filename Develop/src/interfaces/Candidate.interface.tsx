// TODO: Created an interface for the Candidate objects returned by the API

export interface Candidate {
    id: number;
    login: string;          // GitHub username
    avatar_url: string;     // Profile image URL
    name: string | null;    // Display name
    location: string | null;
    email: string | null;
    company: string | null;
    bio: string | null;
    html_url: string;       // GitHub profile URL
}

export interface CandidateCardProps {
    candidate: Candidate;
    onSave: () => void;
    onSkip: () => void;
}

export interface SavedCandidateProps {
    candidate: Candidate;
    onRemove: (id: number) => void;
}