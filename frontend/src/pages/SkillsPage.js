import React, { useEffect, useState } from 'react';
import { fetchAllSkills } from '../api';
import SkillCard from '../components/SkillCard';

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        setLoading(true);
        const response = await fetchAllSkills();
        setSkills(response.data.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  if (loading) {
    return <div className="loading">Loading skills...</div>;
  }

  return (
    <div className="skills-page">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skills.map(skill => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
