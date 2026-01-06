
// This file contains all the data used throughout the portfolio website
// Organized by sections for easy editing and maintenance

// PLACEHOLDER URLs - Replace these with your actual URLs
// ======================================================
export const PLACEHOLDERS = {
  // Social media profiles
  GITHUB_URL: "https://github.com/Mujtaba523",
  LINKEDIN_URL: "www.linkedin.com/in/mujtaba-mateen",
  KAGGLE_URL: "https://www.kaggle.com/mujtabamatin",
  EMAIL: "mujtaba.mateen12@gmail.com",
  
  // Resume download link
  RESUME_URL: "https://drive.google.com/file/d/1dZ8HUQ77kDJDj0ojmWHHy_J24ZVRQScY/view?usp=sharing",
  
  // Images
  PROFILE_IMAGE: "/path-to-profile-image.jpg",
  PROJECT_IMAGES: {
    PROJECT1: "https://i.postimg.cc/CxQL3pkg/FYP.png",
    PROJECT2: "https://i.postimg.cc/yxbbVjPk/rai1.png",
    PROJECT3: "https://i.postimg.cc/K8yd4qbM/Untitled1.png",
    PROJECT4: "https://i.postimg.cc/TPtS7TDV/screencapture-localhost-8501-2023-09-25-22-11-18.png",
    PROJECT5: "https://i.postimg.cc/662ScJ5Z/1711797510330.jpg",
    PROJECT6: "https://i.postimg.cc/nhZPnXKK/Untitled-3.png",
    PROJECT7: "https://i.postimg.cc/fRKgyM5G/Space-Analytics-Dashboard.png",
    PROJECT8: "https://i.postimg.cc/d17W5rvF/Untitled.png",
    PROJECT9: "https://i.imghippo.com/files/jpg9990SEM.jpg",
    PROJECT10: "https://ibb.co/fVD1SNbk",
    PROJECT11: "https://i.postimg.cc/J08ZXpng/Screenshot-2026-01-06-at-2-57-10-PM.png"
  },
    

  CERTIFICATE_URL: {
    CERT1: "https://www.cloudskillsboost.google/public_profiles/23f84474-7463-4fee-8fc5-72d413cbde9d/badges/4667273?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    CERT2: "https://www.coursera.org/account/accomplishments/certificate/K5QV5ARC9EQV",
    CERT3: "https://digiskills.pk/verify/",
    CERT4: "https://www.coursera.org/account/accomplishments/professional-cert/R46UBS7S8FWG",
    CERT5: "https://coursera.org/verify/EKZBDDLQ7RF9",
    CERT6: "https://www.udemy.com/certificate/UC-b901cf6a-e154-4b42-af8f-54376baf1179/",
    CERT7: "https://coursera.org/verify/K6T5S9CLN8UA",
    CERT8: "coursera.org/verify/specialization/VZ5GF938EHSS",
  },
};

// ======================================================
// Timeline items - Experience and Education history
// ======================================================
export const timelineItems = [
  {
    id: "exp1",
    type: "experience",
    period: "Sep 2025 – Current",
    title: "Junior AI Engineer",
    organization: "PakData Management System (PDMS)",
    description: "Designed and developed RabitWeb AI, an AI-powered website builder using LangGraph for agent orchestration, automated planning, and dynamic code generation. Built end-to-end computer vision pipelines for plant species and disease detection, covering data preprocessing, model training, evaluation, and deployment. Developed an advanced fracture analysis system leveraging deep learning to localize fractures, classify fracture type, assess severity, and identify the affected body part, supporting clinical decision assistance.",
  },
  {
    id: "exp2",
    type: "experience",
    period: "Aug 2024 – June 2025",
    title: "GTP Officer - IT Enterprise Architecture & SQA",
    organization: "1LINK (Pvt) Ltd",
    description: "Coordinated functional and UAT testing for Bill Payment System and IBFT according to 1LINK standards. Automated test scripts, improved test environments, and cut project timelines from 1 week to 2 days.",
  },
  {
    id: "exp3",
    type: "experience",
    period: "Sep 2023 – Oct 2023",
    title: "Machine Learning Intern",
    organization: "Coding Samurai",
    description: "Implemented LSTM, decision trees, logistic regression, and Naïve Bayes models for sentiment and species prediction tasks. Achieved 96% accuracy in sentiment analysis and 95% in flower classification.",
  },
  {
    id: "exp4",
    type: "experience",
    period: "Jun 2022 – Oct 2023",
    title: "Level 2 Seller – Data Science",
    organization: "Fiverr (Freelance)",
    description: "Delivered data cleaning and analysis services using Python, Excel, and SQL. Created analytical reports using MS Power BI to visualize insights. Built desktop GUIs with PyQt5/Tkinter and developed machine learning and deep learning models for client-specific needs.",
  },
  {
    id: "edu1",
    type: "education",
    period: "2020 – 2024",
    title: "Bachelor's in Computer Information & Systems Engineering",
    organization: "NED University of Engineering & Technology",
    description: "CGPA: 3.90",
  },
  {
    id: "edu2",
    type: "education",
    period: "2018 – 2020",
    title: "Intermediate (Pre-Engineering)",
    organization: "Adamjee Government Science College",
    description: "Grade: 85%",
  },
  {
    id: "edu3",
    type: "education",
    period: "Until 2018",
    title: "Matriculation (Science)",
    organization: "Shaheen Public School",
    description: "Grade: 88%",
  }
];

// ======================================================
// Certifications
// ======================================================
export const certifications = [
  {
    id: "cert1",
    title: "Introduction to Generative AI",
    organization: "Google",
    date: "Aug 2023",
    url: PLACEHOLDERS.CERTIFICATE_URL.CERT1, // Credential ID: 4667273
  },
  {
    id: "cert2",
    title: "Convolutional Neural Networks in TensorFlow",
    organization: "DeepLearning.AI",
    date: "Oct 2022",
    url: PLACEHOLDERS.CERTIFICATE_URL.CERT2 // Credential ID: K5QV5ARC9EQV
  },
  {
    id: "cert3",
    title: "Data Analytics and Business Intelligence",
    organization: "DigiSkills.pk",
    date: "Oct 2022",
    url: PLACEHOLDERS.CERTIFICATE_URL.CERT3 // Credential ID: 3MD3USXMK
  },
  {
    id: "cert4",
    title: "IBM Data Science Professional Certificate",
    organization: "IBM",
    date: "Oct 2022",
    url: PLACEHOLDERS.CERTIFICATE_URL.CERT4
  },
  {
    id: "cert5",
    title: "Introduction to TensorFlow for AI, ML & DL",
    organization: "DeepLearning.AI",
    date: "Sep 2022",
    url: PLACEHOLDERS.CERTIFICATE_URL.CERT5 // Credential ID: EKZBDDLQ7RF9
  },
  {
    id: "cert6",
    title: "Neural Networks in Python: Deep Learning for Beginners",
    organization: "Udemy",
    date: "Aug 2022",
    url: PLACEHOLDERS.CERTIFICATE_URL.CERT6 // Credential ID: UC-b901cf6a-e154-4b42-af8f-54376baf1179
  },
  {
    id: "cert7",
    title: "Cloud Computing Basics (Cloud 101)",
    organization: "LearnQuest",
    date: "Apr 2022",
    url: PLACEHOLDERS.CERTIFICATE_URL.CERT7
  },
  {
    id: "cert8",
    title: "Python for Everybody (Specialization)",
    organization: "University of Michigan",
    date: "Jun 2021",
    url: PLACEHOLDERS.CERTIFICATE_URL.CERT8 // Credential ID: VZ5GF938EHSS
  }
];

// ======================================================
// Testimonials - Client feedback
// ======================================================
export const testimonials = [
  {
    id: "testimonial1",
    quote: "Excellent job! Working with Mujtaba was a real pleasure. He is a great communicator, extremely knowledgeable, very responsible, hardworking, and responds promptly. I would definitely recommend working with Mujtaba.",
    name: "Teg Keene",
    title: "Project: Excel Data Extraction & Cleaning"
  },
  {
    id: "testimonial2",
    quote: "I reviewed Mujtaba's work and was genuinely impressed. Everything was well-organized and functioned exactly as expected. Thank you! I'll definitely reach out to Mujtaba again for future projects.",
    name: "Safanah Abbas",
    title: "Project: Build Predictive Models"
  },
  {
    id: "testimonial3",
    quote: "Working with Mujtaba was a fantastic experience. He delivered high-quality work ahead of schedule and communicated clearly throughout the project. I highly recommend him for any data science or Python-related tasks.",
    name: "Bulugahapitiye Mohottalalage KN Bulugahapitiya",
    title: "Project: Data Visualization Report and Python Script Development"
  }
];

// ======================================================
// Skills - Technical capabilities
// ======================================================
export const skills = [
  // Programming Languages
  { name: "Python", percentage: 80, category: "programming" },
  { name: "R", percentage: 40, category: "programming" },
  { name: "SQL", percentage: 85, category: "programming" },
  
// ML/AI & Data
{ name: "TensorFlow / PyTorch", percentage: 85, category: "mlai" },
{ name: "Scikit-Learn", percentage: 85, category: "mlai" },
{ name: "NumPy", percentage: 80, category: "mlai" },
{ name: "Pandas", percentage: 95, category: "mlai" },
{ name: "Seaborn", percentage: 95, category: "mlai" },
{ name: "Plotly", percentage: 80, category: "mlai" },

// Deep Learning & CV
{ name: "OpenCV", percentage: 85, category: "mlai" },
{ name: "YOLO (v5–v11)", percentage: 80, category: "mlai" },
{ name: "FastAPI", percentage: 80, category: "mlai" },

// NLP & GenAI
{ name: "NLTK / SpaCy", percentage: 80, category: "mlai" },
{ name: "Transformers (BERT, GPT)", percentage: 75, category: "mlai" },
{ name: "LangChain", percentage: 70, category: "mlai" },
{ name: "LangGraph", percentage: 70, category: "mlai" },
{ name: "Prompt Engineering", percentage: 80, category: "mlai" },

// Data & MLOps
{ name: "Ollama", percentage: 85, category: "mlai" },
{ name: "Hugging Face", percentage: 65, category: "mlai" },
{ name: "Streamlit / Dash", percentage: 80, category: "mlai" },
  
  // Tools & Platforms
  { name: "VS Code", percentage: 80, category: "tools" },
  { name: "Git/GitHub", percentage: 65, category: "tools" },
  { name: "Jupyter/Colab", percentage: 95, category: "tools" },
  { name: "Tableau/MS PowerBI", percentage: 85, category: "tools" },
  { name: "MS Excel", percentage: 80, category: "tools" },
  { name: "MySQL Server", percentage: 85, category: "tools" },
  { name: "Oracle SQL Server", percentage: 80, category: "tools" },
  { name: "Make.com", percentage: 65, category: "tools" },
  { name: "n8n", percentage: 75, category: "tools" }
];

// ======================================================
// Projects - Portfolio of work
// ======================================================
export const projects = [
  {
    id: "project1",
    title: "Deep Learning Based Voice Cloning for Urdu Language (Final Year Project)",
    description: "Fine-tuned an X-TTS voice cloning model on 10+ hours of recorded speech data. Achieved a Mean Opinion Score (MOS) of 3.14, indicating realistic and intelligible voice output. Focused on high-quality speech synthesis for personalized voice replication.",
    tags: ["Machine Learning", "Audio Processing", "Deep Learning", "Pytorch"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT1,
    githubUrl: "https://github.com/Mujtaba523/Urdu-Voice-Cloning",
    demoUrl: "#" // Placeholder for demo URL
  },
  {
    id: "project2",
    title: "Weekly AI News Digest Using Make.com",
    description: "Built an automated workflow in Make.com to generate and deliver a weekly AI news digest. Integrated Google Gemini for summarization and automated content delivery via slack. Designed for seamless, hands-free news aggregation and distribution.",
    tags: ["Automation", "AI", "Make.com", "Integration"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT9, // Updated placeholder to match project ID
    githubUrl: "https://github.com/Mujtaba523/Weekly-AI-news-digest", // Replace if needed
    demoUrl: "#" // Placeholder for demo URL
  },
  {
    id: "project3",
    title: "Deep Learning Based Interviewing Expert System with Knowledge Base",
    description: "NLP-driven expert system that dynamically asks and scores technical interview answers using keyword similarity and trained models. Achieved 85% scoring accuracy.",
    tags: ["NLP", "LLM", "Deep Learning", "TensorFlow"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT2,
    githubUrl: "https://github.com/MuneebUllahKhan222/Recruitment.ai",
    demoUrl: "#" // Placeholder for demo URL
  },
  {
    id: "project4",
    title: "Alzheimer's Detection via MRI Scans",
    description: "Developed a CNN model using TensorFlow and Keras to classify Alzheimer's from MRI images. Deployed as an interactive web application using Streamlit.",
    tags: ["CNN", "Deep Learning", "TensorFlow", "Streamlit"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT3,
    githubUrl: "https://github.com/Mujtaba523/Alzheimer-sDiseaseClassifier",
    demoUrl: "#"
  },
  {
    id: "project5",
    title: "Reddit Sentiment Analysis",
    description: "Trained LSTM and traditional ML models to classify sentiment on Reddit posts with up to 96% accuracy using deep learning and NLP techniques.",
    tags: ["NLP", "LSTM", "Sentiment Analysis", "Deep Learning"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT4,
    githubUrl: "https://github.com/Mujtaba523/CODING-SAMURAI-INTERNSHIP-TASKS/tree/main/Task%203%20Sentiment%20Analysis%20on%20Social%20Media%20Posts",
    demoUrl: "#"
  },
  {
    id: "project6",
    title: "Weather Classifier",
    description: "Analyzed Kaggle-sourced weather data using multiple machine learning models and built a web app in Streamlit for real-time weather classification.",
    tags: ["Machine Learning", "Weather Data", "Streamlit", "Python"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT5,
    githubUrl: "https://github.com/Mujtaba523/Weather-Classifier",
    demoUrl: "#"
  },
  {
    id: "project7",
    title: "EMEA Sales Dashboard",
    description: "Designed a Power BI dashboard to visualize real-time sales performance across the EMEA region with interactive filters and KPI-based visualizations.",
    tags: ["Power BI", "Data Analytics", "Dashboard", "Visualization"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT6,
    githubUrl: "https://github.com/Mujtaba523/EMEA-Dashboard",
    demoUrl: "#"
  },
  {
    id: "project8",
    title: "Maven Analytics Space Challenge",
    description: "Created a detailed Power BI dashboard analyzing unicorn companies by revenue, market share, and user growth with drill-down and filtering features.",
    tags: ["Power BI", "Data Analytics", "Dashboard"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT7,
    githubUrl: "https://github.com/Mujtaba523/MavenAnalyticsSpaceChallenge",
    demoUrl: "#"
  },
  {
    id: "project9",
    title: "Finance Pro – Stock and Currency Dashboard",
    description: "Built a financial dashboard for real-time stock visualization and currency conversion using APIs. Integrated with Streamlit for user interaction.",
    tags: ["Data Analytics", "APIs", "Streamlit", "Dashboard"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT8,
    githubUrl: "https://github.com/Mujtaba523/Finance-Pro",
    demoUrl: "#"
  },
  {
    id: "project10",
    title: "Logo Detection System ",
    description: "Built an end-to-end logo detection system using computer vision and deep learning to identify and localize brand logos in images, trained on a subset of the LogoDet-3K dataset using YOLO-v8.",
    tags: ["Object Detection", "Computer Vision", "Image Processing", "YOLO"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT10,
    githubUrl: "https://github.com/Mujtaba523/Finance-Pro",
    demoUrl: "#"
  },
  {
    id: "project11",
    title: "Trading Automation Using n8n",
    description: "Designed an automated cloud workflow to fetch, process, and transform files using rule-based logic, AWS Lambda, and JavaScript, enabling seamless file extraction, merging, and upload/update operations on Google Drive.",
    tags: ["n8n", "Workflow Automation", "Trading", "AWS"],
    image: PLACEHOLDERS.PROJECT_IMAGES.PROJECT11,
    githubUrl: "https://github.com/Mujtaba523/Finance-Pro",
    demoUrl: "#"
  }
];

// ======================================================
// Publications - Research papers and articles
// ======================================================
export const publications = [
  {
    id: "pub1",
    title: "Analyzing Machine Learning Algorithms in Predicting Ranikot Swelling at Different Compaction Pressures in Presence of Carbon Supported TiO2 Water-Based Mud",
    publisher: "Springer",
    date: "Feb 19, 2025",
    url: "https://link.springer.com/article/10.1007/s41939-025-00770-x"
  },
  {
    id: "pub2",
    title: "A Novel Technique in Determining Mud Cake Permeability in SiO2 Nanoparticles and KCl Salt Water-Based Drilling Fluid Using Deep Learning Algorithm",
    publisher: "International Journal of Petroleum Technology",
    date: "Oct 28, 2024",
    url: "https://avantipublishers.com/index.php/ijpt/article/view/1549"
  }  
];

// ======================================================
// Hero section typing animation text
// ======================================================
export const typingTexts = [
  "Machine Learning Engineer",
  "Data Scientist",
  "AI Engineer",
  "Deep Learning Specialist"
];

// ======================================================
// Add more data sections as needed for other components
// ======================================================
