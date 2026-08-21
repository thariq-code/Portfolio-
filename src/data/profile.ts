export type Skill = {
  name: string;
  cat: string;
  icon: string;
  lvl: number;
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  category: string;
  blurb: string;
  tech: string[];
  grad: [string, string];
  icon: string;
  repoUrl: string;
};

export type Certification = {
  title: string;
  issuer: string;
  issuerShort: string;
  icon: string;
  grad: [string, string];
};

export type Goal = {
  role: string;
  icon: string;
  why: string;
};

export const profile = {
  name: "Thariq Arsath J",
  firstName: "Thariq",
  role: "Aspiring AI & Machine Learning Engineer",
  email: "thariqarsath786@gmail.com",
  phone: "+91 6374458693",
  phoneHref: "tel:+916374458693",
  github: "https://github.com/thariq-code",
  githubHandle: "thariq-code",
  linkedin: "https://www.linkedin.com/in/thariq-arsath-j-5017ab315",
  linkedinHandle: "in/thariq-arsath-j",
  location: "Coimbatore, Tamil Nadu, India",
  education: {
    degree: "B.Sc. Artificial Intelligence & Machine Learning",
    college: "Shri Nehru Maha Vidyalaya College of Arts and Science",
    university: "Bharathiar University",
    score: 85,
    note: "Hands-on academic training across ML, Deep Learning, Data Science and AI application development.",
  },
  program: {
    title: "GUVI × HCL GenZen — Artificial Intelligence & Machine Learning Program",
    note: "Industry-aligned immersive program covering the complete AI/ML lifecycle — from data wrangling to model deployment.",
  },
  tagline:
    "I design and build intelligent systems that learn, see and understand — turning raw data into real decisions.",
  stats: [
    { value: 85, suffix: "%", label: "Academic Score" },
    { value: 19, suffix: "+", label: "Core Skills" },
    { value: 9, suffix: "", label: "Projects Built" },
    { value: 9, suffix: "+", label: "Certifications" },
  ],
};

export const skills: Skill[] = [
  { name: "Artificial Intelligence", cat: "AI Core", icon: "brain", lvl: 90 },
  { name: "Machine Learning", cat: "AI Core", icon: "sparkles", lvl: 92 },
  { name: "Deep Learning", cat: "AI Core", icon: "layers", lvl: 85 },
  { name: "Computer Vision", cat: "AI Core", icon: "eye", lvl: 86 },
  { name: "Natural Language Processing", cat: "AI Core", icon: "messages", lvl: 82 },
  { name: "Python", cat: "Programming", icon: "code", lvl: 92 },
  { name: "SQL", cat: "Programming", icon: "database", lvl: 85 },
  { name: "NumPy", cat: "Data Science", icon: "grid", lvl: 84 },
  { name: "Pandas", cat: "Data Science", icon: "table", lvl: 86 },
  { name: "TensorFlow", cat: "ML Frameworks", icon: "hexagon", lvl: 83 },
  { name: "PyTorch", cat: "ML Frameworks", icon: "flame", lvl: 78 },
  { name: "Scikit-learn", cat: "ML Frameworks", icon: "boxes", lvl: 87 },
  { name: "OpenCV", cat: "ML Frameworks", icon: "scan", lvl: 84 },
  { name: "Flask", cat: "Web & Tools", icon: "flask", lvl: 80 },
  { name: "HTML", cat: "Web & Tools", icon: "globe", lvl: 82 },
  { name: "CSS", cat: "Web & Tools", icon: "palette", lvl: 80 },
  { name: "JavaScript", cat: "Web & Tools", icon: "braces", lvl: 76 },
  { name: "VS Code", cat: "Web & Tools", icon: "square-code", lvl: 90 },
  { name: "Jupyter Notebook", cat: "Web & Tools", icon: "notebook", lvl: 88 },
];

export const skillCategories = ["All", "AI Core", "Programming", "Data Science", "ML Frameworks", "Web & Tools"];

export const projects: Project[] = [
  {
    id: "fraud-detection",
    title: "Advanced Machine Learning Techniques for Accurate Detection of Fraudulent Bank Transactions",
    tag: "Fraud Intelligence",
    category: "Finance · Security",
    blurb:
      "End-to-end ML pipeline for spotting fraudulent bank transactions — engineered features, handled class imbalance and benchmarked classifiers to separate genuine behaviour from anomalies.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML Pipelines"],
    grad: ["#4f7cff", "#8b5cf6"],
    icon: "shield",
    repoUrl: "https://github.com/thariq-code/ADVANCED-MACHINE-LEARNING-TECHNIQUES-FOR-ACCURATE-DETECTION-OF-FRADULENT-BANK-TRANSACTIONS",
  },
  {
    id: "deepfake-detection",
    title: "AI-Based Adaptive Deepfake Voice & Video Scam Detection System",
    tag: "Media Forensics",
    category: "Security · Deep Learning",
    blurb:
      "Adaptive detection system that fuses audio and visual forgery cues to flag synthetic deepfake voice and video scams — a defence layer for identity-driven fraud.",
    tech: ["Deep Learning", "CNN", "LSTM", "OpenCV", "Python"],
    grad: ["#8b5cf6", "#ec4899"],
    icon: "scan-face",
    repoUrl: "https://github.com/thariq-code/ai_adaptive_deepfake_detection",
  },
  {
    id: "burnout-detection",
    title: "AI-Based Developer Burnout Detection Using Code Pattern Analysis",
    tag: "Human-Centred AI",
    category: "Well-being · ML",
    blurb:
      "Uses machine learning on code patterns, commit rhythms and work-hour signals to detect developer burnout early — technology built to care for the people behind the code.",
    tech: ["Python", "ML", "NLP", "Pandas", "Feature Engineering"],
    grad: ["#22d3ee", "#4f7cff"],
    icon: "heart-pulse",
    repoUrl: "https://github.com/thariq-code/Burnout-Detection",
  },
  {
    id: "cardekho-price",
    title: "CarDekho Car Price Prediction",
    tag: "Regression",
    category: "Fintech · ML",
    blurb:
      "Regression system that predicts used-car prices from CarDekho data — feature engineering, model comparison and hyperparameter tuning across multiple regressors.",
    tech: ["Python", "Scikit-learn", "Pandas", "Regression"],
    grad: ["#0ea5e9", "#22d3ee"],
    icon: "car",
    repoUrl: "https://github.com/thariq-code/Cardeko-Car-Price-Prediction-Model",
  },
  {
    id: "gpay-expense",
    title: "Google Pay Expense Sharing System",
    tag: "Full-Stack",
    category: "Fintech · Web",
    blurb:
      "Expense-splitting platform for group payments — tracks balances, resolves settlements and simplifies who-owes-whom into one clean, usable interface.",
    tech: ["Flask", "HTML", "CSS", "JavaScript", "SQL"],
    grad: ["#22d3ee", "#8b5cf6"],
    icon: "wallet",
    repoUrl: "https://github.com/thariq-code/googlepay-expense-sharing",
  },
  {
    id: "tesla-stock",
    title: "Tesla Stock Price Prediction System",
    tag: "Time Series",
    category: "Finance · Deep Learning",
    blurb:
      "Sequence models and technical indicators applied to Tesla stock data to capture market trends and forecast price movement over time.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas"],
    grad: ["#6366f1", "#4f7cff"],
    icon: "line-chart",
    repoUrl: "https://github.com/thariq-code/tesla-stock-price-prediction-with-lstm",
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition System using LFW Dataset",
    tag: "Computer Vision",
    category: "Vision · Deep Learning",
    blurb:
      "Face recognition trained on the Labeled Faces in the Wild dataset — deep embeddings and similarity matching to identify faces with precision.",
    tech: ["Deep Learning", "CNN", "OpenCV", "Python"],
    grad: ["#a855f7", "#6366f1"],
    icon: "user-check",
    repoUrl: "https://github.com/thariq-code/Face-Recognition-System-Using-LFW-Dataset",
  },
  {
    id: "sql-bookstore",
    title: "SQL BookStore Database Management System",
    tag: "Data Engineering",
    category: "Database · SQL",
    blurb:
      "A fully normalized bookstore database — relational schema, stored procedures, analytical queries and management views for inventory and orders.",
    tech: ["SQL", "MySQL", "Database Design"],
    grad: ["#38bdf8", "#0ea5e9"],
    icon: "library",
    repoUrl: "https://github.com/thariq-code/SQL-Bookstore-Database",
  },
  {
    id: "autopilot-clone",
    title: "Tesla Autopilot Clone — Object Detection System",
    tag: "Autonomous AI",
    category: "Vision · Autonomous",
    blurb:
      "Real-time object detection inspired by Tesla Autopilot — detecting vehicles, pedestrians and lane structures from camera frames using deep learning.",
    tech: ["Computer Vision", "OpenCV", "YOLO", "Deep Learning"],
    grad: ["#4f7cff", "#22d3ee"],
    icon: "radar",
    repoUrl: "https://github.com/thariq-code/Tesla-Autopilot-Clone-Object-Detection",
  },
];

export const certifications: Certification[] = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    issuerShort: "IBM",
    icon: "badge",
    grad: ["#4f7cff", "#60a5fa"],
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    issuerShort: "IBM",
    icon: "shield",
    grad: ["#22d3ee", "#4f7cff"],
  },
  {
    title: "Programming in Python using Machine Learning",
    issuer: "IBM SkillsBuild",
    issuerShort: "IBM",
    icon: "code",
    grad: ["#8b5cf6", "#a78bfa"],
  },
  {
    title: "Fundamentals of Web Development",
    issuer: "IBM SkillsBuild",
    issuerShort: "IBM",
    icon: "globe",
    grad: ["#0ea5e9", "#22d3ee"],
  },
  {
    title: "Object Oriented Programming Using Python",
    issuer: "Infosys Springboard",
    issuerShort: "Infosys",
    icon: "award",
    grad: ["#6366f1", "#4f7cff"],
  },
  {
    title: "Foundation of Coding Using Python",
    issuer: "Infosys Springboard",
    issuerShort: "Infosys",
    icon: "terminal",
    grad: ["#38bdf8", "#8b5cf6"],
  },
  {
    title: "Embedded Systems and ROS",
    issuer: "IHUB Robotics — IIT Hyderabad",
    issuerShort: "IHUB",
    icon: "cog",
    grad: ["#a855f7", "#ec4899"],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    issuer: "GUVI × HCL GenZen",
    issuerShort: "GUVI × HCL",
    icon: "graduation",
    grad: ["#4f7cff", "#22d3ee"],
  },
  {
    title: "Mastering MySQL in Tamil",
    issuer: "GUVI × HCL",
    issuerShort: "GUVI × HCL",
    icon: "database",
    grad: ["#22d3ee", "#0ea5e9"],
  },
];

export const goals: Goal[] = [
  {
    role: "Machine Learning Engineer",
    icon: "brain-circuit",
    why: "Design and ship end-to-end ML systems that learn from real-world data.",
  },
  {
    role: "AI Engineer",
    icon: "bot",
    why: "Build intelligent products that perceive, reason and act.",
  },
  {
    role: "Associate AI/ML Engineer",
    icon: "cpu",
    why: "Contribute to production ML pipelines and the full model lifecycle.",
  },
  {
    role: "Data Analyst",
    icon: "bar-chart",
    why: "Turn raw data into decisions with sharp analysis and clear narratives.",
  },
  {
    role: "NLP Engineer",
    icon: "messages",
    why: "Teach machines to understand and generate human language.",
  },
  {
    role: "Deep Learning Engineer",
    icon: "layers",
    why: "Architect neural networks for vision, speech and sequence tasks.",
  },
  {
    role: "Software Engineer (AI/ML Domain)",
    icon: "code",
    why: "Engineer scalable, maintainable software around intelligent features.",
  },
];

export const marqueeItems = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Python",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "Scikit-learn",
  "SQL",
  "Data Science",
];
