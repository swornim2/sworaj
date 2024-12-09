import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('irrigation');

  const projectCategories = [
    {
      id: 'irrigation',
      title: 'Irrigation',
      projects: [
        {
          name: 'Bagmati Irrigation Project',
          description: 'Large-scale irrigation system covering 50,000 hectares',
          location: 'Bagmati Province',
          year: '2023',
          image: '/projects/irrigation1.jpg'
        },
        {
          name: 'Smart Drip System',
          description: 'Modern drip irrigation implementation for precision farming',
          location: 'Chitwan District',
          year: '2022',
          image: '/projects/irrigation2.jpg'
        }
      ]
    },
    {
      id: 'bridge',
      title: 'Bridges',
      projects: [
        {
          name: 'Suspension Bridge Project',
          description: 'Modern suspension bridge spanning 500 meters',
          location: 'Karnali Province',
          year: '2023',
          image: '/projects/bridge1.jpg'
        },
        {
          name: 'Highway Overpass',
          description: 'Multi-lane highway bridge with advanced safety features',
          location: 'Kathmandu Valley',
          year: '2022',
          image: '/projects/bridge2.jpg'
        }
      ]
    },
    {
      id: 'road',
      title: 'Roads',
      projects: [
        {
          name: 'Mountain Highway',
          description: 'Complex mountain terrain road construction',
          location: 'Gandaki Province',
          year: '2023',
          image: '/projects/road1.jpg'
        },
        {
          name: 'Urban Road Network',
          description: 'City-wide road infrastructure development',
          location: 'Pokhara Metropolitan',
          year: '2022',
          image: '/projects/road2.jpg'
        }
      ]
    },
    {
      id: 'hydro',
      title: 'Hydropower',
      projects: [
        {
          name: 'Mini Hydro Project',
          description: '5MW hydropower plant with minimal environmental impact',
          location: 'Lamjung District',
          year: '2023',
          image: '/projects/hydro1.jpg'
        },
        {
          name: 'Large Scale Hydro',
          description: '50MW hydropower facility with modern turbine technology',
          location: 'Mustang District',
          year: '2022',
          image: '/projects/hydro2.jpg'
        }
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Our Projects</h2>
        
        <div className="projects-tabs">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="projects-display">
          {projectCategories.map((category) => (
            <div
              key={category.id}
              className={`project-category ${activeTab === category.id ? 'active' : ''}`}
            >
              <div className="projects-grid">
                {category.projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project-info">
                      <h3>{project.name}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-details">
                        <span className="location">📍 {project.location}</span>
                        <span className="year">📅 {project.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
