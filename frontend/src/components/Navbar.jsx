import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    setShowSearch(false);
  }, [location.pathname]);

  useEffect(() => {
    // This is just to force re-render when language changes
    console.log("Language changed to:", currentLanguage);
  }, [currentLanguage]);

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary-600 font-medium' : 'text-text-primary hover:text-primary-600';
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/5750e2c8-11f4-4a60-94d4-99a7589f14bd/WWF%20LOGO%20.png/:/rs=w:190,h:200,cg=true,m/cr=w:190,h:200/qt=q:95"
              alt="EmpowerHer Logo"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-primary-600 hidden sm:block">EmpowerHer</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {!showSearch && (
              <>
                <Link to="/" className={`${isActive('/')} px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300`}>{t('nav.home')}</Link>
                <Link to="/skills" className={`${isActive('/skills')} px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300`}>{t('nav.skills')}</Link>
                <Link to="/forum" className={`${isActive('/forum')} px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300`}>{t('nav.forum')}</Link>
                <Link to="/support" className={`${isActive('/support')} px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300`}>{t('nav.support')}</Link>
                
                <LanguageSwitcher />
              </>
            )}
            
            {showSearch && (
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder={t('nav.search')}
                  className="w-64 form-input pr-10"
                  autoFocus
                />
                <button 
                  onClick={() => setShowSearch(false)}
                  className="absolute right-3 text-gray-400 hover:text-gray-600"
                >
                  <FiX size={18} />
                </button>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            
            <button 
              onClick={() => setShowSearch(!showSearch)} 
              className="p-2 mr-2 text-text-primary rounded-full hover:bg-gray-100"
              aria-label="Search"
            >
              <FiSearch size={22} />
            </button>
            
            <button 
              className="p-2 rounded-full text-text-primary hover:bg-gray-100" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile search bar */}
        {showSearch && (
          <div className="mt-4 relative md:hidden">
            <input
              type="text"
              placeholder={t('nav.search')}
              className="w-full form-input pr-10"
              autoFocus
            />
            <button 
              onClick={() => setShowSearch(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <FiX size={18} />
            </button>
          </div>
        )}
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 rounded-b-xl animate-fade-in">
            <div className="flex flex-col py-4 px-4">
              <Link to="/" className={`${isActive('/')} py-3 px-4 rounded-lg`}>{t('nav.home')}</Link>
              <Link to="/skills" className={`${isActive('/skills')} py-3 px-4 rounded-lg my-1`}>{t('nav.skills')}</Link>
              <Link to="/forum" className={`${isActive('/forum')} py-3 px-4 rounded-lg my-1`}>{t('nav.forum')}</Link>
              <Link to="/support" className={`${isActive('/support')} py-3 px-4 rounded-lg my-1`}>{t('nav.support')}</Link>
              
              <div className="border-t border-gray-100 my-3 pt-3">
                <Link to="/login" className="block py-3 px-4 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors">
                  {t('nav.signIn')}
                </Link>
                <Link to="/register" className="block py-3 px-4 rounded-lg mt-2 bg-primary-600 text-white hover:bg-primary-700 transition-colors text-center">
                  {t('nav.joinNow')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
