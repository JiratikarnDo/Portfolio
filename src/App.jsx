import React from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';
import githubLogo from './assets/github.png';
import finloveIcon from './assets/FINLOVE_ICON.png';
import elasticsearch from './assets/elasticsearch.png'
import opensearch from './assets/opensearch.png'
import farm from './assets/farm.png'

function App() {
  const skills = ["Python", "JavaScript", "Go", "TypeScript", "SQL", "SqlServer", "MongoDB", "PostgreSql", "Docker", "Git"];
  
  const projects = [
    {
      title: "Warehouse Management System (WMS)",
      tech: "Python (FastAPI)", 
      desc: "Solved stock tracking issues.",
      icon: "📦" ,
      isNDA: true
    },
    {
      title: "MQA System", 
      tech: "Python (FastAPI)", 
      desc: "MQA is a web-based platform for managing documents related to university courses.",
      icon: "🎓" ,
      githubLink: "https://github.com/JiratikarnDo/Backend_MQA.git"
    },
    { 
      title: "Finlove", 
      tech: "Python (Flask), Node.js(JavaScript)", 
      desc: "Finlove is a web app suitable for people who want to find a make friends or someone to chat with.",
      icon: finloveIcon ,
      githubLink: "https://github.com/JiratikarnDo/Finlove_Project.git"
    },
    {
      title: "Kanban",
      tech: "Python (FastAPI)",
      desc: "Designed for streamlined project management.",
      icon: "📋",
      githubLink: "https://github.com/JiratikarnDo/Kanban-fastapi"
    },
    {
      title: "Seach Engine",
      tech:"Elasticsearch , Python (Fastapi)",
      desc:"Improve search engine accuracy from 31% to 81%.",
      icon: elasticsearch,
      isNDA: true
    },
    {
      title: "Log Management System",
      tech: "OpenSearch, Python (FastAPI)",
      desc: "Developed a Log Management System from scratch using OpenSearch for system monitoring.",
      icon: opensearch,
      isNDA: true
    },
    {
      title:"Iot (Smart Form)",
      tech:"C++ , C",
      desc:"IoT smart mushroom house designed for automated home farming.",
      icon: farm,
      githubLink:"https://github.com/JiratikarnDo/Auduino-ESP32-DHT22-Soil-Moisture-Blynk-Auto-Manaul-LineNotify-and-Save-in-Google-Sheet.git"
    }
  ];

  return (
    <div className="app-container">
      {/* 1. Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">Portfolio Dodo</div>
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
            <h1>Portfolio <span className="highlight">Dodo</span>.</h1>
            <p className="hero-subtitle">Backend Developer</p>
            <div className="contact-btns">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="mailto:jiratikarn.pri@gmail.com" className="btn-secondary">📧 Email Me</a>
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
        <h2>💻 Projects</h2>
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