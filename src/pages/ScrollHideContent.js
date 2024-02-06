import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function ScrollHideContent() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Paper
      elevation={3}
      style={{
        padding: '16px',
        transition: 'opacity 0.3s ease-in-out',
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? 'none' : 'auto',
        height:'600px'
      }}
    >
      <Typography variant="h5" component="h2">Scroll to hide content</Typography>
      <Typography variant="body1">This content will hide when you scroll down.</Typography>
    </Paper>
  );
}

export default ScrollHideContent;