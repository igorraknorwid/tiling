import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ValueWithAnimation: React.FC<{ value: number }> = ({ value }) => {
  return (
    <motion.div
      key={value} // Update the key when the value changes to trigger animation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      Value: {value}
    </motion.div>
  );
};

const CounterComponent: React.FC = () => {
  const [value, setValue] = useState(1);

  const handleButtonClick = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div>
      <ValueWithAnimation value={value} />
      <button onClick={handleButtonClick}>Increase</button>
    </div>
  );
};

export default CounterComponent;