import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from '../../particles.json';
import { Box } from '@mui/material';

const Hero = () => {
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
      <Box
        sx={{
          backgroundColor: 'transparent',
          padding: '16px',
          color: '#FAFAFA',
        }}
      >
        <h1>Hi, I'm Shubham Kumar</h1>
        <h3>Web Developer</h3>
        <p>
          Required an experienced Web Developer incumbent responsible for
          designing, creating and implementing effective Websites. Duties
          include, programming, improving website and application displays,
          resolving display glitches, and incorporating support services into
          back ends. Familiarity with HTML, CSS, JavaScript and scripting
          languages and frameworks is mandatory. Good problem solvers, good team
          players, good attention to detail are sources to achieving great user
          experiences.
        </p>
        <h3>Front-End Developer</h3>
        <p>
          Required a Front-End Developer interested in creating user-friendly
          layouts and guarantee the website’s suitable for various devices.
          Сhair should have ample knowledge about HTML, CSS, JavaScript
          languages, and usage of React or Angular. They involve conversion of
          the designs of the user interface and user experience into code as
          well as ensuring high web application performance in cooperation with
          other teams in order to develop easily navigable and aesthetically
          pleasing applications.
        </p>
      </Box>
    </>
  );
};

export default Hero;
