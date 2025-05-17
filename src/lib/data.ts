
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
    name: "R",
    percentage: 80,
    category: "programming",
  },
  {
    name: "SQL",
    percentage: 85,
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
    percentage: 80,
    category: "mlai",
  },
  {
    name: "Data Visualization",
    percentage: 85,
    category: "mlai",
  },
  {
    name: "Docker",
    percentage: 75,
    category: "tools",
  },
  {
    name: "Git",
    percentage: 90,
    category: "tools",
  },
  {
    name: "Jupyter",
    percentage: 95,
    category: "tools",
  },
  {
    name: "AWS/GCP",
    percentage: 70,
    category: "tools",
  },
];

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "NLP Document Classifier",
    description:
      "Built an NLP model to automatically classify legal documents into 12 different categories with 94% accuracy, reducing manual classification time by 80%.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["NLP", "Python", "TensorFlow", "BERT"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "2",
    title: "Predictive Maintenance System",
    description:
      "Developed a machine learning system to predict equipment failures before they occur, resulting in a 35% reduction in downtime for manufacturing clients.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Time Series", "PyTorch", "IoT", "Dashboard"],
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Customer Churn Prediction",
    description:
      "Created an ML pipeline to identify at-risk customers, increasing retention by 25% and saving an estimated $2M annually in lost revenue.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Classification", "XGBoost", "Feature Engineering"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "4",
    title: "Image Recognition App",
    description:
      "Built a mobile app that uses computer vision to identify plant species from photos with 92% accuracy, helping users diagnose plant diseases.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Computer Vision", "CNN", "Mobile App", "TensorFlow Lite"],
    githubUrl: "#",
  },
];

export const timelineItems: TimelineItemType[] = [
  {
    id: "exp1",
    title: "Senior Data Scientist",
    organization: "TechCorp AI",
    period: "2021 - Present",
    description:
      "Lead a team of data scientists in developing machine learning models for predictive maintenance and anomaly detection. Implemented MLOps practices that reduced model deployment time by 60%.",
    type: "experience",
  },
  {
    id: "exp2",
    title: "Data Scientist",
    organization: "DataViz Solutions",
    period: "2018 - 2021",
    description:
      "Developed NLP models for sentiment analysis and document classification. Created data visualization dashboards that increased stakeholder engagement by 40%.",
    type: "experience",
  },
  {
    id: "exp3",
    title: "Machine Learning Intern",
    organization: "AI Innovations Lab",
    period: "2017 - 2018",
    description:
      "Assisted in research and development of deep learning models for image recognition tasks. Published a paper on efficient CNN architectures.",
    type: "experience",
  },
  {
    id: "edu1",
    title: "M.S. in Computer Science, AI Specialization",
    organization: "Massachusetts Institute of Technology",
    period: "2015 - 2017",
    description:
      "Focused on machine learning algorithms and deep learning. Thesis on 'Efficient Attention Mechanisms for NLP Tasks'.",
    type: "education",
  },
  {
    id: "edu2",
    title: "B.S. in Computer Science & Mathematics",
    organization: "Stanford University",
    period: "2011 - 2015",
    description:
      "Double major with focus on algorithmic foundations and statistical methods. Research assistant in the AI lab.",
    type: "education",
  },
];

export const certifications: CertificationType[] = [
  {
    id: "cert1",
    title: "Deep Learning Specialization",
    organization: "DeepLearning.AI",
    date: "2020",
    url: "#",
  },
  {
    id: "cert2",
    title: "TensorFlow Developer Certification",
    organization: "Google",
    date: "2019",
    url: "#",
  },
  {
    id: "cert3",
    title: "AWS Machine Learning Specialty",
    organization: "Amazon Web Services",
    date: "2021",
    url: "#",
  },
];

export const typingTexts = [
  "Machine Learning Engineer",
  "Deep Learning Researcher",
  "NLP Specialist",
  "Data Engineer",
  "Data Analytics Expert",
  "AI Solution Architect"
];
