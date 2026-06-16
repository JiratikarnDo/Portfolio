import React from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';
import githubLogo from './assets/github.png';
import finloveIcon from './assets/FINLOVE_ICON.png';
import elasticsearch from './assets/elasticsearch.png'
import opensearch from './assets/opensearch.png'

function App() {
  const skills = ["Python", "JavaScript", "Go", "TypeScript", "SQL", "SqlServer", "MongoDB", "Docker", "Git"];
  
  const projects = [
    {
      title: "Warehouse Management System (WMS)",
      tech: "Python (FastAPI)", 
      desc: "Developed during internship. Solved stock tracking issues.",
      icon: "📦" ,
      isNDA: true
    },
    {
      title: "MQA System", 
      tech: "Python (FastAPI)", 
      desc: "The MQA project is a web-based system for managing university course registrations documents",
      icon: "🎓" ,
      githubLink: "https://github.com/JiratikarnDo/Backend_MQA.git"
    },
    { 
      title: "Finlove", 
      tech: "Python (Flask), Node.js(JavaScript)", 
      desc: "Optimized neighbor search for efficiency.",
      icon: finloveIcon ,
      githubLink: "https://github.com/JiratikarnDo/Finlove_Project.git"
    },
    {
      title: "Kanban",
      tech: "Python (FastAPI)",
      desc: "Designed for streamlined project management",
      icon: "📋",
      githubLink: "https://github.com/JiratikarnDo/Kanban-fastapi"
    },
    {
      title: "Seach Engine",
      tech:"Elasticsearch , Python (Fastapi)",
      desc:"Boosted search engine accuracy from 31% to 81% by migrating to Elasticsearch.",
      icon: elasticsearch,
      isNDA: true
    },
    {
      title: "Log Management System",
      tech: "OpenSearch, Python (FastAPI)",
      desc: "Built an end-to-end Log Management System from scratch using OpenSearch for centralized system monitoring.",
      icon: opensearch,
      isNDA: true
    }
  ];

  return (
    <div className="app-container">
      {/* 1. Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">Dodo Portfolio</div>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* 2. Hero Section*/}
      <header className="hero-section">
        <div className="hero-content-wrapper">
          <img src={profileImg} alt="Do Profile" className="profile-img" />
          <div className="hero-text">
            <h1>Hello, I'm <span className="highlight">Do</span>.</h1>
            <p className="hero-subtitle">Backend Developer | Creative Problem Solver</p>
            <div className="contact-btns">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="mailto:jiratikarn.pri@gmail.com" className="btn-secondary">Email Me</a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Skills Section */}
      <section id="skills" className="skills-section">
        <h2>🚀 Tech Stack</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill} className="skill-badge">{skill}</div>
          ))}
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="projects-section">
        <h2>💻 Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <div className="card-icon">
                {typeof proj.icon === 'string' && !proj.icon.includes('/') ? (
                  proj.icon
                ) : (
                  <img src={proj.icon} alt={proj.title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                )}
              </div>
              <h3>{proj.title}</h3>
              <p className="proj-tech"><strong>Tech:</strong> {proj.tech}</p>
              <p className="proj-desc">{proj.desc}</p>
              
              <div className="card-links">
                {proj.isNDA ? (
                  <span className="card-badge-nda">🔒 Private (NDA)</span>
                ) : (
                  <a href={proj.githubLink} target="_blank" rel="noreferrer" className="card-btn">
                    View Code
                  </a>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="contact-section">

        <div className="contact-links-box">
          
          <div className="contact-phone">
            <span className="phone-icon">📞</span>
            <span className="phone-number">095-767-6122</span>
          </div>

          <a href="mailto:jiratikarn.pri@gmail.com" className="btn-primary">📧 Email Me</a>
          
          <a href="https://github.com/JiratikarnDo" target="_blank" rel="noreferrer" className="btn-secondary btn-with-icon">
            <img src={githubLogo} alt="GitHub Logo" className="btn-icon" />
            GitHub
          </a>
          
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="app-footer">
        <p>© 2026 Do's Showcase. Built with React & Vite.</p>
        <p>Thailand</p>
      </footer>
    </div>
  );
}

export default App;