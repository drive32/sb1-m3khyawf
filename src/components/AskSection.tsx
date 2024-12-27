import React from 'react';
import { BrainCircuit } from 'lucide-react';
import { NewQuestionForm } from './NewQuestionForm';

interface AskSectionProps {
  onSubmit: (title: string, content: string) => void;
}

export function AskSection({ onSubmit }: AskSectionProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl -m-6" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <BrainCircuit size={28} className="text-blue-500" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Ask a Question
          </h2>
        </div>
        <p className="text-gray-600 mb-8">
          Share your thoughts and let the community vote. Every question sparks a conversation.
        </p>
        <NewQuestionForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}