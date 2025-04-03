import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchFeaturedSkills } from '../api';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await fetchFeaturedSkills();
        setSkills(response.data.data.slice(0, 4)); // Limit to 4 skills
        setLoading(false);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError('Failed to load featured skills');
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Reduced padding */}
      <section className="relative bg-gradient-to-r from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-5xl font-extrabold text-red-600 leading-tight tracking-tight">
              {t('home.hero.title')} <br /> 
              <span className="text-gray-800">{t('home.hero.subtitle')}</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-lg">
              {t('home.hero.description')}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-red-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg transform transition-all duration-300"
            >
              {t('home.hero.cta')}
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-200 to-yellow-100 rounded-2xl transform rotate-2 scale-105"></div>
              <img
                src=
 "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFgQJyTeG0SICtF-Ml/root/content"


                alt="EmpowerHer Hero"
                className="relative rounded-2xl shadow-xl w-full max-w-[700px] h-auto object-cover border-2 border-white z-10"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>



      {/* Skills Section - Improved visual hierarchy */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-red-600 inline-block relative">
              {t('home.skills.title')}
              <div className="h-1 w-24 bg-red-600 mx-auto mt-3"></div>
            </h2>
            <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
              {t('home.skills.subtitle')}
            </p>
          </motion.div>

          {error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border border-red-200 rounded-lg p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-2">Failed to load skill details</h3>
              <p className="text-gray-700">Please try again later or contact support if this issue persists.</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          ) : loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="bg-gradient-to-b from-white to-red-50 rounded-xl shadow-md overflow-hidden transform transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={skill.thumbnail} 
                      alt={skill.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">{skill.description}</p>
                    <a 
                      href="https://womenswelfarefoundation.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-3 inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                    >
                      {t('home.skills.learnMore')} 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* About Us Section - Enhanced visuals */}
      <section className="bg-gradient-to-b from-white to-yellow-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: "1s" }}></div>
                <img
                  src="https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFgQGXD-YGTSz-QCYG/root/content"
                  alt="About Us"
                  className="rounded-2xl shadow-xl relative z-10 border-4 border-white"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 mt-6 lg:mt-0">
              <h2 className="text-4xl font-extrabold text-red-600 after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mt-4">{t('home.about.title')}</h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                {t('home.about.description1')}
              </p>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">
                {t('home.about.description2')}
              </p>
              <motion.a 
                href="https://womenswelfarefoundation.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-red-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-md transform transition-all duration-300 inline-block"
              >
                {t('home.about.button')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
