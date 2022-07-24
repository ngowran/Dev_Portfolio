import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/layout/navigation/navbar/navbar.jsx';
import FixedBottomNavigation from './components/layout/navigation/footer/footer.jsx';
import AboutSection from './components/layout/sections/about.jsx';
import ContactSection from './components/layout/sections/contact.jsx';
import ProjectSection from './components/layout/sections/projects.jsx';
import SkillSection from './components/layout/sections/skills.jsx';
import HeroSection from './components/layout/sections/hero.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


function App() {

  return (
    
    <React.Fragment>

      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /></head>

      <body>
      <ResponsiveAppBar> </ResponsiveAppBar>

      <main>
    
        <HeroSection/>

        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
          
        
      </main>
    
       <FixedBottomNavigation></FixedBottomNavigation>

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
      </body>
      </React.Fragment>
  );
 
}

export default App;