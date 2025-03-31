import { Link } from 'react-router-dom';
import { FiHeart, FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white">
      {/* Newsletter Section */}

      
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img src="https://img1.wsimg.com/isteam/ip/5750e2c8-11f4-4a60-94d4-99a7589f14bd/WWF%20LOGO%20.png/:/rs=w:190,h:200,cg:true,m/cr=w:190,h:200/qt=q:95" alt="EmpowerHer Logo" className="h-10 w-auto" />
              <h3 className="ml-3 text-xl font-bold text-primary-600">EmpowerHer</h3>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Empowering women through skills development, market opportunities, and community support for economic independence.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-primary-600 before:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-text-secondary hover:text-primary-600 transition-colors duration-300 flex items-center group">
                  <FiArrowRight className="mr-2 transform transition-transform group-hover:translate-x-1" size={14} />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-text-secondary hover:text-primary-600 transition-colors duration-300 flex items-center group">
                  <FiArrowRight className="mr-2 transform transition-transform group-hover:translate-x-1" size={14} />
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-text-secondary hover:text-primary-600 transition-colors duration-300 flex items-center group">
                  <FiArrowRight className="mr-2 transform transition-transform group-hover:translate-x-1" size={14} />
                  Forum
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-primary-600 transition-colors duration-300 flex items-center group">
                  <FiArrowRight className="mr-2 transform transition-transform group-hover:translate-x-1" size={14} />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-primary-600 transition-colors duration-300 flex items-center group">
                  <FiArrowRight className="mr-2 transform transition-transform group-hover:translate-x-1" size={14} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-primary-600 before:rounded-full">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mt-1.5 mr-3 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                  <FiMail size={16} />
                </div>
                <div>
                  <span className="block text-text-primary font-medium mb-1">Email</span>
                  <a href="mailto:info@empowerher.org" className="text-text-secondary hover:text-primary-600 transition-colors duration-300">
                    info@empowerher.org
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="mt-1.5 mr-3 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                  <FiPhone size={16} />
                </div>
                <div>
                  <span className="block text-text-primary font-medium mb-1">Phone</span>
                  <a href="tel:+1234567890" className="text-text-secondary hover:text-primary-600 transition-colors duration-300">
                    +123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="mt-1.5 mr-3 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <span className="block text-text-primary font-medium mb-1">Address</span>
                  <address className="text-text-secondary not-italic">
                    123 Empowerment Street,<br />City, State 12345
                  </address>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-primary-600 before:rounded-full">
              Our Mission
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              We're dedicated to empowering women with the skills and opportunities they need to achieve economic independence and build a better future.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group">
              Learn more about us
              <FiArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              © {currentYear} EmpowerHer. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-text-secondary hover:text-primary-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-text-secondary hover:text-primary-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-text-secondary hover:text-primary-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
          <p className="mt-6 flex items-center justify-center text-text-secondary text-sm">
            Made with <FiHeart className="mx-1 text-primary-500" /> for women empowerment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
