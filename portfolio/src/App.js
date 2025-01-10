import './App.css';
import AboutSection from './Components/Homepage/AboutSection';
import ProjectSection from './Components/Homepage/ProjectSection';
import ContactSection from './Components/Homepage/ContactSection';
import IntroSection from './Components/Homepage/IntroSection';
import Passions from './Components/Homepage/PassionSection';

function App() {
  return (
    <div className="App">
      {/* Add IDs to sections for smooth scrolling */}
      <div id="intro">
        <IntroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="activities">
        <Passions />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
