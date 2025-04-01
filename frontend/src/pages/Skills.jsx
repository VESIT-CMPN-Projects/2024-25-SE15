import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SkillCard from '../components/SkillCard';
import { fetchAllSkills } from '../api';
import { FiSearch, FiX, FiMessageCircle, FiSend } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

// API key as a string constant to prevent JS evaluation errors
const GROQ_API_KEY = "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";

const Skills = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAllSkills();
        if (response.status !== 200) {
          throw new Error('Failed to fetch skills');
        }
        setSkills(response.data.data);
        setFilteredSkills(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load skills. Please try again later or contact support.');
        setIsLoading(false);
      }
    };

    getSkills();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSkills(skills);
    } else {
      const filtered = skills.filter(skill => 
        skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSkills(filtered);
    }
  }, [searchTerm, skills]);

  const handleSkillClick = (skillId) => {
    navigate(`/skills/${skillId}`);
  };

  const handleThumbnailClick = (e, videoUrl) => {
    e.stopPropagation(); // Prevent triggering the parent skill card click
    if (videoUrl) {
      // Make sure we're using the embed URL format
      let embedUrl = videoUrl;
      if (videoUrl.includes('youtu.be/')) {
        // Convert youtu.be URL to embed format
        const videoId = videoUrl.split('youtu.be/')[1];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (videoUrl.includes('youtube.com/watch')) {
        // Convert watch URL to embed format
        const videoId = new URLSearchParams(videoUrl.split('?')[1]).get('v');
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      setCurrentVideo(embedUrl);
      setVideoModalOpen(true);
    }
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setCurrentVideo('');
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    // Add user message to chat history
    const userMessage = {
      role: 'user',
      content: chatMessage
    };
    
    setChatHistory(prev => [...prev, userMessage]);
    setIsChatLoading(true);
    setChatMessage(''); // Clear input immediately after sending
    
    try {
      // Direct API call to Groq using the string constant
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system", 
              content: "You are EmpowerHer Assistant, an AI guide for the EmpowerHer platform which is dedicated to helping women develop professional skills and advance their careers. The user is currently browsing the Skills page where they can explore various skill categories, watch educational videos, and search for specific skills by keywords. Your role is to:\n\n1. Help users find relevant skills on the platform based on their career goals\n2. Provide guidance on learning paths and skill development strategies\n3. Explain how different skills contribute to career advancement\n4. Recommend specific skills based on user's interests and career stage\n5. Answer questions about the platform's features and how to use them\n\nKeep responses concise, practical, and focused on empowering women in their professional journey. When appropriate, encourage users to explore the available skills on the platform."
            },
            ...chatHistory.map(msg => ({ role: msg.role, content: msg.content })),
            { role: "user", content: userMessage.content }
          ]
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from chat service');
      }
      
      const data = await response.json();
      const assistantResponse = {
        role: 'assistant',
        content: data.choices[0]?.message?.content || "Sorry, I couldn't generate a response."
      };
      
      setChatHistory(prev => [...prev, assistantResponse]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.'
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Debug function to ensure modal opens - enhanced version
  const openChatModal = () => {
    console.log("Opening chat modal - previous state:", chatModalOpen);
    // Force a state change with a callback to ensure React registers it
    setChatModalOpen(prev => {
      console.log("Setting modal to:", !prev);
      return true;
    });
    
    // Verify the state was updated correctly
    setTimeout(() => {
      console.log("Modal state after update:", chatModalOpen);
    }, 100);
  };

  const closeChatModal = () => {
    setChatModalOpen(false);
    // Keep chat history for when the user reopens the chat
  };

  // Format code blocks, lists, etc. in the chat response
  const formatMessage = (message) => {
    // Handle code blocks
    let formattedText = message.replace(
      /```([\s\S]*?)```/g, 
      '<pre class="bg-gray-800 text-white p-3 my-2 rounded-md overflow-x-auto">$1</pre>'
    );
    
    // Handle inline code
    formattedText = formattedText.replace(
      /`([^`]+)`/g, 
      '<code class="bg-gray-100 px-1 rounded">$1</code>'
    );
    
    // Handle bullet lists
    formattedText = formattedText.replace(
      /^\s*-\s+(.+)$/gm, 
      '<li class="ml-4">$1</li>'
    );
    
    // Handle numbered lists
    formattedText = formattedText.replace(
      /^\s*(\d+)\.\s+(.+)$/gm, 
      '<li class="ml-4 list-decimal">$2</li>'
    );
    
    // Handle bold text
    formattedText = formattedText.replace(
      /\*\*([^*]+)\*\*/g, 
      '<strong>$1</strong>'
    );
    
    // Handle italic text
    formattedText = formattedText.replace(
      /\*([^*]+)\*/g, 
      '<em>$1</em>'
    );
    
    // Handle paragraphs
    formattedText = formattedText.replace(
      /\n\n/g, 
      '</p><p>'
    );
    
    return `<p>${formattedText}</p>`;
  };

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold text-center">{t('skills.title')}</h1>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder={t('skills.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FiSearch className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2" size={20} />
          </div>
        </div>
        
        {/* Enhanced Red Chat bot icon - fixed position with pulse effect */}
        <div className="fixed bottom-8 right-8 z-50">
          <div 
            className="relative cursor-pointer"
            onClick={openChatModal}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openChatModal();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Open AI Assistant"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300">
              <FiMessageCircle size={28} />
            </div>
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-red-600 opacity-30 animate-ping"></span>
            {/* Label */}
            <span className="absolute -top-2 -right-2 bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-full">AI</span>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <p>{t('skills.loading')}</p>
          </div>
        ) : error ? (
          <div className="p-4 text-center text-red-600 bg-red-100 rounded-md">
            {error}
          </div>
        ) : filteredSkills.length === 0 ? (
          <div className="p-4 text-center">
            <p>{t('skills.noSkills')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill._id}
                className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div 
                  className="relative cursor-pointer"
                  onClick={() => handleSkillClick(skill._id)}
                >
                  <img 
                    src={skill.thumbnail || 'https://via.placeholder.com/300x200?text=No+Image'} 
                    alt={skill.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {skill.videoUrl && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
                      onClick={(e) => handleThumbnailClick(e, skill.videoUrl)}
                    >
                      <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div onClick={() => handleSkillClick(skill._id)} className="cursor-pointer">
                  <SkillCard skill={skill} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-semibold">{t('components.videoModal.title')}</h3>
                <button 
                  onClick={closeVideoModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={t('components.videoModal.close')}
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={currentVideo}
                  title={t('pages.skills.videoPreview')}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Chat Modal with improved mounting */}
        {chatModalOpen ? (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000] p-4"
            onClick={(e) => {
              // Close when clicking the backdrop, but not when clicking inside the modal
              if (e.target === e.currentTarget) {
                closeChatModal();
              }
            }}
          >
            <div className="bg-white rounded-lg w-full max-w-lg h-[600px] overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-4 border-b bg-red-600 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <FiMessageCircle size={20} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('components.chatAssistant.title')}</h3>
                </div>
                <button 
                  onClick={closeChatModal}
                  className="text-white hover:text-gray-200 focus:outline-none"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50" id="chat-messages">
                {/* Welcome message */}
                {chatHistory.length === 0 && (
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white mr-2 flex-shrink-0">
                      <FiMessageCircle size={16} />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-gray-800">
                        {t('components.chatAssistant.welcome')}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Chat messages */}
                {chatHistory.map((msg, index) => (
                  <div key={index} className={`flex items-start mb-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white mr-2 flex-shrink-0">
                        <FiMessageCircle size={16} />
                      </div>
                    )}
                    
                    <div className={`p-3 rounded-lg shadow-sm max-w-[80%] ${
                      msg.role === 'user' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-white text-gray-800'
                    }`}>
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: formatMessage(msg.content) 
                        }} 
                        className="message-content"
                      />
                    </div>
                    
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                
                {isChatLoading && (
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white mr-2 flex-shrink-0">
                      <FiMessageCircle size={16} />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="border-t p-4 bg-white">
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder={t('components.chatAssistant.placeholder')}
                    className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={isChatLoading}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 flex items-center justify-center"
                    disabled={isChatLoading || !chatMessage.trim()}
                  >
                    <FiSend size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Skills;
