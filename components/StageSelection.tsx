
import React from 'react';
import { type StageKey } from '../services/content';
import { type ContentStructure } from '../types';

interface StageSelectionProps {
  onSelectStage: (stageKey: StageKey) => void;
  content: ContentStructure;
  stages: StageKey[];
}

const StageButton: React.FC<{ title: string; onClick: () => void }> = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-center bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 text-blue-600 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  >
    {title}
  </button>
);

const StageSelection: React.FC<StageSelectionProps> = ({ onSelectStage, content, stages }) => {
  const { ui, stages: stageContent } = content;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
        {ui.pageTitle}{' '}
        <span className="text-blue-600">{ui.pageTitleHighlight}</span> mit uns
      </h1>
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12">
        {ui.pageSubtitle}
      </p>

      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stages.map((key) => (
          <StageButton
            key={key}
            title={stageContent[key].title}
            onClick={() => onSelectStage(key)}
          />
        ))}
      </div>
    </div>
  );
};

export default StageSelection;
