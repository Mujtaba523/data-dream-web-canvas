// This file contains all the data used throughout the portfolio website
// Organized by sections for easy editing and maintenance

// PLACEHOLDER URLs - Replace these with your actual URLs
// ======================================================
const PLACEHOLDERS = {
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
// Client Testimonials
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
// Add more data sections as needed for other components
// ======================================================
