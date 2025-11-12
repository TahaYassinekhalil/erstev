
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StageSelection from './components/StageSelection';
import StageDetails from './components/StageDetails';
import EmailForm from './components/EmailForm';
import { type StageKey, type Language, content } from './services/content';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('de');
  const [selectedStage, setSelectedStage] = useState<StageKey | null>(null);

  const currentContent = content[language];
  const stages = Object.keys(currentContent.stages) as StageKey[];

  const handleSelectStage = (stageKey: StageKey) => {
    setSelectedStage(stageKey);
  };

  const handleBack = () => {
    setSelectedStage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header currentLanguage={language} onLanguageChange={setLanguage} uiContent={currentContent.ui} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 text-center">
        {selectedStage === null ? (
          <StageSelection
            onSelectStage={handleSelectStage}
            content={currentContent}
            stages={stages}
          />
        ) : (
          <StageDetails
            onBack={handleBack}
            stage={currentContent.stages[selectedStage]}
            uiContent={currentContent.ui}
          />
        )}
      </main>
      <EmailForm uiContent={currentContent.ui} />
      <Footer content={currentContent.footer} />
    </div>
  );
};

export default App;
