import { useState, useEffect } from 'react';
import './HeroCarousel.css';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Construction Excellence",
    description: "Building the future with precision and innovation",
    image: "construction.jpeg"
  },
  {
    id: 2,
    title: "Expert Engineering Team",
    description: "Experienced professionals dedicated to your success",
    image: "engineers.jpeg"
  },
  {
    id: 3,
    title: "Innovative Design Solutions",
    description: "Creating sustainable and efficient engineering designs",
    image: "Designer.jpeg"
  },
  {
    id: 4,
    title: "Advanced Design Technology",
    description: "Utilizing cutting-edge tools for optimal results",
    image: "Designer2.jpeg"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div id="home" className="hero-carousel">
      <div className="slides-track">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            <div 
              className="slide-image" 
              style={{ backgroundImage: `url(/${slide.image})` }}
              role="img" 
              aria-label={slide.title}
            />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="cta-button">Explore Our Services</button>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="carousel-control prev" 
        onClick={prevSlide} 
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <span>❮</span>
      </button>
      <button 
        className="carousel-control next" 
        onClick={nextSlide} 
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <span>❯</span>
      </button>
      
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
