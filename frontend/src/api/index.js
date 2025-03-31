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

// Sample dealers data
const dealersData = {
  "1": [
    { 
      _id: "d1", 
      name: "Lemonx", 
      address: "Shop No. 5, Gala No. 3, Kasheli Village, Near Bhiwandi, Thane - 421302",
      contact: "098031 49803 / 022-2546 7891",
      email: "sales@lemonx.in",
      description: "Specializes in premium printed and custom paper bags for retail brands. Offers water-resistant coatings and reinforced handles."
    },
    { 
      _id: "d2", 
      name: "Zenith Paper Bags Manufacturing Co.", 
      address: "12/A, MIDC Area, Dombivli East, Thane - 421203",
      contact: "099678 34562",
      email: "zenithpaperbags@gmail.com",
      description: "Bulk manufacturer supplying to bakeries, pharmacies, and retail chains across Maharashtra."
    },
    { 
      _id: "d3", 
      name: "GreenPack Paper Bags", 
      address: "305, Shreeji Tower, Ghodbunder Road, Thane West - 400615",
      contact: "091673 54821",
      email: "info@greenpackthane.com",
      description: "Eco-friendly packaging solutions provider with FDA-approved food-grade paper bags."
    },
    { 
      _id: "d4", 
      name: "Thane Paper Products", 
      address: "45, Pokhran Road No. 1, Near Teen Petrol Pump, Thane West - 400606",
      contact: "093245 67890",
      description: "Family-run business offering affordable paper carry bags since 1998."
    },
    { 
      _id: "d5", 
      name: "EcoPack Solutions", 
      address: "Unit No. 7, Wagle Industrial Estate, Thane East - 400604",
      contact: "098765 43210 / 022-2567 8910",
      email: "ecopack.thane@yahoo.com",
      description: "Premium designer paper bags with options for cotton/fabric handles."
    },
    { 
      _id: "d6", 
      name: "TMC Paper Bag Promotion Cell", 
      address: "3rd Floor, TMC Headquarters, Near Thane Station, Thane West",
      contact: "022-2533 4455 (Ext. 207)",
      category: "Municipal Initiative",
      description: "Provides subsidies and training for paper bag manufacturing units."
    },
    { 
      _id: "d7", 
      name: "Stree Shakti Paper Bag Unit", 
      address: "Community Center, Vartak Nagar, Thane West - 400606",
      contact: "097655 44332 (Ms. Sunanda Patil)",
      category: "Municipal Initiative",
      description: "Women's cooperative manufacturing affordable paper bags for local markets."
    }
  ],
  "7": [
    { 
      _id: "d8", 
      name: "Pragna Polymers LLP", 
      address: "A-2/Shop No.15, Prestige Garden, Almeda Road, Uthalsar, Thane - 400601, Maharashtra, India",
      contact: "+91-22-2542-1234",
      website: "https://www.pragnapolymers.com/",
      description: "Specializes in the manufacturing of scented and decorative candles, offering a wide range of products suitable for various occasions."
    },
    { 
      _id: "d9", 
      name: "Rajesh Candles", 
      address: "RD No. 27, Wagle Industrial Estate, Thane West, Maharashtra, India",
      contact: "+91-22-2583-5678",
      website: "https://www.exportersindia.com/rajeshcandles/",
      description: "A retailer and supplier of a variety of wax candles, including traditional and contemporary designs for both domestic and commercial use."
    },
    { 
      _id: "d10", 
      name: "Global Exports Private Limited", 
      address: "Plot No. 45, Sector 2, Airoli, Thane, Maharashtra, India",
      contact: "+91-22-2779-3456",
      website: "https://www.exportersindia.com/thane/candles.htm",
      description: "Engaged in exporting and supplying a diverse range of candle products, catering to both domestic and international markets."
    },
    { 
      _id: "d11", 
      name: "Mahakal A.P Creation", 
      address: "G-8, Ground Floor, C Wing, Mahadev Apartment Plaza Coop Hsg Soc Ltd, Saibaba Nagar, Navghar Road, Thane, Maharashtra, India",
      contact: "+91-22-2597-8910",
      website: "https://www.dial4trade.com/thane/candle.htm",
      description: "A wholesale supplier offering a variety of candles, including decorative and utility candles, suitable for various occasions and purposes."
    },
    { 
      _id: "d12", 
      name: "Thane Small Scale Industries Association (TSSIA)", 
      address: "Plot No. P-26, Road No. 16-T, Wagle Industrial Estate, Thane - 400604, Maharashtra, India",
      contact: "+91-22-2582-0405",
      website: "https://tssia.org/",
      category: "Government Initiative",
      description: "An organization dedicated to supporting small-scale industries by facilitating interactions with government officials and addressing challenges related to various regulatory bodies."
    },
    { 
      _id: "d13", 
      name: "Ministry of Micro, Small & Medium Enterprises (MSME)", 
      address: "Udyog Bhawan, Rafi Marg, New Delhi - 110011, India",
      contact: "+91-11-2306-2266",
      website: "https://msme.gov.in/all-schemes-msme",
      category: "Government Initiative",
      description: "Provides various schemes and support mechanisms for the growth and development of micro, small, and medium enterprises across India."
    },
    { 
      _id: "d14", 
      name: "Development Commissioner (Handicrafts), Ministry of Textiles", 
      address: "West Block No. 7, R.K. Puram, New Delhi - 110066, India",
      contact: "+91-11-2610-0589",
      website: "https://handicrafts.nic.in/",
      category: "Government Initiative",
      description: "The nodal agency for craft and artisan-based activities, offering technical and financial support for the development and marketing of handicrafts."
    }
  ],
  "4": [
    { 
      _id: "d15", 
      name: "Thane Small Scale Industries Association (TSSIA)", 
      address: "TSSIA House, Plot No. P-26, Road No. 16/T, Off Appasaheb Khambete Marg (Road No 16), Wagle Industrial Estate, Thane (W)- 400604",
      contact: "+91 77188 79764 / +91 77188 79254 / +91 22 2582 0429",
      email: "secretary@tssia.org",
      website: "https://tssia.org/",
      description: "TSSIA supports small-scale industries and entrepreneurs in Thane. They may provide networking opportunities and guidance on marketing homemade products like masks."
    },
    { 
      _id: "d16", 
      name: "District Industries Centre (DIC), Thane", 
      address: "M.I.D.C. Commercial Complex, 2nd Floor, Near Modela Woollen Mill, Wagle Industrial Estate, Thane-400604",
      contact: "(022) 25828504",
      email: "didic.thane@maharashtra.gov.in",
      website: "https://thane.nic.in/district-industries-centre/",
      description: "The DIC provides information on various government schemes for entrepreneurs, including those interested in mask manufacturing. They can guide you on subsidies, training programs, and potential market linkages."
    },
    { 
      _id: "d17", 
      name: "Jidnyasa Trust Thane", 
      address: "2 Jayanand Society, M. G. Road, Naupada, Thane-400602",
      contact: "022-25403857 / 9820137576",
      email: "jidnyasatrust@gmail.com",
      website: "http://jidnyasatrust.org.in",
      description: "Jidnyasa Trust focuses on education and literacy, environment and forests, and vocational training. They may have initiatives supporting homemade mask production."
    }
  ]
  // Other skills will have their dealers data added here as needed
};

// Sample flashcards data
const flashcardsData = {
  "1": {
    title: "Paper Bag Making Process",
    // Using direct image URL that will work reliably
    image: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFficCnj4G4XnAXaY/root/content",
    // Fallback image if the above doesn't work
    fallbackImage: "https://via.placeholder.com/800x450?text=Paper+Bag+Making",
    steps: [
      {
        _id: "f1",
        stepNumber: 1,
        title: "Gather Materials",
        description: "You'll need recycled paper or kraft paper, scissors, ruler, pencil, and glue or double-sided tape."
      },
      {
        _id: "f2",
        stepNumber: 2,
        title: "Measure and Cut Paper",
        description: "Cut the paper to the desired size depending on the bag dimensions you want. A standard size is 30cm x 25cm."
      },
      {
        _id: "f3",
        stepNumber: 3,
        title: "Fold and Create Creases",
        description: "Fold the paper as shown in the image, creating sharp creases at each fold. Make sure to align edges precisely."
      },
      {
        _id: "f4",
        stepNumber: 4,
        title: "Form the Bag Body",
        description: "Fold the sides inward and create the bottom by folding up and securing with glue. Press firmly to ensure the glue bonds well."
      },
      {
        _id: "f5",
        stepNumber: 5,
        title: "Add Handles",
        description: "Attach paper or cord handles by gluing them to the inside of the bag's top edges. Make sure they're securely attached."
      },
      {
        _id: "f6",
        stepNumber: 6,
        title: "Reinforce and Decorate",
        description: "Strengthen the bottom and handles if needed, then decorate your bag as desired. Use stamps, paint, or markers for personalization."
      }
    ]
  },
  "3": {
    title: "Sanitizer Making Process",
    // Using the provided OneDrive image URL
    image: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFfzkTr6w03xG7dhU/root/content",
    // Fallback image if the above doesn't work
    fallbackImage: "https://via.placeholder.com/800x450?text=Sanitizer+Making",
    steps: [
      {
        _id: "f21",
        stepNumber: 1,
        title: "Gather Materials and Ingredients",
        description: "You'll need isopropyl alcohol (91-99%), aloe vera gel, essential oils (optional), glycerin (optional), a clean bowl, measuring cups, a funnel, and containers for storage."
      },
      {
        _id: "f22",
        stepNumber: 2,
        title: "Prepare Your Workspace",
        description: "Clean your work area thoroughly. Ensure you have good ventilation and are away from any open flames as alcohol is flammable."
      },
      {
        _id: "f23",
        stepNumber: 3,
        title: "Mix the Ingredients",
        description: "Combine 2 parts alcohol with 1 part aloe vera gel in a clean bowl. This creates a sanitizer with approximately 60-70% alcohol content, which is effective against most germs."
      },
      {
        _id: "f24",
        stepNumber: 4,
        title: "Add Optional Ingredients",
        description: "If desired, add a few drops of essential oil for fragrance (like lavender or tea tree oil) and a few drops of glycerin to prevent skin dryness."
      },
      {
        _id: "f25",
        stepNumber: 5,
        title: "Mix Thoroughly",
        description: "Stir the mixture well to ensure all ingredients are fully incorporated. Make sure there are no clumps of aloe vera gel."
      },
      {
        _id: "f26",
        stepNumber: 6,
        title: "Transfer to Containers",
        description: "Using a funnel, carefully pour the sanitizer into clean spray bottles or pump containers. Label them with the contents and date of preparation."
      }
    ]
  },
  "7": {
    title: "Candle Making Process",
    // Using the provided OneDrive image URL
    image: "https://api.onedrive.com/v1.0/shares/s!AiVGDzhpT6RFgQDnnh5kq_RDr0VJ/root/content",
    // Fallback image if the above doesn't work
    fallbackImage: "https://via.placeholder.com/800x450?text=Candle+Making",
    steps: [
      {
        _id: "f31",
        stepNumber: 1,
        title: "Gather Materials and Equipment",
        description: "Collect wax (paraffin, soy, or beeswax), wicks, fragrance oils, colorants, a double boiler or melting pot, thermometer, containers, and a heat source."
      },
      {
        _id: "f32",
        stepNumber: 2,
        title: "Prepare Containers and Wicks",
        description: "Clean and dry your containers. Attach wicks to the bottom of containers using a small amount of melted wax or wick stickers. Use chopsticks or pencils to center and hold the wicks."
      },
      {
        _id: "f33",
        stepNumber: 3,
        title: "Melt the Wax",
        description: "Using a double boiler, slowly melt the wax to the recommended temperature (usually around 180°F/82°C). Stir occasionally to ensure even melting."
      },
      {
        _id: "f34",
        stepNumber: 4,
        title: "Add Fragrance and Color",
        description: "Once the wax reaches the appropriate temperature, remove from heat and add fragrance oils (typically 6-10% of wax weight) and desired candle dye. Stir gently for 1-2 minutes."
      },
      {
        _id: "f35",
        stepNumber: 5,
        title: "Pour into Containers",
        description: "Cool the wax slightly to the recommended pouring temperature (usually 135-145°F/57-63°C). Carefully pour into prepared containers, leaving some space at the top."
      },
      {
        _id: "f36",
        stepNumber: 6,
        title: "Allow to Cool and Cure",
        description: "Let candles cool undisturbed for several hours at room temperature. Trim wicks to 1/4 inch before lighting. For best results, allow candles to cure for 24-48 hours before use."
      }
    ]
  }
  // Other skills can have their flashcards added here
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

// Function to fetch dealers for a skill
export const fetchSkillDealers = async (skillId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const dealers = dealersData[skillId] || [];
  return { status: 200, data: { data: dealers } };
};

// Function to fetch flashcards for a skill
export const fetchSkillFlashcards = async (skillId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 550));
  
  const flashcard = flashcardsData[skillId];
  return { status: 200, data: { data: flashcard || null } };
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