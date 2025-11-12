
import React, { useState } from 'react';
import { type UIContent } from '../types';

interface EmailFormProps {
    uiContent: UIContent;
}

const EmailForm: React.FC<EmailFormProps> = ({ uiContent }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., API call
        if (email.trim() !== '' && email.includes('@')) {
            setIsSubmitted(true);
        }
    };

    return (
        <section className="bg-white w-full py-12 mt-10">
            <div className="container mx-auto px-4 text-center max-w-2xl">
                {isSubmitted ? (
                    <div className="p-6 bg-green-100 text-green-800 rounded-lg">
                        <p className="font-semibold text-xl">{uiContent.emailSuccessMessage}</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{uiContent.emailFormTitle}</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={uiContent.emailPlaceholder}
                                required
                                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                {uiContent.emailSubmitButton}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
};

export default EmailForm;
