import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

export const TypewriterText: React.FC<{
  text: string;
  delay?: number;
  speed?: number;
  isActive: boolean;
  onComplete?: () => void;
}> = ({ text, delay, speed, isActive, onComplete }) => {
  const { displayedText, isTyping } = useTypewriter({ text, delay, speed, isActive, onComplete });

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.7 }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};