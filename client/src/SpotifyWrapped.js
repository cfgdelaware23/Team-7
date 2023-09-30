import React from 'react';
import PieChart from './components/pieChart';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { useState, useEffect } from 'react';
import {Typography,Button} from "@mui/material";
import './SpotifyWrapped.css';
import { useNavigate } from 'react-router-dom';

export default function SpotifyWrapped() {
  const navigate = useNavigate();
  const images = [require('./images/pieChart0.png'), require('./images/pieChart1.png'), require('./images/pieChart2.png'), require('./images/pieChart3.png')];
  const imageAnimationProps = {
    initial: { scale: 0 },
    animate: { rotate: 360, scale: 1 },
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 20,
    },
  };

  const imageFadeProps ={
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1,rotate: 360},
    transition: { duration: 10 }
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [props, setProps] = useState(imageAnimationProps);

  useEffect(() => {
      const intervalId = setInterval(() => {
        if(currentIndex < images.length-1){
              setProps(null)
              setProps(imageFadeProps)
              setCurrentIndex(currentIndex + 1);
        }
      }, 1000)
      
      return () => clearInterval(intervalId);
  }, [currentIndex])

  return (
    <div class="wrapperContainer">
      <div class="wrapperStyle">
      <Typography variant="h1" class="info">
        Your Cart's Nutritional Breakdown:
      </Typography>

        <motion.div {...props} class="imageContainerStyle">
          <img src={images[currentIndex]} alt="Pie Chart" class="imageHolder" width="650rem" />
        </motion.div>
    
    </div>
        <div class="singleButtonContainer">
        <Button variant="contained" class="continueButton" disableRipple onClick={()=>navigate("/FeedbackPage")}>Continue</Button>
      </div>
     </div>
  );
};

