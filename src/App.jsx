import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/layout/navigation/navbar/navbar.jsx';
import FixedBottomNavigation from './components/layout/navigation/footer/footer.jsx';
import AboutSection from './components/layout/sections/about.jsx';
import ContactSection from './components/layout/sections/contact.jsx';
import ProjectSection from './components/layout/sections/projects.jsx';
import SkillSection from './components/layout/sections/skills.jsx';
import HeroSection from './components/layout/sections/hero.jsx';

function App() {

  return (
    <React.Fragment>
      
      <ResponsiveAppBar> </ResponsiveAppBar>

      <main>
        <HeroSection/>
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        
      </main>
    
       <FixedBottomNavigation></FixedBottomNavigation>
      </React.Fragment>
  );
 
}

export default App;