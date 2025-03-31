import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: t('language.english') },
    { code: 'hi', name: t('language.hindi') },
    { code: 'mr', name: t('language.marathi') }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Helper to get current language name
  const getCurrentLanguageName = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.name : languages[0].name;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-primary-600 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <FiGlobe className="mr-1" size={18} />
        <span className="hidden md:inline-block">{getCurrentLanguageName()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 animate-fade-in">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 ${
                i18n.language === language.code ? 'text-primary-600 font-medium' : 'text-gray-700'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
