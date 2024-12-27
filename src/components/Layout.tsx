import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <MessageCircle size={48} className="text-blue-600" />
                <Sparkles size={20} className="text-yellow-400 absolute -top-2 -right-2" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                VoteVerse
              </h1>
            </div>
            <p className="text-gray-600 text-xl font-medium">
              Ask questions. Vote answers. Shape the future.
            </p>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}