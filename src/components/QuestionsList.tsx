import React from 'react';
import { Question } from '../types';
import { QuestionPreview } from './QuestionPreview';
import { TrendingUp } from 'lucide-react';

interface QuestionsListProps {
  questions: Question[];
}

export function QuestionsList({ questions }: QuestionsListProps) {
  return (
    <section className="mt-16">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp size={28} className="text-purple-500" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Trending Questions
        </h2>
      </div>
      <div className="space-y-8">
        {questions.map(question => (
          <QuestionPreview
            key={question.id}
            question={question}
          />
        ))}
      </div>
    </section>
  );
}