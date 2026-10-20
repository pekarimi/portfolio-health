import React, { useState } from 'react';
import { ArrowUpRight, Eye, Mail, Linkedin, MapPin } from 'lucide-react';

const Portfolio = ({ onProjectClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const contactInfo = {
    email: "pekarimi67@gmail.com",
    linkedin: "https://www.linkedin.com/in/pegah-karimi-9194b4126",
    location: "San Francisco Bay Area",
    resumeFile: "pegah-karimi-resume.pdf"
  };

  const featuredProject = {
    id: 9,
    title: "ATUSA Desktop App",
    subtitle: "3D Breast Ultrasound Reading Software",
    description: "I lead UI/UX and human factors for iSono Health's FDA-regulated 3D breast ultrasound system: worklist, acquisition, multi-plane review, AI findings, 3D, implants and reporting, designed with clinicians and built as working software connected to the real scanner.",
    year: "2025 to present",
    image: "/images/atusa/review-planes.jpg",
    tags: ["Clinical Product Design", "Human-AI Interaction", "IEC 62366-1", "React & Three.js"],
    hasDetailPage: true
  };

  const sections = [
    {
      id: 'health',
      title: 'More health work',
      projects: [
        {
          id: 7,
          title: "ATUSA Target Scan & Reporting",
          subtitle: "Usability and Redesign of the Earlier App",
          description: "Usability evaluation and redesign of report creation, annotation comparison and targeted scanning for radiologists, including when readers want AI suggestions to appear.",
          year: "2025",
          image: "/images/isono/createreport4.png",
          tags: ["Medical Device UX", "Usability Testing", "Figma Prototyping"],
          hasDetailPage: true
        },
        {
          id: 8,
          title: "Customer Portal",
          subtitle: "Healthcare SaaS Platform",
          description: "End-to-end customer portal for iSono Health with order management, training modules with progress tracking, support ticketing and a dashboard for medical device customers.",
          year: "2025",
          image: "/images/isono/customerportal1.png",
          tags: ["Product Design", "SaaS", "AI Prototyping"],
          hasDetailPage: true
        },
        {
          id: 4,
          title: "Health Information Management",
          subtitle: "AI for Older Adults' Health",
          description: "Research with 65 older adults and a series of prototypes for managing health information at home, defining when users want AI to act for them, stay in control, or work alongside them.",
          year: "2024",
          image: "/images/older-adult.jpg",
          tags: ["Healthcare Design", "Accessibility", "Human-AI Collaboration"],
          hasDetailPage: true
        }
      ]
    },
    {
      id: 'innovation',
      title: 'Human-AI research',
      projects: [
        {
          id: 6,
          title: "Co-Creative Sketching Partner",
          subtitle: "Human-AI Collaboration",
          description: "AI-powered sketching tool that supports creative collaboration between designers and AI, helping them overcome creative blocks and iterate.",
          year: "2021",
          image: "/images/CSP.jpg",
          tags: ["AI Design", "Creative Tools", "Human-AI Collaboration"],
          hasDetailPage: true
        },
        {
          id: 5,
          title: "Textflow: Screenless Typing",
          subtitle: "Wearable Technology, Hands-free Interaction",
          description: "Research and design of a screenless navigation system using hand gestures and audio feedback for accessible smart device interaction.",
          year: "2023",
          image: "/images/textflow.jpg",
          tags: ["Accessibility", "Gesture Recognition", "Wearable"],
          hasDetailPage: true
        }
      ]
    }
  ];

  const handleCardClick = (project) => {
    if (project.hasDetailPage) {
      onProjectClick(project.id);
    }
  };

  const renderCard = (project, extraClass = '') => (
    <div
      key={project.id}
      className={`project-card ${extraClass} ${hoveredCard === project.id ? 'hovered' : ''} ${project.hasDetailPage ? 'clickable' : ''}`}
      onMouseEnter={() => setHoveredCard(project.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => handleCardClick(project)}
    >
      <div className="project-image-container">
        <div className="project-image">
          <img src={project.image} alt={project.title} className="project-img" />
        </div>
        <div className="project-overlay">
          <div className="project-links">
            <span className="project-link view-case-study">
              <Eye size={20} />
              <span>View Case Study</span>
            </span>
          </div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header">
          <div className="project-title-section">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <div className="project-year">{project.year}</div>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-arrow">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        /* Large Category Cards */
        .category-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .category-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 2px solid transparent;
        }

        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: var(--card-color);
        }

        .category-card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .category-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .category-card:hover .category-card-image img {
          transform: scale(1.05);
        }

        .category-card-image::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%);
        }

        .category-card-icon {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1;
        }

        .category-card-content {
          padding: 28px;
        }

        .category-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .category-card-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: var(--card-color);
          margin: 0 0 12px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .category-card-description {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .category-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .category-card-count {
          font-size: 14px;
          color: #999;
          font-weight: 500;
        }

        .category-card-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--card-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-card-arrow {
          transform: translateX(4px);
        }

        /* Projects View */
        .projects-view {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #f5f5f5;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #555;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 32px;
        }

        .back-button:hover {
          background: #e8e8e8;
          color: #333;
        }

        .projects-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 2px solid #f0f0f0;
        }

        .projects-header-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
        }

        .projects-header-text h3 {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .projects-header-text p {
          font-size: 15px;
          color: #666;
          margin: 0;
        }

        .filtered-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }

        /* Fix project card arrow positioning */
        .filtered-projects-grid .project-card .project-content {
          position: relative;
          padding-bottom: 50px;
        }

        .filtered-projects-grid .project-card .project-arrow {
          position: absolute;
          bottom: 20px;
          right: 20px;
        }

        .filtered-projects-grid .project-card .project-tags {
          margin-bottom: 0;
        }

        /* Center project card images properly */
        .filtered-projects-grid .project-card .project-image img {
          object-fit: cover;
          object-position: center center;
          width: 100%;
          height: 100%;
        }

        /* Ensure all project images are centered */
        .project-img {
          object-fit: cover !important;
          object-position: center center !important;
        }

        /* Force contact info styling */
        .portfolio-contact-override {
          background: rgba(224, 247, 255, 0.95) !important;
          padding: 12px 20px !important;
          border-radius: 8px !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          backdrop-filter: blur(10px) !important;
          margin-bottom: 20px !important;
        }

        .portfolio-contact-override *,
        .portfolio-contact-override span,
        .portfolio-contact-override a {
          color: #1a1a1a !important;
          font-weight: 500 !important;
          text-decoration: none !important;
        }

        .portfolio-contact-override a:hover {
          color: #0066cc !important;
          text-decoration: underline !important;
        }

        .portfolio-contact-override svg {
          color: #1a1a1a !important;
        }

        @media (max-width: 1024px) {
          .category-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .category-card {
            display: flex;
            flex-direction: row;
          }

          .category-card-image {
            width: 200px;
            height: auto;
            min-height: 180px;
          }

          .category-card-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .category-card {
            flex-direction: column;
          }

          .category-card-image {
            width: 100%;
            height: 160px;
          }

          .filtered-projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          /* Fix pink overlay on mobile */
          .filtered-projects-grid .project-card .project-overlay {
            display: none;
          }

          .filtered-projects-grid .project-card .project-image-container::after {
            display: none;
          }
        }
        .featured-project {
          margin-bottom: 64px;
        }

        .featured-project .project-card.featured-card {
          display: grid;
          grid-template-columns: 3fr 2fr;
          align-items: stretch;
        }

        .featured-project .featured-card .project-image-container,
        .featured-project .featured-card .project-image {
          height: 100%;
          min-height: 360px;
        }

        .featured-project .featured-card .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left center;
        }

        .featured-project .featured-card .project-title {
          font-size: 30px;
        }

        .work-group {
          margin-bottom: 56px;
        }

        .work-group-title {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 24px;
        }

        @media (max-width: 900px) {
          .featured-project .project-card.featured-card {
            grid-template-columns: 1fr;
          }
          .featured-project .featured-card .project-image-container,
          .featured-project .featured-card .project-image {
            min-height: 220px;
          }
          .featured-project .featured-card .project-title {
            font-size: 24px;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="header-main" style={{ 
              display: 'flex', 
              gap: '60px', 
              alignItems: 'flex-start',
              marginBottom: '40px'
            }}>
              <div className="profile-image" style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                border: '3px solid rgba(255, 255, 255, 0.3)'
              }}>
                <img 
                  src="/images/profile.jpg" 
                  alt="Pegah Karimi"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div className="header-text" style={{ flex: 1 }}>
                <h1 className="name">Pegah Karimi</h1>
                <p className="title" style={{ marginBottom: '10px' }}>Product Designer & Human Factors Researcher</p>
                <div 
                  className="contact-info portfolio-contact-override" 
                  style={{ 
                    display: 'flex', 
                    gap: '20px', 
                    alignItems: 'center',
                    fontSize: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} />
                    <span>{contactInfo.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Mail size={16} />
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Linkedin size={16} />
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="description" style={{ 
              maxWidth: '100%', 
              width: '100%', 
              lineHeight: '1.7', 
              fontSize: '20px',
              margin: '0'
            }}>
              I design and build clinical software, with a focus on how people work with AI in high-stakes care. At iSono Health, I lead UI/UX and human factors for ATUSA, an FDA-regulated 3D breast ultrasound system. I design the reading experience for radiologists and surgeons, build it as working software, and run the usability engineering behind its FDA submission. I hold a dual PhD in Human-Computer Interaction and in Computing and Information Systems, and my research on trust and human-AI collaboration in health is published at CHI, CSCW and IUI.
            </p>
          </div>
        </div>
      </header>

      {/* Work Section */}
      <section className="work-section">
        <div className="container">
          <h2 className="section-title">Selected Work</h2>
          <div className="featured-project">
            {renderCard(featuredProject, 'featured-card')}
          </div>
          {sections.map((section) => (
            <div key={section.id} className="work-group">
              <h3 className="work-group-title">{section.title}</h3>
              <div className="filtered-projects-grid">
                {section.projects.map((project) => renderCard(project))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Let's work together</h2>
            <p>I'm always interested in new opportunities and collaborations.</p>
            <div className="contact-links">
              <a href={`mailto:${contactInfo.email}`} className="contact-link">
                Get in touch
              </a>
              <button className="contact-link secondary" onClick={() => window.open(`/${contactInfo.resumeFile}`, '_blank')}>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
