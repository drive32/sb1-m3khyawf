import { Question } from '../types';
import { calculateVotePercentages } from './voteUtils';

export interface Analysis {
  confidence: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  pros: string[];
  cons: string[];
}

export function analyzeVotingPattern(question: Question): Analysis {
  const { totalVotes, yesPercentage, noPercentage } = calculateVotePercentages(
    question.yesVotes,
    question.noVotes
  );
  
  // Calculate confidence based on total votes and vote difference
  const voteDifference = Math.abs(question.yesVotes - question.noVotes);
  const confidence = totalVotes > 0 
    ? Math.min((voteDifference / totalVotes) * 100, 100)
    : 0;
  
  // Determine sentiment
  const sentiment = yesPercentage > 60 
    ? 'positive' 
    : yesPercentage < 40 
      ? 'negative' 
      : 'neutral';

  // Generate insights based on voting patterns
  const generateInsights = () => {
    const strongConsensus = confidence > 70;
    const moderateConsensus = confidence > 40;
    
    const pros = [];
    const cons = [];

    if (yesPercentage > 50) {
      pros.push(
        strongConsensus 
          ? "Strong community support indicates high viability"
          : "Moderate support suggests potential merit"
      );
      pros.push(
        totalVotes > 100 
          ? "Significant sample size validates the positive response"
          : "Initial positive trend emerging"
      );
      
      cons.push(
        noPercentage > 30 
          ? "Notable opposition suggests careful consideration needed"
          : "Minor concerns exist but don't significantly impact overall sentiment"
      );
    } else {
      cons.push(
        strongConsensus 
          ? "Strong opposition indicates significant challenges"
          : "Mixed response suggests need for refinement"
      );
      cons.push(
        totalVotes > 100 
          ? "Substantial negative feedback indicates fundamental issues"
          : "Early negative indicators present"
      );
      
      pros.push(
        yesPercentage > 30 
          ? "Supporting minority shows potential for specific use cases"
          : "Limited but existing support suggests niche applications"
      );
    }

    return { pros, cons };
  };

  const { pros, cons } = generateInsights();

  return {
    confidence,
    sentiment,
    pros,
    cons
  };
}