import React, { useEffect, useState } from 'react';
import { fetchSkillById, fetchSkillVideos } from '../api';
import VideoPlayer from '../components/VideoPlayer';

const SkillDetails = ({ skillId }) => {
  const [skill, setSkill] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const skillResponse = await fetchSkillById(skillId);
        setSkill(skillResponse.data.data);

        const videosResponse = await fetchSkillVideos(skillId);
        setVideos(videosResponse.data.data);
      } catch (error) {
        console.error('Error fetching skill details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [skillId]);

  if (loading) {
    return <div className="loading">Loading skill details...</div>;
  }

  if (!skill) {
    return <div className="error">Skill not found</div>;
  }

  return (
    <div className="skill-details">
      <div className="skill-header">
        <h1>{skill.title}</h1>
        <p className="skill-meta">
          <span>{skill.duration}</span> • <span>{skill.level}</span>
        </p>
      </div>
      
      <div className="skill-content">
        <p>{skill.content}</p>
      </div>
      
      <div className="skill-videos">
        <h2>Videos</h2>
        {videos.length > 0 ? (
          videos.map(video => (
            <div key={video._id} className="video-item">
              <div className="video-info">
                <img 
                  src={video.thumbnail || '/images/fallback-thumbnail.jpg'} 
                  alt={video.title} 
                  className="video-thumbnail" 
                />
                <h3>{video.title}</h3>
              </div>
              <VideoPlayer videoUrl={video.videoUrl} />
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
};

export default SkillDetails;
