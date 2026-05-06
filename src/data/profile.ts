export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  color: string;
  href?: string;
  links?: Array<{ label: string; href: string }>;
};

export type PortfolioProfile = {
  name: {
    first: string;
    last: string;
    full: string;
  };
  hero: {
    availability: string;
    headlinePrefix: string;
    tagline: string;
  };
  about: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    cards: Array<{ title: string; label: string }>;
  };
  skills: Array<{ label: string; icon: string; skills: string[] }>;
  projects: PortfolioProject[];
  education: Array<{
    program: string;
    institute: string;
    period: string;
  }>;
  contact: {
    email?: string;
    phone?: string;
    socials: Array<{ name: string; label: string; href: string }>;
  };
};

export const profile: PortfolioProfile = {
  name: {
    first: "Kavindu",
    last: "Thareen",
    full: "Kavindu Thareen",
  },
  hero: {
    availability: "Available for work",
    headlinePrefix: "Hi, I'm",
    tagline:
      "Results-driven Full Stack Developer building scalable, high-performance applications with clean, maintainable code.",
  },
  about: {
    heading: "About Me",
    subheading: "Building scalable products,\none feature at a time",
    paragraphs: [
      "Results-driven Full Stack Developer with hands-on experience building scalable, high-performance applications. Proficient in JavaScript, TypeScript, React, Angular, Node.js, Spring Boot, and database management with PostgreSQL and MySQL.",
      "Strong foundation in Java, OOP principles, and modern front-end technologies including HTML, CSS, SCSS, Tailwind CSS, and Bootstrap. Skilled in developing RESTful APIs and following Agile development practices.",
      "Passionate about writing clean, maintainable code, ensuring responsive design, and leveraging emerging technologies to deliver innovative, user-centric solutions.",
    ],
    cards: [
      { title: "Full Stack", label: "Web & Mobile Development" },
      { title: "REST APIs", label: "Agile Practices" },
      { title: "PostgreSQL", label: "MySQL • MongoDB • Firebase" },
      { title: "HND (IJSE)", label: "Software Engineering (2023–2025)" },
    ],
  },
  skills: [
    {
      label: "Languages",
      icon: "</>",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Java",
        "Python",
        "HTML5",
        "CSS3 / SCSS",
        "SQL",
      ],
    },
    {
      label: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
    },
    {
      label: "Backend & Tools",
      icon: "🛠",
      skills: [
        "Node.js",
        "Express",
        "Spring Boot",
        "RESTful APIs",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
        "Flutter",
        "React Native (basic)",
        "Unit & Integration Testing",
        "Git",
        "Docker",
        "Webpack",
        "Postman",
      ],
    },
  ],
  projects: [
    {
      title: "Hotel Management System",
      category: "Full Stack Web App",
      description:
        "A hotel management platform built with React and Spring Boot for room bookings, reservations, guest handling, and admin operations.",
      tech: ["React", "Spring Boot", "REST APIs", "PostgreSQL"],
      color: "from-accent/20 to-primary/10",
    },
    {
      title: "Turtles Care Project – Temperature-Controlled Hatchery System",
      category: "IoT / Conservation (Innovesta ’23 Winner)",
      description:
        "Automated hatchery monitoring system supporting sea turtle conservation, with real-time temperature and humidity tracking, plus member/visitor booking and scheduling.",
      tech: ["Java", "MySQL", "IoT Sensors (DHT11/DHT22)", "HTML", "CSS"],
      color: "from-primary/20 to-accent/10",
    },
    {
      title: "HandyTalk App – AI-Powered Sign Language Translator",
      category: "Mobile (Circle Edge ’24 Finalist)",
      description:
        "Flutter app bridging communication gaps with text-to-speech and speech recognition, interactive learning modules, and a personalized dashboard for progress tracking.",
      tech: ["Flutter", "Firebase", "Speech Recognition", "Text-to-Speech"],
      href: "https://github.com/orgs/Algo-Minds-Software-Co-Operation/repositories",
      color: "from-accent/20 to-primary/10",
    },
    {
      title: "Master Data Management System",
      category: "Laravel / Data Platform",
      description:
        "Full-stack Laravel + MySQL platform with JWT auth, role-based access control, responsive dashboards, CRUD workflows, validation, and advanced search.",
      tech: ["Laravel", "MySQL", "JWT", "Blade"],
      href: "https://github.com/KavinduThareen/Master-Data-Management-System",
      color: "from-primary/15 to-accent/20",
    },
    {
      title: "Inventory Management System",
      category: "Full Stack Web App",
      description:
        "Inventory system with stock tracking, product management, reporting, CRUD operations, real-time updates via Axios + APIs, and role-based access control.",
      tech: ["React", "Laravel", "MySQL", "Axios", "JWT"],
      color: "from-accent/15 to-primary/15",
      href: "https://github.com/KavinduThareen/inventory-management-system-react",
      links: [
        {
          label: "Frontend",
          href: "https://github.com/KavinduThareen/inventory-management-system-react",
        },
        {
          label: "Backend",
          href: "https://github.com/KavinduThareen/inventory-management-system-backend",
        },
      ],
    },
    {
      title: "Uber Clone App – Frontend Ride-Booking Interface",
      category: "Frontend (React + TypeScript)",
      description:
        "Frontend-only ride-booking UI with responsive Tailwind design, dynamic ride selection flows, and reusable components for trip summaries and route details.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      href: "https://github.com/KavinduThareen/uber-clone",
      color: "from-primary/20 to-accent/10",
    },
  ],
  education: [
    {
      program: "HND in Software Engineering",
      institute: "IJSE – Institute of Software Engineering, Sri Lanka",
      period: "Mar 2023 – Jul 2025",
    },
  ],
  contact: {
    email: "kavindutharin@gmail.com",
    phone: "+94 77 835 3649",
    socials: [
      {
        name: "GH",
        label: "GitHub",
        href: "https://github.com/KavinduThareen?tab=repositories",
      },
      {
        name: "LI",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kavindu-thareen-a42996279/",
      },
    ],
  },
};
