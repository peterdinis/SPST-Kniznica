import React from 'react';
import { motion } from 'framer-motion';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline">{error}</span>
    </motion.div>
  );
};

export default ErrorMessage;