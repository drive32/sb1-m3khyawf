import { Question } from '../types';

export const initialQuestions: Question[] = [
  {
    id: '1',
    title: 'Should we colonize Mars in the next decade?',
    content: 'With advancing space technology, is it feasible and ethical to establish human colonies on Mars by 2034? This could be a giant leap for mankind, but there are many challenges to consider.',
    author: 'Space Explorer',
    timestamp: new Date('2024-03-10'),
    yesVotes: 150,
    noVotes: 75,
    userVotes: {}
  },
  {
    id: '2',
    title: 'Will AI completely transform healthcare by 2030?',
    content: 'Considering the rapid advancement of AI in medical diagnosis and treatment, how will it impact healthcare delivery? Could we see AI doctors becoming commonplace?',
    author: 'Tech Futurist',
    timestamp: new Date('2024-03-11'),
    yesVotes: 230,
    noVotes: 45,
    userVotes: {}
  }
];