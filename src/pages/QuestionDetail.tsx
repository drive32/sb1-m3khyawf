import React from 'react';
import { useParams } from 'react-router-dom';
import { Question } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { QuestionAnalytics } from '../components/QuestionAnalytics';
import { BackButton } from '../components/common/BackButton';

interface QuestionDetailProps {
  questions: Question[];
  onVote: (questionId: string, type: 'yes' | 'no') => void;
}

export function QuestionDetail({ questions, onVote }: QuestionDetailProps) {
  const { id } = useParams<{ id: string }>();
  const question = questions.find(q => q.id === id);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <BackButton />
      <QuestionCard
        question={question}
        onVote={(type) => onVote(question.id, type)}
      />
      <QuestionAnalytics question={question} />
    </div>
  );
}