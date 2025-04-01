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
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white to-red-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center">
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
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-lg">
              {t('home.hero.description')}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-red-600 text-white px-10 py-4 rounded-lg hover:bg-red-700 font-medium text-lg shadow-lg transform transition duration-300"
            >
              {t('home.hero.cta')}
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          >
            <img
              src="image.png" // Replace with a valid placeholder or local image
              alt="EmpowerHer Hero"
              className="rounded-2xl shadow-2xl w-[90%] max-w-[787px] h-auto object-cover border-4 border-white"
              style={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            />
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
          >
            <div className="p-6 bg-red-50 rounded-xl shadow-sm transform transition-transform hover:scale-105">
              <h2 className="text-5xl font-bold text-red-600">5000+</h2>
              <p className="text-gray-700 text-lg font-medium mt-2">{t('home.stats.womenTrained')}</p>
            </div>
            <div className="p-6 bg-red-50 rounded-xl shadow-sm transform transition-transform hover:scale-105">
              <h2 className="text-5xl font-bold text-red-600">10+</h2>
              <p className="text-gray-700 text-lg font-medium mt-2">{t('home.stats.skillsOffered')}</p>
            </div>
            <div className="p-6 bg-red-50 rounded-xl shadow-sm transform transition-transform hover:scale-105">
              <h2 className="text-5xl font-bold text-red-600">1000+</h2>
              <p className="text-gray-700 text-lg font-medium mt-2">{t('home.stats.successStories')}</p>
            </div>
            <div className="p-6 bg-red-50 rounded-xl shadow-sm transform transition-transform hover:scale-105">
              <h2 className="text-5xl font-bold text-red-600">50+</h2>
              <p className="text-gray-700 text-lg font-medium mt-2">{t('home.stats.partners')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-red-600 inline-block relative">
              {t('home.skills.title')}
              <div className="h-1 w-24 bg-red-600 mx-auto mt-4"></div>
            </h2>
            <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
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
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill._id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
                >
                  <img 
                    src={skill.thumbnail} 
                    alt={skill.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                    <p className="mt-2 text-gray-600">{skill.description}</p>
                    <Link to={`/skills/${skill._id}`} className="mt-4 inline-block text-red-600 font-medium hover:text-red-700">
                      {t('home.skills.learnMore')} →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-b from-white to-yellow-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>
                <img
                  src="/image copy.png"
                  alt="About Us"
                  className="rounded-2xl shadow-2xl relative z-10 border-8 border-white"
                  style={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 mt-10 lg:mt-0">
              <h2 className="text-4xl font-extrabold text-red-600 after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mt-4">{t('home.about.title')}</h2>
              <p className="mt-8 text-lg text-gray-700 leading-relaxed">
                {t('home.about.description1')}
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                {t('home.about.description2')}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 font-medium text-lg shadow-md transform transition duration-300"
              >
                {t('home.about.button')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
