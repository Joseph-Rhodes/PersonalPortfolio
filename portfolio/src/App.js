import './App.css';
import AboutSection from './Components/Homepage/AboutSection';
import ProjectSection from './Components/Homepage/ProjectSection';
import ContactSection from './Components/Homepage/ContactSection';
import IntroSection from './Components/Homepage/IntroSection';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
