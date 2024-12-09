import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'projects'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 29;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(sectionId);
      }
    }
  };

  // Effect to handle scrolling when navigating back to home page
  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 29;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          setActiveSection(sectionId);
        }
      }, 100); // Small delay to ensure elements are mounted
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={() => handleNavigation('home')}>
          <img 
            src="/sworaj-high-resolution-logo-transparent.png" 
            alt="Sworaj Engineering Logo"
            className="logo-image"
          />
        </Link>
        
        <button 
          className="mobile-menu-button" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <button 
                onClick={() => handleNavigation('home')}
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('about')}
                className={activeSection === 'about' ? 'active' : ''}
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('services')}
                className={activeSection === 'services' ? 'active' : ''}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('projects')}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projects
              </button>
            </li>
            <li>
              <Link 
                to="/contact " 
                className={`contact-button ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
