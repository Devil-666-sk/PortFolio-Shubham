import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import ResponsiveNavbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <div className='App'>
        {init && <Particles options={particlesOptions} />}
      </div>
      <ResponsiveNavbar />
      <Hero />
    </>
  );
}

export default App;
