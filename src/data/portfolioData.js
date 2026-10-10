export const PERSONAL_INFO = {
  name: "Manoj Mansing Chougule",
  shortName: "Manoj Chougule",
  monogram: "M.",
  role: "Full Stack Developer",
  subRole: "MERN Stack Specialist",
  availability: "Open to opportunities",
  location: "Pune, Maharashtra, India",
  phone: "+91 7058274684",
  email: "manojchougule4778@gmail.com",
  resumeUrl: "/Manoj_Mansing_Chougule_Resume.pdf",
  profiles: {
    github: "https://github.com/manoj138",
    linkedin: "https://www.linkedin.com/in/manoj-chougule-software-developer"
  },
  heroIntro: "Computer Science Engineering graduate and MERN Stack Developer with 11 months of hands-on software development internship experience building scalable web applications with React.js, Node.js, Express.js, and MongoDB.",
  aboutSummary: "I'm Manoj Mansing Chougule, a MERN Stack Developer and Computer Science graduate based in Pune, Maharashtra. I specialize in building end-to-end full stack web applications with responsive UIs, secure JWT authentication, RESTful APIs, and database integrations.",
  aboutMindset: "My experience spans developing production e-commerce marketplaces, document verification portals, real-time messaging platforms, and financial management applications. I value clean component design, efficient API routing, robust database modeling, and seamless user experiences."
};

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", icon: "FileCode", level: "Advanced" },
      { name: "SQL", icon: "Database", level: "Intermediate" },
      { name: "HTML5", icon: "Code2", level: "Advanced" },
      { name: "CSS3", icon: "Palette", level: "Advanced" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js", icon: "Atom", level: "Advanced" },
      { name: "Redux Toolkit", icon: "Layers", level: "Advanced" },
      { name: "Tailwind CSS", icon: "Wind", level: "Advanced" },
      { name: "Responsive Web Design", icon: "Layout", level: "Advanced" }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", icon: "Cpu", level: "Advanced" },
      { name: "Express.js", icon: "Zap", level: "Advanced" },
      { name: "REST APIs", icon: "Network", level: "Advanced" },
      { name: "JWT Auth", icon: "Lock", level: "Advanced" },
      { name: "Nodemailer", icon: "Send", level: "Intermediate" }
    ]
  },
  {
    id: "database",
    title: "Databases & Platforms",
    icon: "Database",
    skills: [
      { name: "MongoDB", icon: "Database", level: "Advanced" },
      { name: "MySQL", icon: "Database", level: "Intermediate" },
      { name: "Git & GitHub", icon: "Github", level: "Advanced" },
      { name: "Postman", icon: "Send", level: "Advanced" },
      { name: "Vercel / Netlify", icon: "Flame", level: "Advanced" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "ecommerce-platform",
    number: "01",
    name: "E-Commerce Platform",
    tagline: "Multi-Role Marketplace & Shipping Calculator",
    description: "An end-to-end marketplace featuring User, Seller, and Admin panels with role-based access control, regional weight/pincode shipping calculators, and automated email notifications.",
    category: "Full Stack",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "Nodemailer"],
    previewType: "ecommerce",
    overview: "Developed a production-grade e-commerce application during Junior Software Developer internship at CloudRegex Infotech Pvt Ltd. Features complete marketplace workflows across multi-role panels.",
    problem: "Handling multi-tenant marketplace operations with custom location-based shipping and automated transaction emails requires precise state management and secure access controls.",
    features: [
      "Developed an end-to-end marketplace with User, Seller, and Admin panels",
      "Implemented role-based access control and JWT-based authentication and authorization",
      "Built product, inventory, order, coupon, and email notification workflows",
      "Implemented location-based shipping fee calculation using regional weight and pincode requirements"
    ],
    contribution: "Engineered multi-role authentication middleware, integrated Redux Toolkit slices for cart and seller products, and built location pincode shipping fee formulas.",
    liveUrl: "",
    sourceUrl: "https://github.com/manoj138",
    featured: true
  },
  {
    id: "royaleseva-portal",
    number: "02",
    name: "RoyalESeva Document Portal Hub",
    tagline: "Document Service & Verification System",
    description: "A digital service portal providing vendor registration, document uploads, administrative verification workflows, and wallet-based service transactions.",
    category: "Full Stack",
    tags: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    previewType: "royaleseva",
    overview: "Built as a production portal system during internship at CloudRegex Infotech Pvt Ltd. Enables streamlined document processing and verification between citizens, vendors, and administrators.",
    problem: "Manual government & document processing is prone to delays. RoyalESeva digitizes document verification with real-time status and wallet balance billing.",
    features: [
      "Developed a document service portal with vendor and administrative workflows for document submission and verification",
      "Implemented vendor registration, document uploads, admin verification, and wallet-based service workflows"
    ],
    contribution: "Developed document upload pipeline, created admin verification dashboard, and implemented wallet balance ledger workflows.",
    liveUrl: "",
    sourceUrl: "https://github.com/manoj138",
    featured: true
  },
  {
    id: "smart-wallet",
    number: "03",
    name: "SmartWallet Financial Tracker",
    tagline: "Income & Expense Analytics Portal",
    description: "A full stack web application designed to track income and expenses with interactive financial summaries, visual charts, and responsive UI.",
    category: "Full Stack",
    tags: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Recharts"],
    previewType: "income",
    overview: "SmartWallet enables personal finance management by recording transactions, calculating net savings, and visualizing financial activity through dynamic charts.",
    problem: "Tracking daily income and expenses without visual analytics leads to unclear financial health. SmartWallet provides immediate clarity.",
    features: [
      "Developed a web application to track income and expenses with interactive financial summaries",
      "Created a sleek responsive interface using Tailwind CSS and Recharts analytics",
      "RESTful API endpoints for secure CRUD transaction persistence"
    ],
    contribution: "Built full stack architecture including React frontend, Express REST API, MongoDB schemas, and Recharts financial reporting.",
    liveUrl: "",
    sourceUrl: "https://github.com/manoj138",
    featured: true
  },
  
  {
    id: "chatsphere",
    number: "01",
    name: "ChatSphere",
    tagline: "Real-time Messaging Platform",
    description:
      "A real-time messaging application with WebSocket communication, room management, typing indicators, and secure JWT authentication.",
    category: "Full Stack",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
      "Firebase"
    ],
    previewType: "chatsphere",
    overview:
      "ChatSphere provides real-time bidirectional communication between connected users with online status indicators, private conversations, and secure authentication.",
    problem:
      "Traditional messaging systems require frequent requests to fetch new messages. ChatSphere uses Socket.IO for event-driven, low-latency communication.",
    features: [
      "Real-time bidirectional messaging powered by Socket.IO",
      "Secure authentication using JWT, bcryptjs, and HttpOnly cookies",
      "Private conversations and dynamic chat room management",
      "Online status indicators and typing feedback",
      "Media sharing using Cloudinary",
      "Push notifications using Firebase Cloud Messaging",
      "Responsive interface with dark and light themes"
    ],
    contribution:
      "Developed the React frontend and Node.js/Express backend, implemented MongoDB data models, authentication, real-time messaging, media uploads, and notification integrations.",
    liveUrl: "",
    sourceUrl: "https://github.com/manoj138",
    featured: true
  },


  {
    id: "mess-management",
    number: "04",
    name: "Mess Management System",
    tagline: "Smart Mess & Tiffin Operations",
    description:
      "A mess management application for handling monthly mess subscriptions, daily tiffin services, attendance, billing, and payment installments.",
    category: "Full Stack",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Recharts"
    ],
    previewType: "mess-management",
    overview:
      "The system helps mess operators manage customer subscriptions, daily meal records, attendance, and billing from a centralized interface.",
    problem:
      "Manual mess records can lead to billing mistakes, attendance tracking difficulties, and confusion when managing monthly and daily customers.",
    features: [
      "Monthly mess subscription management",
      "Daily tiffin customer management",
      "Attendance and holiday (sutti) billing adjustments",
      "Installment and payment tracking",
      "Customer records and billing management",
      "Charts for visualizing operational data",
      "Centralized dashboard for mess operations"
    ],
    contribution:
      "Developed the mess management application to organize customer records, subscription workflows, attendance-based billing, installment tracking, and data visualization.",
    liveUrl: "https://mess-managements.vercel.app",
    sourceUrl:
      "https://github.com/manoj138/Mess_Management_System",
    featured: true
  },

  {
    id: "url-shortener",
    number: "05",
    name: "URL Shortener",
    tagline: "Short Links & Redirection System",
    description:
      "A web application that converts long URLs into compact links for convenient sharing and redirection.",
    category: "Full Stack",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nanoid",
      "Tailwind CSS"
    ],
    previewType: "url-shortener",
    overview:
      "The application generates unique short identifiers for long URLs and redirects visitors to their original destinations.",
    problem:
      "Long URLs are difficult to share, display, and manage across messages, websites, and digital content.",
    features: [
      "Short URL generation using Nanoid",
      "Unique short-code generation",
      "Redirection from short links to original URLs",
      "Backend API integration using Express.js",
      "MongoDB-based URL record persistence",
      "Responsive interface using Tailwind CSS"
    ],
    contribution:
      "Built the URL shortening workflow using React, Node.js, Express, and MongoDB, integrating short identifier generation and URL redirection.",
    liveUrl:
      "https://url-shortner-system-omega.vercel.app",
    sourceUrl: "https://github.com/manoj138/URL_Shortner",
    featured: false
  },


];


export const TIMELINE = [
  {
    id: "cloudregex",
    type: "Work Experience",
    role: "Junior Software Developer Intern",
    company: "CloudRegex Infotech Pvt. Ltd.",
    location: "Baramati, India",
    period: "Sep 2025 – Aug 2026",
    description: "Contributed to full stack web development projects building production document portals and e-commerce marketplace platforms under senior guidance.",
    highlights: [
      "Developed full-stack web application modules using React.js, Node.js, Express.js, and MongoDB.",
      "Built and integrated RESTful APIs for frontend-backend communication, CRUD operations, and application workflows.",
      "Developed reusable React components and responsive user interfaces using modern frontend practices.",
      "Implemented authentication and authorization features using JWT and worked with database-driven application modules."
    ],
    projects: [
      {
        title: "E-Commerce Platform",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "Nodemailer"],
        points: [
          "Developed an end-to-end marketplace with User, Seller, and Admin panels.",
          "Implemented role-based access control and JWT-based authentication and authorization.",
          "Built product, inventory, order, coupon, and email notification workflows.",
          "Implemented location-based shipping fee calculation using regional weight and pincode requirements."
        ]
      },
      {
        title: "RoyalESeva Document Portal Hub",
        tags: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
        points: [
          "Developed a document service portal with vendor and administrative workflows for document submission and verification.",
          "Implemented vendor registration, document uploads, admin verification, and wallet-based service workflows."
        ]
      }
    ]
  },
  {
    id: "igap",
    type: "Work Experience",
    role: "Web Development Intern",
    company: "iGAP Technologies Pvt. Ltd.",
    location: "Kolhapur, India",
    period: "Jul 2022 – Aug 2022",
    description: "Built responsive frontend interfaces and optimized web performance during hands-on internship.",
    highlights: [
      "Developed responsive web pages using HTML5, CSS3, and JavaScript.",
      "Worked on UI fixes, cross-browser compatibility, and frontend performance improvements."
    ]
  },
  {
    id: "btech",
    type: "Education",
    role: "B.Tech, Computer Science Engineering",
    company: "Dr. D. Y. Patil Agriculture and Technical University",
    period: "2023 – 2026",
    description: "Graduated with 7.53 CGPA (69.46%). Built strong expertise in computer science fundamentals, full stack web development, algorithms, and software engineering.",
    highlights: [
      "CGPA: 7.53 (69.46%)",
      "Specialized in MERN Stack & Full Stack Application Development"
    ]
  },
  {
    id: "diploma",
    type: "Education",
    role: "Diploma, Computer Science Engineering",
    company: "Dr. D. Y. Patil Technical Campus",
    period: "2019 – 2022",
    description: "Completed Diploma in Computer Science Engineering with 71.49% score.",
    highlights: [
      "Percentage: 71.49%",
      "Core foundation in programming, web development, and database concepts"
    ]
  }
];

export const LANGUAGES = ["English", "Marathi", "Hindi"];

export const HIGHLIGHTS = [
  {
    title: "11 Months Experience",
    subtitle: "Hands-on Software Development",
    desc: "Proven track record building full-stack MERN web apps across e-commerce, document portals, and analytics."
  },
  {
    title: "Full Stack Mastery",
    subtitle: "React • Node • Express • MongoDB",
    desc: "Proficient in REST APIs, JWT RBAC security, database schemas, and modern responsive UIs."
  },
  {
    title: "Product Execution",
    subtitle: "User & Admin Workflows",
    desc: "Built complete multi-panel systems with shipping fee engines, wallet ledgers, and automated Nodemailer updates."
  }
];
