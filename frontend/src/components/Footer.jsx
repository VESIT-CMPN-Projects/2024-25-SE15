import { Link } from 'react-router-dom';
import { FiHeart, FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin, FiArrowRight, FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-gray-200 via-gray-100 to-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img src="https://img1.wsimg.com/isteam/ip/5750e2c8-11f4-4a60-94d4-99a7589f14bd/WWF%20LOGO%20.png/:/rs=w:190,h:200,cg=true,m/cr=w:190,h:200/qt=q:95" alt="EmpowerHer Logo" className="h-12 w-auto" />
              <h3 className="ml-3 text-xl font-bold text-red-700">EmpowerHer</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Empowering women through skills development, market opportunities, and community support for economic independence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/womenswelfarefoundation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 hover:bg-red-200 hover:text-red-800 transition-all duration-300 transform hover:scale-110 shadow-sm">
                <FiInstagram size={18} />
              </a>
              <a href="https://www.facebook.com/womenswelfarefoundation?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 hover:bg-red-200 hover:text-red-800 transition-all duration-300 transform hover:scale-110 shadow-sm">
                <FiFacebook size={18} />
              </a>
              <a href="https://womenswelfarefoundation.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 hover:bg-red-200 hover:text-red-800 transition-all duration-300 transform hover:scale-110 shadow-sm">
                <FiGlobe size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-red-700 before:rounded-full">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-red-700 transition-colors duration-300 flex items-center group">
                  <FiArrowRight className="mr-2 transform transition-transform group-hover:translate-x-1 text-red-600" size={14} />
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-700 hover:text-red-700 transition-colors duration-300 flex items-center group">
                  <FiArrowRight className="mr-2 transform transition-transform group-hover:translate-x-1 text-red-600" size={14} />
                  {t('nav.skills')}
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-700 hover:text-red-700 transition-colors duration-300 flex items-center group">
                  <FiArrowRight className="mr-2 transform transition-transform group-hover:translate-x-1 text-red-600" size={14} />
                  {t('nav.forum')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-red-700 before:rounded-full">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mt-1.5 mr-3 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700 shadow-sm">
                  <FiMail size={16} />
                </div>
                <div>
                  <span className="block text-gray-900 font-medium mb-1">Email</span>
                  <a href="mailto:info@empowerher.org" className="text-gray-700 hover:text-red-700 transition-colors duration-300">
                    womenswelfarefoundation.org@<br/>gmail.com
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="mt-1.5 mr-3 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700 shadow-sm">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <span className="block text-gray-900 font-medium mb-1">Address</span>
                  <address className="text-gray-700 not-italic">
                    B wing, Sushila Apartment 2, Kaka Sohani path, Ram Maruti road, ghantali, Thane west
                  </address>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-red-700 before:rounded-full">
              {t('footer.mission')}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('footer.missionText')}
            </p>
            <Link to="/about" className="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors group">
              {t('footer.learnMore')}
              <FiArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} EmpowerHer. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
