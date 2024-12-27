import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

interface NewQuestionFormProps {
  onSubmit: (title: string, content: string) => void;
}

export function NewQuestionForm({ onSubmit }: NewQuestionFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-6">
        <div className="space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's your question?"
            className="w-full px-4 py-3 text-lg rounded-xl bg-white/80 border-2 border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Provide more details..."
            rows={4}
            className="w-full px-4 py-3 text-lg rounded-xl bg-white/80 border-2 border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 placeholder:text-gray-400"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              setTitle('');
              setContent('');
            }}
            className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 transition-all duration-200 flex items-center gap-2"
          >
            <X size={20} />
            Clear
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 focus:ring-2 focus:ring-blue-300 transition-all duration-200 flex items-center gap-2"
          >
            <Send size={20} />
            Ask Question
          </button>
        </div>
      </div>
    </form>
  );
}