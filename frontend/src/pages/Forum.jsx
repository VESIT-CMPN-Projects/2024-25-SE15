import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMessageSquare, FiUser, FiClock, FiPlusCircle, FiFilter, FiSearch } from 'react-icons/fi';

// Mock data for forum categories
const forumCategories = [
  { id: 1, name: 'General Discussion', icon: '💬', description: 'Talk about anything related to women empowerment' },
  { id: 2, name: 'Skill Sharing', icon: '🧠', description: 'Share your knowledge and ask questions about skills' },
  { id: 3, name: 'Market Opportunities', icon: '💼', description: 'Discuss market trends and business opportunities' },
  { id: 4, name: 'Success Stories', icon: '🌟', description: 'Share your journey and celebrate achievements' },
  { id: 5, name: 'Resources', icon: '📚', description: 'Share helpful resources, tools, and materials' }
];

// Mock data for forum posts
const initialPosts = [
  { 
    id: 1, 
    title: 'How I started my paper bag business', 
    author: 'Priya Sharma', 
    date: '2023-05-15', 
    category: 'Success Stories',
    replies: 24,
    views: 342,
    content: 'I wanted to share my journey of starting a paper bag business after completing the course...',
    isPopular: true
  },
  { 
    id: 2, 
    title: 'Looking for eco-friendly paper suppliers', 
    author: 'Meera Patel', 
    date: '2023-05-20', 
    category: 'Market Opportunities',
    replies: 15,
    views: 189,
    content: 'Can anyone recommend good suppliers for eco-friendly paper that is suitable for making bags?',
    isPopular: false
  },
  { 
    id: 3, 
    title: 'Tips for improving sewing speed?', 
    author: 'Anjali Gupta', 
    date: '2023-05-22', 
    category: 'Skill Sharing',
    replies: 32,
    views: 410,
    content: 'I\'ve been making cloth bags for a few months now but I\'m still quite slow. Any tips to improve speed?',
    isPopular: true
  },
  { 
    id: 4, 
    title: 'Local women entrepreneur meetup in Delhi', 
    author: 'Kavita Reddy', 
    date: '2023-05-25', 
    category: 'General Discussion',
    replies: 18,
    views: 203,
    content: 'I\'m organizing a meetup for women entrepreneurs in Delhi next month. Would anyone be interested?',
    isPopular: false
  },
  { 
    id: 5, 
    title: 'Free online courses for digital marketing', 
    author: 'Sunita Jain', 
    date: '2023-05-28', 
    category: 'Resources',
    replies: 29,
    views: 376,
    content: 'I found some great free courses for digital marketing that helped me promote my products online...',
    isPopular: true
  },
  { 
    id: 6, 
    title: 'How to price your handmade products', 
    author: 'Deepa Singh', 
    date: '2023-06-01', 
    category: 'Market Opportunities',
    replies: 41,
    views: 520,
    content: 'I\'ve been struggling with pricing my handmade items. How do you all calculate fair prices?',
    isPopular: true
  },
  { 
    id: 7, 
    title: 'My experience selling at the local market', 
    author: 'Lakshmi Rao', 
    date: '2023-06-05', 
    category: 'Success Stories',
    replies: 12,
    views: 168,
    content: 'Last weekend I sold my handmade candles at our local market and wanted to share the experience...',
    isPopular: false
  },
  { 
    id: 8, 
    title: 'New government scheme for women entrepreneurs', 
    author: 'Reema Kapoor', 
    date: '2023-06-08', 
    category: 'Resources',
    replies: 36,
    views: 412,
    content: 'The government just announced a new loan scheme for women entrepreneurs. Here are the details...',
    isPopular: true
  }
];

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    // Simulate loading posts from an API
    const loadPosts = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
      setPosts(initialPosts);
      setIsLoading(false);
    };

    loadPosts();
  }, []);

  // Filter posts based on category and search term
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'popular') {
      return b.replies - a.replies;
    } else if (sortBy === 'views') {
      return b.views - a.views;
    }
    return 0;
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Forum</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with other women, share your experiences, ask questions, and find support on your journey to economic independence.
          </p>
        </div>

        {/* Create Post Button */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors shadow-md">
            <FiPlusCircle className="mr-2" />
            Create New Post
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleCategoryChange('All')}
                    className={`w-full text-left px-3 py-2 rounded ${activeCategory === 'All' ? 'bg-red-50 text-red-600 font-medium' : 'hover:bg-gray-100'}`}
                  >
                    All Categories
                  </button>
                </li>
                {forumCategories.map(category => (
                  <li key={category.id}>
                    <button 
                      onClick={() => handleCategoryChange(category.name)}
                      className={`w-full text-left px-3 py-2 rounded ${activeCategory === category.name ? 'bg-red-50 text-red-600 font-medium' : 'hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Posts List */}
          <div className="lg:w-3/4">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="flex items-center gap-2">
                <FiFilter className="text-gray-500" />
                <select 
                  value={sortBy}
                  onChange={handleSortChange}
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Replies</option>
                  <option value="views">Most Views</option>
                </select>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
              </div>
            ) : sortedPosts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-10 text-center">
                <p className="text-lg text-gray-600 mb-6">No discussions found matching your criteria.</p>
                <button 
                  onClick={() => {setActiveCategory('All'); setSearchTerm('');}}
                  className="text-red-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">
                          <Link to={`/forum/post/${post.id}`} className="hover:text-red-600 transition-colors">
                            {post.title}
                          </Link>
                          {post.isPopular && (
                            <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </h3>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.content}
                      </p>
                      <div className="flex flex-wrap items-center text-sm text-gray-500">
                        <div className="flex items-center mr-4">
                          <FiUser className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center mr-4">
                          <FiClock className="mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center mr-4">
                          <FiMessageSquare className="mr-1" />
                          {post.replies} replies
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {post.views} views
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination (simplified for now) */}
            {!isLoading && sortedPosts.length > 0 && (
              <div className="flex justify-center mt-10">
                <nav className="flex items-center gap-1">
                  <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
                  <button className="px-3 py-1 border rounded bg-red-600 text-white">1</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
                  <span className="px-2">...</span>
                  <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
                </nav>
              </div>
            )}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-16 p-6 bg-yellow-50 rounded-lg border border-yellow-100">
          <h2 className="text-xl font-semibold mb-3">Community Guidelines</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Be respectful and supportive of other community members</li>
            <li>Share your knowledge and experiences to help others grow</li>
            <li>Keep discussions relevant to women's empowerment and skill development</li>
            <li>Respect privacy and confidentiality when sharing personal stories</li>
            <li>Report any inappropriate content to our moderators</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Forum;
