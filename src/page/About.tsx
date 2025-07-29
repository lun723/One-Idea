import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterText } from "../components/TypewriterText";
import { Card } from "../components/Card";
import Tickers from "../components/Tickers";

const skills = [
  "React.js", "Vite", "MUI", "Bootstrap", "Ant Design", "RWD響應式網頁設計",
  "SCSS/SASS", "Git", "Github", "GitLab", "API 串接", "AWS", "Node.js", "Canva"
];

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } },
};

const About: React.FC = () => {
  const [textCompletion, setTextCompletion] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [cardVisibility, setCardVisibility] = useState({
    experience: false,
    skills: false,
  });
  const [isRightSideVisible, setIsRightSideVisible] = useState(false);

  const toggleCard = useCallback((cardKey: keyof typeof cardVisibility) => {
    setCardVisibility((prev) => {
      const isSameCard = prev[cardKey];
      return {
        experience: cardKey === "experience" && !isSameCard,
        skills: cardKey === "skills" && !isSameCard,
      };
    });
    setIsRightSideVisible((prev) => !prev || !cardVisibility[cardKey]);
  }, [cardVisibility]);

  const handleTextComplete = useCallback((stage: keyof typeof textCompletion) => {
    setTextCompletion((prev) => ({ ...prev, [stage]: true }));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-2 transition-all duration-1000 ease-out">
      <div className="w-full bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="flex flex-col md:flex-row items-center justify-center text-center max-w-5xl mx-auto px-3 md:px-8 py-16 gap-2 md:gap-12">
          {/* Left Side: Profile Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-2/5 px-2 md:px-6 py-10"
          >
            <h2 className="text-4xl font-bold mb-2 md:mb-4 text-gray-900">
              <TypewriterText
                text="Hello, I'm Juila"
                speed={100}
                isActive={true}
                onComplete={() => handleTextComplete("first")}
              />
            </h2>
            <h2 className="text-xl font-light mb-2 md:mb-4 text-gray-700">
              <TypewriterText
                text="A Front-end Engineer"
                speed={100}
                isActive={textCompletion.first}
                onComplete={() => handleTextComplete("second")}
              />
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-2 md:mb-4 text-gray-700">
              <TypewriterText
                text=""
                speed={100}
                isActive={textCompletion.second}
                onComplete={() => handleTextComplete("third")}
              />
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: textCompletion.third ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-4 justify-center md:justify-start"
            >
              <button
                onClick={() => toggleCard("experience")}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                {cardVisibility.experience ? "Hide Experience" : "Show Experience"}
              </button>
              <button
                onClick={() => toggleCard("skills")}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                {cardVisibility.skills ? "Hide Skill" : "Show Skill"}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Experience/Skills */}
          <AnimatePresence mode="wait">
            {isRightSideVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full md:w-3/5 px-2 md:px-6 py-4"
              >
                <AnimatePresence mode="wait">
                  {cardVisibility.experience && (
                    <motion.div
                      key="experience"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Card title="Experience">
                        <div className="font-bold mb-4 border-gray-500 px-3 py-2 bg-blue-100/30 shadow-md text-start">
                          <div className="font-bold text-lg py-2">越世實業股份有限公司</div>
                          <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base">
                            <li>參與1項開發專案、4項維運及開發專案，具中大型專案經驗</li>
                            <li>與SA、SD討論UI/UX、API規格，開發專案畫面</li>
                            <li>使用React.js元件模組化、自訂功能函式、路由管理</li>
                            <li>導入Vite、MUI、Bootstrap，實現快速開發與一致性設計</li>
                            <li>前端專案部屬至AWS（S3、CloudFront）</li>
                          </ul>
                        </div>
                      </Card>
                    </motion.div>
                  )}
                  {cardVisibility.skills && (
                    <motion.div
                      key="skills"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Card title="Skills">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {skills.map((skill, idx) => (
                            <Tickers key={skill} text={skill} index={idx} /> 
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default About;