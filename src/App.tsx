import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Question } from './types';
import { QuestionsList } from './components/QuestionsList';
import { AskSection } from './components/AskSection';
import { Layout } from './components/Layout';
import { QuestionDetail } from './pages/QuestionDetail';
import { initialQuestions } from './data/initialData';
import { handleVoteChange } from './utils/voteUtils';

export function App() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);

  const handleVote = (questionId: string, voteType: 'yes' | 'no', userId: string = 'current-user') => {
    setQuestions(questions.map(q => 
      q.id === questionId ? handleVoteChange(q, voteType, userId) : q
    ));
  };

  const handleNewQuestion = (title: string, content: string) => {
    const newQuestion: Question = {
      id: String(Date.now()),
      title,
      content,
      author: 'Anonymous User',
      timestamp: new Date(),
      yesVotes: 0,
      noVotes: 0,
      userVotes: {}
    };
    setQuestions([newQuestion, ...questions]);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_0_50px_-12px_rgb(0,0,0,0.12)] p-6">
                <AskSection onSubmit={handleNewQuestion} />
              </div>
              <QuestionsList questions={questions} />
            </div>
          } />
          <Route 
            path="/question/:id" 
            element={<QuestionDetail questions={questions} onVote={handleVote} />} 
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}