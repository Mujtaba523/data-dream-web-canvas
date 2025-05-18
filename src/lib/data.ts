
// This file contains all the data used throughout the portfolio website
// Organized by sections for easy editing and maintenance

// PLACEHOLDER URLs - Replace these with your actual URLs
// ======================================================
export const PLACEHOLDERS = {
  // Social media profiles
  GITHUB_URL: "https://github.com/yourusername",
  LINKEDIN_URL: "https://linkedin.com/in/yourusername",
  KAGGLE_URL: "https://kaggle.com/yourusername",
  EMAIL: "your.email@example.com",
  
  // Resume download link
  RESUME_URL: "/path-to-your-resume.pdf",
  
  // Images
  PROFILE_IMAGE: "/path-to-profile-image.jpg",
  PROJECT_IMAGES: {
    PROJECT1: "/path-to-project1-image.jpg",
    PROJECT2: "/path-to-project2-image.jpg",
    // Add more project images as needed
  },
};

// ======================================================
// Timeline items - Experience and Education history
// ======================================================
export const timelineItems = [
  {
    id: "exp1",
    type: "experience",
    period: "2023 - Present",
    title: "Data Scientist",
    organization: "Tech Company Inc.",
    description: "Leading machine learning projects and developing predictive models for business forecasting. Implemented NLP solutions that improved customer service efficiency by 35%.",
  },
  {
    id: "exp2",
    type: "experience",
    period: "2021 - 2023",
    title: "Machine Learning Engineer",
    organization: "AI Solutions Ltd.",
    description: "Developed and deployed machine learning models for image classification and object detection. Optimized existing algorithms for better performance and reduced computational costs.",
  },
  {
    id: "edu1",
    type: "education",
    period: "2020 - 2024",
    title: "Bachelor's in Computer Information & Systems Engineering",
    organization: "NED University",
    description: "Graduated with distinction, specializing in artificial intelligence and machine learning. Completed thesis on deep learning applications in healthcare.",
  },
  {
    id: "edu2",
    type: "education",
    period: "2018 - 2020",
    title: "Associate Degree in Computer Science",
    organization: "City College",
    description: "Foundation courses in programming, data structures, algorithms, and mathematics. Participated in coding competitions and hackathons.",
  },
];

// ======================================================
// Certifications
// ======================================================
export const certifications = [
  {
    id: "cert1",
    title: "Machine Learning Specialization",
    organization: "Coursera - Stanford University",
    date: "2023",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual certificate URL
  },
  {
    id: "cert2",
    title: "Deep Learning Professional Certificate",
    organization: "Coursera - DeepLearning.AI",
    date: "2022",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual certificate URL
  },
  {
    id: "cert3",
    title: "TensorFlow Developer Certificate",
    organization: "Google",
    date: "2022",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual certificate URL
  },
  {
    id: "cert4",
    title: "Data Science Professional Certificate",
    organization: "IBM",
    date: "2021",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual certificate URL
  },
  {
    id: "cert5",
    title: "Python for Data Science",
    organization: "DataCamp",
    date: "2021",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual certificate URL
  },
  {
    id: "cert6",
    title: "SQL for Data Analysis",
    organization: "Udacity",
    date: "2020",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual certificate URL
  },
];

// ======================================================
// Testimonials - Client feedback
// ======================================================
export const testimonials = [
  {
    id: "testimonial1",
    quote: "Mujtaba delivered exceptional machine learning solutions that transformed our business analytics capabilities. His technical expertise and attention to detail were outstanding.",
    name: "Sarah Johnson",
    title: "CTO, Tech Innovations Inc."
  },
  {
    id: "testimonial2",
    quote: "Working with Mujtaba was a game-changer for our data strategy. His insights and expertise in AI helped us implement solutions that significantly improved our decision-making process.",
    name: "Michael Chen",
    title: "VP of Data, Global Solutions"
  },
  {
    id: "testimonial3",
    quote: "Mujtaba's work on our predictive analytics platform was impressive. His ability to translate complex technical concepts into business value is rare and valuable.",
    name: "Priya Sharma",
    title: "Director of Analytics, FutureTech"
  }
];

// ======================================================
// Skills - Technical capabilities
// ======================================================
export const skills = [
  // Programming Languages
  { name: "Python", percentage: 95, category: "programming" },
  { name: "R", percentage: 85, category: "programming" },
  { name: "JavaScript", percentage: 80, category: "programming" },
  { name: "SQL", percentage: 90, category: "programming" },
  { name: "Java", percentage: 75, category: "programming" },
  { name: "C++", percentage: 70, category: "programming" },
  
  // ML/AI & Data
  { name: "TensorFlow/PyTorch", percentage: 90, category: "mlai" },
  { name: "Scikit-Learn", percentage: 95, category: "mlai" },
  { name: "NLP", percentage: 85, category: "mlai" },
  { name: "Computer Vision", percentage: 80, category: "mlai" },
  { name: "Data Visualization", percentage: 90, category: "mlai" },
  { name: "Big Data (Spark, Hadoop)", percentage: 75, category: "mlai" },
  
  // Tools & Platforms
  { name: "AWS/GCP/Azure", percentage: 85, category: "tools" },
  { name: "Docker/Kubernetes", percentage: 80, category: "tools" },
  { name: "Git/GitHub", percentage: 90, category: "tools" },
  { name: "Jupyter/Colab", percentage: 95, category: "tools" },
  { name: "Tableau/PowerBI", percentage: 85, category: "tools" },
  { name: "MLOps", percentage: 75, category: "tools" }
];

// ======================================================
// Projects - Portfolio of work
// ======================================================
export const projects = [
  {
    id: "project1",
    title: "AI-Powered Image Recognition System",
    description: "Developed a deep learning model for real-time object detection and classification with 98% accuracy. Implemented using TensorFlow and deployed on AWS SageMaker for scalability and performance.",
    tags: ["Machine Learning", "Computer Vision", "AWS"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT1,
    githubUrl: PLACEHOLDERS.GITHUB_URL,
    demoUrl: "#" // Placeholder for demo URL
  },
  {
    id: "project2",
    title: "Natural Language Processing for Customer Support",
    description: "Created an NLP system to analyze customer support tickets, automatically categorize issues, and suggest solutions. Reduced response time by 45% and improved customer satisfaction scores.",
    tags: ["NLP", "Python", "Machine Learning"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT2,
    githubUrl: PLACEHOLDERS.GITHUB_URL,
    demoUrl: "#" // Placeholder for demo URL
  },
  {
    id: "project3",
    title: "Predictive Analytics Dashboard for Retail",
    description: "Built an end-to-end analytics solution for predicting inventory needs and sales trends. Integrated multiple data sources and created interactive visualizations for business stakeholders.",
    tags: ["Data Analytics", "Visualization", "React"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT1, // Reusing image as placeholder
    githubUrl: PLACEHOLDERS.GITHUB_URL,
    demoUrl: "#" // Placeholder for demo URL
  },
  {
    id: "project4",
    title: "Recommendation Engine for E-commerce",
    description: "Designed and implemented a collaborative filtering recommendation system that increased average order value by 23%. Optimized for performance to handle millions of user interactions.",
    tags: ["Recommendation Systems", "Python", "Big Data"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT2, // Reusing image as placeholder
    githubUrl: PLACEHOLDERS.GITHUB_URL,
    demoUrl: "#" // Placeholder for demo URL
  }
];

// ======================================================
// Publications - Research papers and articles
// ======================================================
export const publications = [
  {
    id: "pub1",
    title: "Novel Approaches to Deep Learning in Healthcare Diagnostics",
    publisher: "Journal of AI in Medicine",
    date: "2023",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual publication URL
  },
  {
    id: "pub2",
    title: "Efficient Natural Language Processing for Low-Resource Languages",
    publisher: "International Conference on Computational Linguistics",
    date: "2022",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual publication URL
  },
  {
    id: "pub3",
    title: "Explainable AI: Making Machine Learning Models Transparent",
    publisher: "AI Ethics Journal",
    date: "2022",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual publication URL
  },
  {
    id: "pub4",
    title: "Real-time Object Detection for Autonomous Vehicles",
    publisher: "Conference on Computer Vision and Pattern Recognition",
    date: "2021",
    url: PLACEHOLDERS.GITHUB_URL, // Replace with actual publication URL
  }
];

// ======================================================
// Hero section typing animation text
// ======================================================
export const typingTexts = [
  "Machine Learning Engineer",
  "Data Scientist",
  "AI Researcher",
  "Problem Solver",
  "Deep Learning Specialist"
];

// ======================================================
// Add more data sections as needed for other components
// ======================================================
