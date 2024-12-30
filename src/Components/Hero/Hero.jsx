import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from '../../particles.json';
import { Box, Typography } from '@mui/material';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) return;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, [init]);

  return (
    <>
      <Box
        className='particles-container'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        {init && <Particles options={particlesOptions} />}
      </Box>
      <Box
        sx={{
          padding: {
            xs: '16px',
            sm: '24px',
            md: '32px',
            lg: '40px',
            xl: '48px',
          },
          color: '#FAFAFA',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Typography
          variant='h3'
          component='h1'
          sx={{
            fontSize: {
              xs: '1.8rem',
              sm: '2.5rem',
              md: '4rem',
            },
            marginBottom: '16px',
            fontWeight: 'bold',
            mt: '8%',
          }}
        >
          Hi, I'm Shubham Kumar
        </Typography>
        <Typography
          variant='h5'
          component='h3'
          sx={{
            fontSize: {
              xs: '1.4rem',
              sm: '1.8rem',
              md: '2.4rem',
            },
            marginBottom: '20px',
            color: '#E0E0E0',
            mt: '6%',
          }}
        >
          Web Developer
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: {
              xs: '0.9rem',
              sm: '1rem',
              md: '1.3rem',
              lg: '1.5rem',
              xl: '1.8rem',
            },
            marginBottom: '32px',
            lineHeight: '1.6',
          }}
        >
          In my work, I mostly design websites that are not only stylish and
          well-organized but also really easy to navigate. Possessing creative
          and solid experience in HTML, CSS, JavaScript, React, etc., I help
          create UI/UX/interface designs that fit the ideas perfectly. I am more
          concerned with the construction of applications that can fit a modern
          web platform and one that is dynamic enough to fit with the many types
          of devices in the market today. Merged with a fervor for improvement
          and satisfaction derived from solving problems, I strive to deploy
          solutions that create value and efficient processes customized
          according to a client’s requirements. When it comes to creating a new
          website from the ground up or refining existing applications that
          already exist, I enjoy the process of turning concepts into functional
          and effective online assets.
        </Typography>
      </Box>
    </>
  );
};

export default Hero;
