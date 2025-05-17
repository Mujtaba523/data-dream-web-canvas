
export interface SkillType {
  name: string;
  percentage: number;
  category: 'programming' | 'mlai' | 'tools';
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface TimelineItemType {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

export interface CertificationType {
  id: string;
  title: string;
  organization: string;
  date: string;
  url: string;
}

export const skills: SkillType[] = [
  {
    name: "Python",
    percentage: 95,
    category: "programming",
  },
  {
    name: "SQL",
    percentage: 85,
    category: "programming",
  },
  {
    name: "R",
    percentage: 75,
    category: "programming",
  },
  {
    name: "TensorFlow",
    percentage: 90,
    category: "mlai",
  },
  {
    name: "PyTorch",
    percentage: 85,
    category: "mlai",
  },
  {
    name: "Scikit-Learn",
    percentage: 95,
    category: "mlai",
  },
  {
    name: "Pandas",
    percentage: 95,
    category: "mlai",
  },
  {
    name: "NumPy",
    percentage: 90,
    category: "mlai",
  },
  {
    name: "NLP",
    percentage: 88,
    category: "mlai",
  },
  {
    name: "Computer Vision",
    percentage: 85,
    category: "mlai",
  },
  {
    name: "Data Visualization",
    percentage: 90,
    category: "mlai",
  },
  {
    name: "Jupyter/Colab",
    percentage: 95,
    category: "tools",
  },
  {
    name: "Power BI",
    percentage: 88,
    category: "tools",
  },
  {
    name: "Streamlit",
    percentage: 85,
    category: "tools",
  },
  {
    name: "Git",
    percentage: 80,
    category: "tools",
  },
  {
    name: "MS Excel",
    percentage: 85,
    category: "tools",
  },
];

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Voice Cloning System (FYP)",
    description:
      "Fine-tuned XTTs model on 10 hours of recorded speech to create a deep learning-based voice cloning system. Achieved Mean Opinion Score (MOS) of 3.14 for naturalness and similarity to the original speaker.",
    image: "https://images.unsplash.com/photo-1589254065909-b7086229d08c",
    tags: ["Deep Learning", "NLP", "Audio Processing", "Python"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "2",
    title: "Interviewing Expert System",
    description:
      "Developed an NLP-driven expert system to ask technical questions during interviews and score responses based on keyword similarity. Achieved 85% accuracy in evaluating technical answers.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39",
    tags: ["NLP", "Machine Learning", "Python", "Interviews"],
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Alzheimer's Detection via MRI Scans",
    description:
      "Built a CNN model using TensorFlow and Keras to detect Alzheimer's disease from MRI scans. Implemented as a Streamlit web application for accessibility and research purposes.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28",
    tags: ["CNN", "Medical Imaging", "TensorFlow", "Streamlit"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "4",
    title: "Reddit Sentiment Analysis",
    description:
      "Implemented multiple ML models including LSTM, Decision Trees, and Logistic Regression to analyze sentiments in Reddit posts. Achieved 96% accuracy using deep learning and NLP techniques.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["LSTM", "NLP", "Sentiment Analysis", "Deep Learning"],
    githubUrl: "#",
  },
  {
    id: "5",
    title: "EMEA Sales Dashboard",
    description:
      "Developed a comprehensive Power BI dashboard for real-time sales performance analysis across the EMEA region with customizable visualizations and filters for product and regional analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Power BI", "Data Visualization", "Business Analytics"],
    githubUrl: "#",
  },
  {
    id: "6",
    title: "Finance Pro Dashboard",
    description:
      "Created a real-time stock visualization and currency conversion dashboard for tracking prices, analyzing trends, and making informed financial decisions with an intuitive interface.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    tags: ["Financial Analysis", "Data Visualization", "Streamlit", "Python"],
    githubUrl: "#",
    demoUrl: "#",
  },
];

export const timelineItems: TimelineItemType[] = [
  {
    id: "exp1",
    title: "GTP Officer (IT Enterprise Architecture & SQA)",
    organization: "1Link Pvt Ltd",
    period: "Aug 2024 - Present",
    description:
      "Performing functional/UAT testing for IBFT and Bill Payment systems. Automated QA processes reducing timelines by 70%.",
    type: "experience",
  },
  {
    id: "exp2",
    title: "Machine Learning Intern",
    organization: "Coding Samurai",
    period: "Sep 2023 - Oct 2023",
    description:
      "Worked on NLP & Deep Learning projects, including model building and deployment. Gained hands-on experience with cutting-edge AI technologies.",
    type: "experience",
  },
  {
    id: "exp3",
    title: "Level 2 Data Science Seller",
    organization: "Fiverr",
    period: "Jun 2022 - Oct 2023",
    description:
      "Delivered 90+ projects including Python/Excel/SQL data analysis, Power BI reports, GUI development and ML model implementation for clients worldwide.",
    type: "experience",
  },
  {
    id: "edu1",
    title: "B.E. in Computer Information & Systems Engineering",
    organization: "NED University of Engineering & Technology",
    period: "2020 - 2024",
    description:
      "CGPA: 3.90. Specialized in data science and artificial intelligence applications. Final year project: Deep Learning Based Voice Cloning.",
    type: "education",
  },
  {
    id: "edu2",
    title: "Intermediate",
    organization: "Adamjee Government Science College",
    period: "2018 - 2020",
    description:
      "Pre-Engineering. Final grade: 85%.",
    type: "education",
  },
  {
    id: "edu3",
    title: "Matriculation",
    organization: "Shaheen Public School",
    period: "2018",
    description:
      "Science Group. Final grade: 88%.",
    type: "education",
  },
];

export const certifications: CertificationType[] = [
  {
    id: "cert1",
    title: "IBM Data Science Professional Certificate",
    organization: "Coursera",
    date: "2023",
    url: "#",
  },
  {
    id: "cert2",
    title: "Introduction to TensorFlow for AI/ML/DL",
    organization: "Coursera",
    date: "2023",
    url: "#",
  },
  {
    id: "cert3",
    title: "Python for Everybody Specialization",
    organization: "Coursera",
    date: "2022",
    url: "#",
  },
  {
    id: "cert4",
    title: "Cloud Computing Basics",
    organization: "Coursera",
    date: "2022",
    url: "#",
  },
  {
    id: "cert5",
    title: "Problem Solving (Basic)",
    organization: "HackerRank",
    date: "2023",
    url: "#",
  },
  {
    id: "cert6",
    title: "SQL (Basic)",
    organization: "HackerRank",
    date: "2023",
    url: "#",
  },
  {
    id: "cert7",
    title: "Data Analytics & BI",
    organization: "DigiSkills.pk",
    date: "2022",
    url: "#",
  },
];

export const typingTexts = [
  "Machine Learning Engineer",
  "Deep Learning Researcher",
  "NLP Specialist",
  "Data Engineer",
  "Data Analytics Expert",
  "Computer Vision Expert",
  "Kaggle Expert"
];

export const publications = [
  {
    id: "pub1",
    title: "Analyzing machine learning algorithms in predicting Ranikot swelling at different compaction pressures in presence of carbon supported TiO2 water based mud",
    publisher: "Springer",
    date: "Feb 19, 2025",
    url: "#"
  },
  {
    id: "pub2",
    title: "A Novel Technique in Determining Mud Cake Permeability in SiO2 Nanoparticles and KCl Salt Water Based Drilling Fluid using Deep Learning Algorithm",
    publisher: "International Journal of Petroleum Technology",
    date: "Oct 28, 2024",
    url: "#"
  }
];
