import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  fetchSkillById, 
  fetchSkillVideos, 
  fetchSkillSteps, 
  fetchSkillMarketOpportunities,
  fetchSkillDealers,
  fetchSkillFlashcards
} from '../api';

const SkillDetail = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [videos, setVideos] = useState([]);
  const [steps, setSteps] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [dealers, setDealers] = useState([]);
  const [flashcard, setFlashcard] = useState(null);
  const [activeTab, setActiveTab] = useState('videos');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch the skill details
        const skillResponse = await fetchSkillById(id);
        setSkill(skillResponse.data.data);
        
        // Fetch related data
        const [videosResponse, stepsResponse, opportunitiesResponse, dealersResponse, flashcardResponse] = await Promise.all([
          fetchSkillVideos(id),
          fetchSkillSteps(id),
          fetchSkillMarketOpportunities(id),
          fetchSkillDealers(id),
          fetchSkillFlashcards(id)
        ]);
        
        setVideos(videosResponse.data.data || []);
        setSteps(stepsResponse.data.data || []);
        setOpportunities(opportunitiesResponse.data.data || []);
        setDealers(dealersResponse.data.data || []);
        setFlashcard(flashcardResponse.data.data);
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching skill data:', err);
        setError('Failed to load skill details. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchSkillData();
  }, [id]);

  const handlePlayVideo = (video) => {
    setPlayingVideo(video);
  };

  const closeVideoModal = () => {
    setPlayingVideo(null);
  };

  const extractYouTubeId = (url) => {
    if (!url) return '';
    
    try {
      // Extract video ID from different YouTube URL formats
      if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        return urlParams.get('v') || '';
      } else if (url.includes('youtu.be/')) {
        return url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('youtube.com/embed/')) {
        return url.split('youtube.com/embed/')[1].split('?')[0];
      }
    } catch (error) {
      console.error('Error extracting YouTube ID:', error);
    }
    
    return '';
  };

  const getYouTubeThumbnail = (url) => {
    const videoId = extractYouTubeId(url);
    if (videoId) {
      // Return high quality thumbnail
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return null;
  };

  const getEmbedUrl = (url) => {
    if (!url) return '';
    
    // Handle YouTube URLs
    const videoId = extractYouTubeId(url);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Return original URL for non-YouTube videos
    return url;
  };

  const renderVideoModal = () => {
    if (!playingVideo) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative w-full max-w-4xl">
          <button 
            onClick={closeVideoModal}
            className="absolute -top-10 right-0 text-white text-xl"
          >
            &times; Close
          </button>
          <div className="bg-black rounded-lg overflow-hidden">
            {playingVideo.videoUrl ? (
              <iframe 
                src={getEmbedUrl(playingVideo.videoUrl)} 
                className="w-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                src={playingVideo.videoFile || ''}
                controls
                autoPlay
                className="w-full aspect-video"
              >
                Your browser does not support video playback.
              </video>
            )}
          </div>
          <h3 className="text-white text-xl mt-4">{playingVideo.title || 'Video'}</h3>
        </div>
      </div>
    );
  };

  const renderTabs = () => (
    <div className="mb-8 border-b">
      <div className="flex">
        <button
          className={`px-6 py-3 font-medium ${activeTab === 'videos' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>
        <button
          className={`px-6 py-3 font-medium ${activeTab === 'flashcards' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('flashcards')}
        >
          Flashcards
        </button>
        <button
          className={`px-6 py-3 font-medium ${activeTab === 'market' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('market')}
        >
          Market
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'videos') {
      // If no videos are available, show a placeholder
      const videoItems = videos.length === 0 ? 
        [{ _id: 'placeholder', title: 'A Beginner\'s Guide', thumbnail: 'https://via.placeholder.com/800x450' }] : 
        videos;
        
      return (
        <div className="grid grid-cols-1 gap-6">
          {videoItems.map((video) => {
            // Use YouTube thumbnail if videoUrl is a YouTube link, otherwise use the provided thumbnail
            const thumbnailUrl = video.videoUrl ? getYouTubeThumbnail(video.videoUrl) || video.thumbnail : video.thumbnail;
            
            return (
              <div key={video._id} className="relative">
                <img
                  src={thumbnailUrl || 'https://via.placeholder.com/800x450'}
                  alt={video.title || 'Video'}
                  className="w-full rounded-lg shadow-md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
                    onClick={() => handlePlayVideo(video)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                    </svg>
                  </button>
                </div>
                <p className="mt-4 text-lg font-semibold">{video.title || 'A Beginner\'s Guide'}</p>
              </div>
            );
          })}
        </div>
      );
    } else if (activeTab === 'flashcards') {
      if (flashcard) {
        return (
          <div className="flashcards-container space-y-8">
            <div className="skill-flashcard bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full flex justify-center">
                <img
                  src={flashcard.image} 
                  alt={flashcard.title} 
                  className="w-full object-contain max-h-full"
                  style={{ maxHeight: "100vh" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = flashcard.fallbackImage || "https://via.placeholder.com/800x450?text=Flashcard+Image";
                  }}
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{flashcard.title}</h2>
                
                <div className="steps-container space-y-6">
                  {flashcard.steps.map(step => (
                    <div key={step._id} className="step">
                      <h3 className="text-lg font-semibold">Step {step.stepNumber}: {step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }
      return <p className="text-center text-gray-500">Flashcards content coming soon.</p>;
    } else if (activeTab === 'market') {
      return (
        <div className="space-y-8">
          {/* Market Opportunities Section */}
          <div className="market-opportunities">
            <h2 className="text-xl font-bold mb-4">Market Opportunities</h2>
            {opportunities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opportunities.map(opportunity => (
                  <div key={opportunity._id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2">{opportunity.title}</h3>
                    <p className="text-gray-600">{opportunity.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No market opportunities available at this time.</p>
            )}
          </div>
          
          {/* Dealers Section - Show for Paper Bag Making, Candle Making, and Mask Making */}
          {(id === "1" || id === "7" || id === "4") && dealers.length > 0 && (
            <div className="dealers-section mt-8">
              <h2 className="text-xl font-bold mb-4">
                {id === "1" ? "Paper Bag Dealers in Thane" : 
                 id === "7" ? "Candle Making Suppliers and Support in Thane" :
                 "Mask Making Support Organizations in Thane"}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {dealers.map(dealer => (
                  <div key={dealer._id} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                    <h3 className="font-semibold text-lg">{dealer.name}</h3>
                    <div className="mt-2 space-y-1 text-sm">
                      <p><span className="font-medium">Address:</span> {dealer.address}</p>
                      <p><span className="font-medium">Contact:</span> {dealer.contact}</p>
                      {dealer.email && <p><span className="font-medium">Email:</span> {dealer.email}</p>}
                      {dealer.website && <p><span className="font-medium">Website:</span> <a href={dealer.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{dealer.website}</a></p>}
                      {dealer.category && <p><span className="font-medium">Category:</span> {dealer.category}</p>}
                      <p className="mt-2 text-gray-600">{dealer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <p>Loading skill details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-16">
        <div className="p-4 text-center text-red-600 bg-red-100 rounded-md">
          {error}
        </div>
      </div>
    );
  }

  if (!skill) {
    return (
      <div className="container py-16">
        <div className="p-4 text-center">
          <p>Skill not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container">
        <button className="mb-6 text-red-600 hover:underline" onClick={() => window.history.back()}>
          &larr; Back
        </button>
        <h1 className="mb-4 text-3xl font-bold">{skill.title}</h1>
        {renderTabs()}
        {renderContent()}
        {renderVideoModal()}
      </div>
    </div>
  );
};

export default SkillDetail;
