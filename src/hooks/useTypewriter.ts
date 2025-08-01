import { useState, useEffect } from "react";

export const useTypewriter = ({
  text,
  delay = 0,
  speed = 100,
  isActive = true,
  onComplete,
}: {
  text: string;
  delay?: number;
  speed?: number;
  isActive?: boolean;
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev < text.length) {
            setDisplayedText(text.slice(0, prev + 1));
            return prev + 1;
          } else {
            clearInterval(interval);
            if (onComplete) onComplete();
            return prev;
          }
        });
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isActive, text, delay, speed]);

  return { displayedText, isTyping: isActive && index < text.length };
};