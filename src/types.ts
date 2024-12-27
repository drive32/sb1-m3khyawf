export interface Question {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: Date;
  yesVotes: number;
  noVotes: number;
  userVotes: Record<string, 'yes' | 'no'>;  // Track user votes
}

export interface VoteButtonProps {
  count: number;
  onClick: () => void;
  type: 'yes' | 'no';
  isSelected: boolean;  // Add selected state
}