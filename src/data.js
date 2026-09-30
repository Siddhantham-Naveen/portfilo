// All portfolio content lives here. Edit this file to change the site.

export const profile = {
  name: ["Siddhantham", "Naveen"],
  role: "Full stack developer",
  intro: [
    "I build full stack web applications with the MERN stack, and I have a machine learning background from my AI & ML degree. I finished my B.Tech in Computer Science and Engineering in 2026 and I am looking for my first full-time role.",
    "Below are three projects I built and deployed, the internships I completed, and how to reach me.",
  ],
  email: "snaveen6281@gmail.com",
  phone: "+91 8008202540",
  linkedin: "https://www.linkedin.com/in/naveen-siddhantham/",
  github: "https://github.com/Siddhantham-Naveen",
  resume: "/Naveen_Siddhantham_Resume.pdf",
  // Put your photo at public/photo.jpg. Until then, initials are shown.
  photo: "https://drive.google.com/thumbnail?id=1Zx5auqgksMDu7FRPHuQpJfUcJowEfS07&sz=w1000",
};

export const projects = [
  {
    title: "Job Application Tracker",
    text: "A Kanban board for keeping track of job applications. Cards move between Wish List, Applied, Interviewing, Offer and Rejected by drag and drop (dnd-kit), and their order and status are saved to MongoDB through Mongoose. Sign-in uses email and password with Better Auth, including a password reset by one-time code sent through Resend. Each user gets a separate board, and all reads and writes go through Next.js server actions.",
    stack: "Next.js, TypeScript, MongoDB, Tailwind CSS",
    host: "Vercel",
    live: "https://jobtracker-rho-seven.vercel.app/",
    code: "https://github.com/Siddhantham-Naveen/jobtracker",
  },
  {
    title: "StudySync",
    text: "A study platform where students find organised learning material, track their progress and work together in real time. The React front end talks to a REST API built with Node.js and Express, backed by MongoDB, and the backend is deployed on Render.",
    stack: "React.js, Node.js, Express.js, MongoDB, Socket.IO, WebRTC",
    host: "Render",
    live: "https://study-platform-backend-cgo1.onrender.com/",
    code: "https://github.com/Siddhantham-Naveen/study-platform",
  },
  {
    title: "FitFuel",
    text: "A fitness and nutrition guide with workout plans, diet recommendations and a BMI tracker. Written in plain HTML, CSS and JavaScript, and responsive from phone to desktop.",
    stack: "HTML, CSS, JavaScript",
    host: "Vercel",
    live: "https://fitfuel-one.vercel.app/",
    code: "https://github.com/Siddhantham-Naveen/fitfuel",
  },
];

export const jobs = [
  {
    dates: "May to Jul 2025",
    role: "Web Development Intern (Django)",
    org: "APSSDC, Summer Online Internship Program 2025",
    text: "Built backend-driven web applications in Django, covering URL routing, views, template rendering, form handling and SQLite storage.",
    tech: "Python, Django, HTML, CSS, SQLite",
  },
  {
    dates: "Dec 2024 to Feb 2025",
    role: "Web Development Intern",
    org: "Nullclass, remote",
    text: "Built a YouTube-style website from scratch, with a video listing page, responsive layouts and interactive components, as part of project-based training.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    dates: "May to Jun 2024",
    role: "AI & ML Intern",
    org: "APSSDC with Edunet Foundation and IBM SkillsBuild",
    text: "Six-week internship on machine learning. Worked through supervised learning, data preprocessing, feature engineering and model evaluation on practical use cases.",
    tech: "Python, IBM SkillsBuild",
  },
];

export const skills = [
  ["Front end", "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS"],
  ["Back end", "Node.js, Express.js, REST APIs, JWT authentication"],
  ["Databases", "MongoDB, SQL, SQLite"],
  ["AI and ML", "Python, machine learning, data preprocessing; working knowledge of RAG and LangChain"],
  ["Tools", "Git, GitHub, Docker; deployment on Vercel and Render"],
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering (AI & ML)",
  school: "Aditya College of Engineering and Technology, Surampalem",
  years: "2022 to 2026",
  cgpa: "CGPA 7.46",
  coursework:
    "Data Structures, Algorithms, Machine Learning, Deep Learning, DBMS, Artificial Intelligence, NLP, Computer Networks",
};

export const certificates = [
  {
    name: "Amazon Aurora MySQL: Basics",
    issuer: "AWS Training & Certification",
    date: "Jun 2025",
    url: "https://www.linkedin.com/posts/naveen-siddhantham_aws-amazonaurora-cloudcomputing-share-7338878202313863169-NZk-/",
  },
  {
    name: "Web Development & Real-Time Project: Build a Website Like YouTube",
    issuer: "Nullclass",
    date: "Dec 2024",
    url: "https://www.linkedin.com/posts/naveen-siddhantham_internship-nucleustechnologies-webdevelopment-share-7273721944812699648-MN_x/",
  },
  {
    name: "My APSSDC, My Website: Web Design Course",
    issuer: "GUVI Geek Networks (Skill-A-Thon)",
    date: "2024",
    url: "https://www.linkedin.com/posts/naveen-siddhantham_webdesign-apssdc-careergrowth-share-7173668157121851392-vyTC/",
  },
];
