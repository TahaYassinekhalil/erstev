
import React, { useState } from 'react';
import { type Language, content } from '../services/content';
import { type UIContent } from '../types';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  uiContent: UIContent;
}

const LanguageIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange, uiContent }) => {
    const [isOpen, setIsOpen] = useState(false);
    const languages = Object.keys(content) as Language[];

    const handleSelectLanguage = (lang: Language) => {
        onLanguageChange(lang);
        setIsOpen(false);
    }

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <div className="flex items-center space-x-2">
                             <img src="https://picsum.photos/40/40" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
                             <span className="text-xl font-semibold text-gray-700">Zukunft</span>
                        </div>
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                        >
                            <LanguageIcon/>
                            <span className="hidden sm:inline">{uiContent.languages[currentLanguage]}</span>
                            <svg className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {isOpen && (
                            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
                                {languages.map((lang) => (
                                    <li key={lang}>
                                        <button
                                            onClick={() => handleSelectLanguage(lang)}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {uiContent.languages[lang]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
