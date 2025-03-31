// Static data to replace backend API calls

// Sample skills data
const skillsData = [
  { 
    _id: "1", 
    title: "Paper Bag Making", 
    description: "Learn how to create eco-friendly paper bags", 
    thumbnail: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFb3v8XnU0WdTTaxI/root/content", 
    content: "Paper bag making is an eco-friendly skill that helps reduce plastic waste. This course teaches you how to create durable and attractive paper bags using simple materials.",
    duration: "2 weeks",
    level: "Beginner"
  },
  { 
    _id: "2", 
    title: "Cloth Bag Making", 
    description: "Create sustainable and stylish cloth bags", 
    thumbnail: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFcjrqDwYCMfA7j7g/root/content",
    content: "Cloth bag making is a sustainable alternative to plastic bags. Learn to design and sew different types of cloth bags that are both functional and fashionable.",
    duration: "3 weeks",
    level: "Beginner"
  },
  { 
    _id: "3", 
    title: "Sanitizer Making", 
    description: "Learn to make effective hand sanitizers at home", 
    thumbnail: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFcSO-WEQxJ_zthjw/root/content",
    content: "This course teaches you how to make effective hand sanitizers using readily available ingredients. Learn the correct proportions and methods for safe and effective sanitizers.",
    duration: "1 week",
    level: "Beginner"
  },
  { 
    _id: "4", 
    title: "Mask Making", 
    description: "Create protective and comfortable face masks", 
    thumbnail: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFddS7ZS2yuWtWddQ/root/content",
    content: "Learn how to make protective face masks that are both effective and comfortable. This skill helps protect yourself and others while offering potential income opportunities.",
    duration: "2 weeks",
    level: "Beginner"
  },
  { 
    _id: "5", 
    title: "Sanitary Pads Making", 
    description: "Create affordable and eco-friendly sanitary pads", 
    thumbnail: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFbh3-OTrcAQ79IKU/root/content",
    content: "This course teaches you how to make reusable, eco-friendly sanitary pads. Learn about sustainable menstrual health solutions that are cost-effective and environmentally responsible.",
    duration: "2 weeks",
    level: "Intermediate"
  },
  { 
    _id: "6", 
    title: "Diya Making", 
    description: "Craft beautiful traditional diyas for festivals", 
    thumbnail: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFcOe1tb48X10FguA/root/content",
    content: "Diya making is a traditional craft that's especially popular during festivals. Learn to create beautiful clay diyas with various designs and decorations.",
    duration: "3 weeks",
    level: "Beginner"
  },
  { 
    _id: "7", 
    title: "Candle Making", 
    description: "Create decorative and scented candles", 
    thumbnail: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFbPR6XmFHLSPjkuE/root/content",
    content: "Candle making is both a relaxing hobby and a potential business. Learn to make various types of candles including decorative, scented, and specialty designs.",
    duration: "4 weeks",
    level: "Beginner"
  }
];

// Sample videos data
const videosData = {
  "1": [
    { 
      _id: "v1", 
      title: "Introduction to Paper Bag Making", 
      videoUrl: "https://youtu.be/CWu3wHXS2LU?si=cAo3wF7o9ysfabY_" // Reverted to original
    },
    { 
      _id: "v2", 
      title: "Creating Decorative Paper Bags", 
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Original format
    }
  ],
  "2": [
    { 
      _id: "v3", 
      title: "Basic Cloth Bag Sewing Techniques", 
      videoUrl: "https://youtu.be/R0wIqnaxyHA?si=_GpuMmSwdRaqHvF6" // Replace with a valid video URL
    },
    { 
      _id: "v4", 
      title: "Advanced Cloth Bag Designs", 
      videoUrl: "https://www.youtube.com/embed/example2" // Replace with a valid video URL
    }
  ],
  "3": [
    { 
      _id: "v5", 
      title: "Hand Sanitizer Ingredients and Safety", 
      videoUrl: "https://youtu.be/UmGGVMZzQPg?si=sbnjbOMtpK7lvwEC" // Replace with a valid video URL
    },
    { 
      _id: "v6", 
      title: "Making Effective Sanitizers at Home", 
      videoUrl: "https://www.youtube.com/embed/example4" // Replace with a valid video URL
    }
  ],
  "4": [
    { 
      _id: "v7", 
      title: "Face Mask Materials and Patterns", 
      videoUrl: "https://youtu.be/j434tTfoYME?si=LvEu8vlaH30d92QG" // Replace with a valid video URL
    },
    { 
      _id: "v8", 
      title: "Sewing Comfortable and Effective Masks", 
      videoUrl: "https://www.youtube.com/embed/example6" // Replace with a valid video URL
    }
  ],
  "5": [
    { 
      _id: "v9", 
      title: "Sustainable Materials for Sanitary Pads", 
      videoUrl: "https://youtu.be/VPCxi6fXMeA?si=_2ZB8vV_0mXjzxDa" // Replace with a valid video URL
    },
    { 
      _id: "v10", 
      title: "Crafting Reusable Sanitary Pads", 
      videoUrl: "https://www.youtube.com/embed/example8" // Replace with a valid video URL
    }
  ],
  "6": [
    { 
      _id: "v11", 
      title: "Traditional Diya Making Techniques", 
      videoUrl: "https://youtu.be/VIzsFbshMns?si=BaTInmoYkbv5zdg_" // Replace with a valid video URL
    },
    { 
      _id: "v12", 
      title: "Decorative Diya Designs", 
      videoUrl: "https://www.youtube.com/embed/example10" // Replace with a valid video URL
    }
  ],
  "7": [
    { 
      _id: "v13", 
      title: "Candle Making Basics", 
      videoUrl: "https://www.youtube.com/embed/example11" // Replace with a valid video URL
    },
    { 
      _id: "v14", 
      title: "Creating Scented and Decorative Candles", 
      videoUrl: "https://www.youtube.com/embed/example12" // Replace with a valid video URL
    }
  ]
};

// Sample steps data
const stepsData = {
  "1": [
    { _id: "s1", stepNumber: 1, title: "Preparing paper and tools", image: "/images/steps/paper-prep.jpg" },
    { _id: "s2", stepNumber: 2, title: "Folding and gluing techniques", image: "/images/steps/paper-folding.jpg" }
  ],
  "2": [
    { _id: "s3", stepNumber: 1, title: "Choosing fabric and measuring", image: "https://via.placeholder.com/300x200" },
    { _id: "s4", stepNumber: 2, title: "Cutting and sewing cloth bags", image: "https://via.placeholder.com/300x200" }
  ],
  "3": [
    { _id: "s5", stepNumber: 1, title: "Gathering ingredients safely", image: "https://via.placeholder.com/300x200" },
    { _id: "s6", stepNumber: 2, title: "Mixing and bottling sanitizers", image: "https://via.placeholder.com/300x200" }
  ],
  "4": [
    { _id: "s7", stepNumber: 1, title: "Selecting suitable mask materials", image: "https://via.placeholder.com/300x200" },
    { _id: "s8", stepNumber: 2, title: "Sewing effective face masks", image: "https://via.placeholder.com/300x200" }
  ],
  "5": [
    { _id: "s9", stepNumber: 1, title: "Choosing absorbent and safe fabrics", image: "https://via.placeholder.com/300x200" },
    { _id: "s10", stepNumber: 2, title: "Cutting and assembling pads", image: "https://via.placeholder.com/300x200" }
  ],
  "6": [
    { _id: "s11", stepNumber: 1, title: "Preparing clay for diyas", image: "https://via.placeholder.com/300x200" },
    { _id: "s12", stepNumber: 2, title: "Shaping and decorating diyas", image: "https://via.placeholder.com/300x200" }
  ],
  "7": [
    { _id: "s13", stepNumber: 1, title: "Selecting wax and wicks", image: "https://via.placeholder.com/300x200" },
    { _id: "s14", stepNumber: 2, title: "Melting, coloring, and pouring candles", image: "https://via.placeholder.com/300x200" }
  ]
};

// Sample market opportunities data
const marketOpportunitiesData = {
  "1": [
    { _id: "m1", title: "Eco-friendly Packaging Business", description: "Supply paper bags to local stores and businesses" },
    { _id: "m2", title: "Custom Gift Bags", description: "Create custom designed paper bags for gifts and events" }
  ],
  "2": [
    { _id: "m3", title: "Reusable Shopping Bags", description: "Sell durable cloth bags as alternatives to plastic" },
    { _id: "m4", title: "Customized Tote Bags", description: "Design personalized tote bags for events and promotions" }
  ],
  "3": [
    { _id: "m5", title: "Homemade Sanitizer Production", description: "Produce and distribute hand sanitizers locally" },
    { _id: "m6", title: "Sanitizer Making Workshops", description: "Conduct workshops teaching others how to make sanitizers" }
  ],
  "4": [
    { _id: "m7", title: "Custom Face Mask Shop", description: "Create and sell fashionable protective masks" },
    { _id: "m8", title: "Mask Making Service", description: "Offer custom mask making services for events and groups" }
  ],
  "5": [
    { _id: "m9", title: "Sustainable Menstrual Products", description: "Produce eco-friendly sanitary products for local communities" },
    { _id: "m10", title: "Women's Health Workshops", description: "Conduct education and product making workshops" }
  ],
  "6": [
    { _id: "m11", title: "Festival Diya Supply", description: "Create and sell diyas during festival seasons" },
    { _id: "m12", title: "Decorative Diya Service", description: "Offer custom diya making services for events" }
  ],
  "7": [
    { _id: "m13", title: "Artisanal Candle Business", description: "Create and sell decorative and scented candles" },
    { _id: "m14", title: "Candle Making Workshops", description: "Host workshops teaching candle making skills" }
  ]
};

// Function to fetch all skills
export const fetchAllSkills = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return { status: 200, data: { data: skillsData } };
};

// Function to fetch a single skill by ID
export const fetchSkillById = async (skillId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Find the skill with the matching ID
  const skill = skillsData.find(s => s._id === skillId);
  
  // If no skill is found, simulate an error
  if (!skill) {
    throw new Error(`Skill with ID ${skillId} not found`);
  }
  
  return { status: 200, data: { data: skill } };
};

// Function to fetch videos for a skill
export const fetchSkillVideos = async (skillId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const videos = videosData[skillId] || [];
  return { status: 200, data: { data: videos } };
};

// Function to fetch steps for a skill
export const fetchSkillSteps = async (skillId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const steps = stepsData[skillId] || [];
  return { status: 200, data: { data: steps } };
};

// Function to fetch market opportunities for a skill
export const fetchSkillMarketOpportunities = async (skillId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 550));
  
  const opportunities = marketOpportunitiesData[skillId] || [];
  return { status: 200, data: { data: opportunities } };
};

// Function for user registration
export const registerUser = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate successful registration
  return { 
    status: 201, 
    data: { 
      message: "User registered successfully",
      user: { name: userData.name, email: userData.email, id: "user123" } 
    }
  };
};

// Function for user login
export const loginUser = async (credentials) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Simulate successful login
  if (credentials.email && credentials.password) {
    return {
      status: 200,
      data: {
        token: "sample-jwt-token",
        user: { name: "Sample User", email: credentials.email, id: "user123" }
      }
    };
  }
  
  throw new Error("Invalid credentials");
};

// Export additional functions that might be needed
export const fetchSkills = fetchAllSkills;