import React from 'react';
import { Clock, User } from 'lucide-react';
import { Question } from '../types';
import { VoteButton } from './VoteButton';
import { formatDate } from '../utils/dateUtils';

interface QuestionCardProps {
  question: Question;
  onVote: (type: 'yes' | 'no') => void;
  userId?: string;
}

export function QuestionCard({ question, onVote, userId = 'current-user' }: QuestionCardProps) {
  const totalVotes = question.yesVotes + question.noVotes;
  const yesPercentage = totalVotes > 0 ? (question.yesVotes / totalVotes) * 100 : 0;
  const userVote = question.userVotes[userId];

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0_0_50px_-12px_rgb(0,0,0,0.12)] p-8 hover:shadow-[0_0_50px_-6px_rgb(0,0,0,0.15)] transition-all duration-300">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{question.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{question.content}</p>
        </div>

        <div className="flex items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-1.5">
            <User size={16} className="text-blue-500" />
            <span className="font-medium text-gray-700">{question.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-blue-500" />
            <time className="font-medium text-gray-700">{formatDate(question.timestamp)}</time>
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${yesPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <VoteButton
              type="yes"
              count={question.yesVotes}
              onClick={() => onVote('yes')}
              isSelected={userVote === 'yes'}
            />
            <div className="text-lg font-semibold text-gray-500">
              {totalVotes} votes
            </div>
            <VoteButton
              type="no"
              count={question.noVotes}
              onClick={() => onVote('no')}
              isSelected={userVote === 'no'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}