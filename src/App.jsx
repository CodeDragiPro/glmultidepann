import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionComponent from './components/MissionComponent';
import PriceSection from './components/PriceSection';
import Stories from './components/Stories';
import Contact from './components/Contact';


function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <MissionComponent />
      <PriceSection />
      <Stories/>
      <Contact/>
  
       
     
    </div>
  );
}

export default App;
