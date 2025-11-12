
import React from 'react';
import { type Stage, type UIContent } from '../types';

interface StageDetailsProps {
  onBack: () => void;
  stage: Stage;
  uiContent: UIContent;
}

const CheckIcon: React.FC = () => (
    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);


const StageDetails: React.FC<StageDetailsProps> = ({ onBack, stage, uiContent }) => {
  return (
    <div className="w-full max-w-3xl mx-auto text-left animate-fade-in">
      <button
        onClick={onBack}
        className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        {uiContent.backButton}
      </button>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{stage.title}</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">{uiContent.detailsTitle}</h3>
        
        <ul className="space-y-4">
          {stage.advantages.map((advantage, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span className="text-gray-600 text-lg">{advantage}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StageDetails;
