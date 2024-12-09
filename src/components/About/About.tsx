import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      description: 'With over 15 years of experience in engineering consultancy.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Engineer',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      description: 'Specializes in structural engineering and project management.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Consultant',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      description: 'Expert in mechanical engineering and sustainable design.'
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      description: 'Manages large-scale engineering projects across industries.'
    },
    {
      name: 'David Wilson',
      role: 'Technical Director',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      description: 'Oversees technical aspects of all major projects.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              At Sworaj Engineering Consultancy, we bring together expertise, innovation, 
              and dedication to deliver exceptional engineering solutions. With years of 
              experience in the industry, our team of skilled professionals is committed 
              to turning complex challenges into successful outcomes.
            </p>
            <p>
              Our mission is to provide cutting-edge engineering solutions while maintaining 
              the highest standards of quality and sustainability. We believe in building 
              lasting relationships with our clients through trust, transparency, and 
              consistent delivery of excellence.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
