// TODO: Implementovať neskôr pri chybe v applikácií

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ErrorAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleBadAction = () => {
    setShowAnimation(true);
  };

  return (
    <div>
      <button onClick={handleBadAction}>Do Bad Action</button>

      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: 'red', width: 200, height: 200 }}
          >
            <h2>Bad Action Detected!</h2>
            <p>This is a warning animation.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ErrorAnimation;