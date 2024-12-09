import { useState, useEffect } from 'react';
import { initScrollAnimation } from '../../utils/scrollAnimation';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Form submitted:', formData);
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    }
  };

  useEffect(() => {
    const cleanup = initScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-title animate-on-scroll">Get in Touch</h1>
          <p className="hero-subtitle animate-on-scroll">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card animate-on-scroll">
                <div className="info-icon">
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="form-map-section">
        <div className="container">
          <div className="form-map-grid">
            <div className="form-wrapper animate-on-scroll">
              <h2>Send Us a Message</h2>
              {formStatus.message && (
                <div className={`form-alert ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Discussion">Project Discussion</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Career">Career</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Your message"
                    rows={5}
                  />
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
            <div className="map-wrapper animate-on-scroll">
              <h2>Our Location</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2414121776396!2d85.31895937538726!3d27.711594876178036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19016c574aa7%3A0x3c8e7e4c5a8d2b7d!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1709999999999!5m2!1sen!2snp"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item animate-on-scroll">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const contactInfo = [
  {
    title: "Visit Us",
    content: "Kathmandu, Nepal",
    icon: <MapPin className="icon" />
  },
  {
    title: "Call Us",
    content: "+977 1234567890",
    icon: <Phone className="icon" />
  },
  {
    title: "Email Us",
    content: "contact@company.com",
    icon: <Mail className="icon" />
  },
  {
    title: "Message Us",
    content: "Send us a message anytime!",
    icon: <MessageSquare className="icon" />
  }
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of engineering services including design, consulting, project management, and quality assurance. Our team specializes in both industrial and commercial projects."
  },
  {
    question: "How can I request a quote?",
    answer: "You can request a quote by filling out our contact form above, calling us directly, or sending us an email. We'll get back to you within 24 hours to discuss your project requirements."
  },
  {
    question: "Do you work internationally?",
    answer: "Yes, we work with clients globally. Our team has experience in managing international projects and can accommodate different time zones and requirements."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. During our initial consultation, we'll provide you with a detailed project timeline and milestones."
  }
];

export default Contact;
