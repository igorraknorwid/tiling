import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Test: React.FC = () => {
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      // Trigger the animation by updating the state to true
      setAnimate(true);
    }, []);
  
    // Define the animation variants
    const animationVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <motion.div
        initial="hidden" // Set the initial animation state
        animate={animate ? 'visible' : 'hidden'} // Use the animate state to determine which variant to use
        variants={animationVariants}
        transition={{ duration: 0.5 }} // Set the animation duration
      >
        {/* Your content to animate */}
        <div>
          <h1>Hello, I am animating!</h1>
        </div>
      </motion.div>
    );
  };

  export default Test