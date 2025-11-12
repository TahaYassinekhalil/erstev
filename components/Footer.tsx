
import React from 'react';

interface FooterProps {
  content: {
    copyright: string;
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="w-full py-6 mt-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-sm">
          {content.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
