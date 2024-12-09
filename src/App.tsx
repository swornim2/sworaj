import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HeroCarousel from "./components/Carousel/HeroCarousel";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={
          <MainLayout>
            <div className="app">
              <HeroCarousel />
              <About />
              <Services />
              <Projects />
            </div>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
