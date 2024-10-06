import React from 'react';
import { motion } from 'framer-motion';

const CardStack = () => {
  const cardVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: (index) => (index - 1) * 100,
    },
  };

  const stickyCardVariants = {
    initial: {
      position: 'relative',
      top: 0,
    },
    animate: {
      position: 'fixed',
      top: 0,
    },
  };

  return (
    <div>
      <motion.div
        variants={stickyCardVariants}
        initial="initial"
        animate="animate"
      >
        Card 1
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        Card 2
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        Card 3
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        Card 4
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        Card 5
      </motion.div>
    </div>
  );
};

export default CardStack;