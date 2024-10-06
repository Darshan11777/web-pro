// src/hooks/useAnimate.js

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Define some predefined animations
const predefinedAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, ease: 'easeInOut' },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: 'easeOut' },
  },
  slideInRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: 'easeOut' },
  },
  slideInUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: 'easeOut' },
  },
  zoomIn: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 1, ease: 'easeOut' },
  },

};

const useAnimate = (options = {}) => {
  const {
    triggerOnce = false,
    threshold = 0.1,
    animationType, // User can provide animationType here
    initial = { opacity: 0, x: -50 },
    animate = { opacity: 1, x: 0 },
    transition = { duration: 1, ease: 'easeOut' },
  } = options;

  // If the user specifies a predefined animation type, use that
  const selectedAnimation = animationType && predefinedAnimations[animationType]
    ? predefinedAnimations[animationType]
    : { initial, animate, transition };

  const [ref, inView] = useInView({ triggerOnce, threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(selectedAnimation.animate);
    } else {
      controls.start(selectedAnimation.initial);
    }
  }, [controls, inView, selectedAnimation]);

  return { ref, controls, initial: selectedAnimation.initial, animate: selectedAnimation.animate, transition: selectedAnimation.transition };
};

export default useAnimate;
