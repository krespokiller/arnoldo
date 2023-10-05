// components/Header.js
import React from 'react';

const Header = ({ language, setLanguage }) => {
  const switchLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  const translations = () => {
    if (language === 'en') {
      return (
        <div className="flex justify-end mr-4">
          <button className="text-blue transition duration-300">EN</button>
          <button onClick={() => switchLanguage('es')} className="text-black hover:text-blue-dark transition duration-300 ml-4">ES</button>
        </div>
      );
    } else {
      return (
        <div className="flex justify-end mr-4">
          <button onClick={() => switchLanguage('en')} className="text-black hover:text-blue-dark transition duration-300">EN</button>
          <button className="text-blue ml-4 transition duration-300">ES</button>
        </div>
      );
    }
  };

  return (
    <header className="bg-white border-b border-gray-light">
      <div className="container grid grid-cols-2">
        <p className="font-semibold text-gray-dark">
          David Vargas
        </p>
        {translations()}
      </div>
    </header>
  );
};


export default Header;
