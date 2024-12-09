import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'consulting',
      title: 'Engineering Consulting',
      description: 'Expert consulting services across various engineering domains',
      services: [
        'Feasibility Studies',
        'Technical Advisory',
        'Project Management',
        'Quality Assurance'
      ]
    },
    {
      id: 'dpr',
      title: 'Detailed Project Reports',
      description: 'Comprehensive DPR preparation for infrastructure projects',
      services: [
        'Project Planning & Scheduling',
        'Cost Estimation',
        'Technical Specifications',
        'Environmental Impact Assessment'
      ]
    },
    {
      id: 'surveys',
      title: 'Engineering Surveys',
      description: 'Professional surveying services using modern technology',
      services: [
        'Topographical Surveys',
        'Geological Surveys',
        'Hydrological Surveys',
        'Land Surveys'
      ]
    },
    {
      id: 'design',
      title: 'Engineering Design',
      description: 'Detailed engineering design services for various sectors',
      services: [
        'Structural Design',
        'Hydraulic Design',
        'Transportation Design',
        'Infrastructure Planning'
      ]
    },
    {
      id: 'design',
      title: 'Engineering Design',
      description: 'Detailed engineering design services for various sectors',
      services: [
        'Structural Design',
        'Hydraulic Design',
        'Transportation Design',
        'Infrastructure Planning'
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-list">
                <ul>
                  {service.services.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
