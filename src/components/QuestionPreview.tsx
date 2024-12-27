import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Question } from '../types';
import { formatDate } from '../utils/dateUtils';
import { Link } from 'react-router-dom';

interface QuestionPreviewProps {
  question: Question;
}

export function QuestionPreview({ question }: QuestionPreviewProps) {
  const totalVotes = question.yesVotes + question.noVotes;

  return (
    <Link 
      to={`/question/${question.id}`}
      className="block w-full bg-white rounded-2xl shadow-[0_0_50px_-12px_rgb(0,0,0,0.12)] p-8 hover:shadow-[0_0_50px_-6px_rgb(0,0,0,0.15)] transition-all duration-300 group"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{question.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed line-clamp-2">{question.content}</p>
        </div>

        <div className="flex items-center justify-between">
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
          
          <div className="flex items-center gap-2 text-blue-600 font-medium">
            View Discussion
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
            {totalVotes} votes
          </span>
        </div>
      </div>
    </Link>
  );
}