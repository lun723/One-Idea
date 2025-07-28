import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterText } from "../components/TypewriterText";
import { Card } from "../components/Card";

const skills = [
  "React.js", "Vite", "MUI", "Bootstrap", "Ant Design", "RWD響應式網頁設計", "SCSS/SASS", "Git", "Github", "GitLab", "API 串接", "AWS", "Node.js", "Canva"
];

const About: React.FC = () => {
  const [firstTextComplete, setFirstTextComplete] = useState(false);
  const [secondTextComplete, setSecondTextComplete] = useState(false);
  const [thirdTextComplete, setThirdTextComplete] = useState(false);
  // State to manage card visibility
  const [cardVisibility, setCardVisibility] = useState({
    experience: false,
    skills: false,
  });
  // State to manage right side visibility
  const [isRightSideVisible, setIsRightSideVisible] = useState(false);

  // Function to toggle card visibility and right side visibility
  const toggleCard = (cardKey: keyof typeof cardVisibility) => {
    if (cardVisibility[cardKey]) {
      // If the same card is clicked, hide it and the right side
      setCardVisibility({
        experience: false,
        skills: false,
      });
      setIsRightSideVisible(false);
    } else {
      // Show the selected card and the right side
      setCardVisibility({
        experience: cardKey === "experience",
        skills: cardKey === "skills",
      });
      setIsRightSideVisible(true);
    }
  };

  // Animation variants for cards (fade only, no slide)
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  // Animation variants for skill tags (bookmark-like fade-in)
  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut", delay: idx * 0.05 },
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center transition-all duration-1000 ease-out bg-gradient-to-br from-blue-100 to-purple-100 px-2">
      {/* Hero 區塊 */}
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center text-center max-w-5xl mx-auto px-3 md:px-8 py-16 md:py-8 gap-2 md:gap-8 w-full">
          {/* 左側：個人簡介（永遠顯示） */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full px-2 md:px-6 py-10"
          >
            <h2 className="text-4xl font-bold mb-2 md:mb-4 text-gray-900">
              <TypewriterText
                text="Hello, I'm Juila"
                speed={100}
                isActive={true}
                onComplete={() => setFirstTextComplete(true)}
              />
            </h2>
            <h2 className="text-xl font-light mb-2 md:mb-4 text-gray-700">
              <TypewriterText
                text="A Front-end Engineer"
                delay={0}
                speed={100}
                isActive={firstTextComplete}
                onComplete={() => setSecondTextComplete(true)}
              />
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-2 md:mb-4 text-gray-700">
              <TypewriterText
                text=""
                delay={0}
                speed={100}
                isActive={secondTextComplete}
                onComplete={() => setThirdTextComplete(true)}
              />
            </h2>
            {/* 按鈕區 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: thirdTextComplete ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start"
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

          {/* 右側：經歷/技能（點擊按鈕後浮現） */}
          <AnimatePresence mode="wait">
            {isRightSideVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex-1 flex flex-col items-center max-w-full px-2 md:px-6 py-4 w-full"
              >
                <AnimatePresence mode="wait">
                  {/* 經歷卡片 */}
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
                          <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base text-start">
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

                  {/* 技能卡片 */}
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
                            <motion.span
                              key={idx}
                              custom={idx}
                              variants={skillVariants}
                              initial="hidden"
                              animate="visible"
                              className="font-bold mb-4 border-l-4 border-gray-500 px-3 py-2 bg-blue-100/30 shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-200"
                              whileHover={{
                                scale: 1.05,
                                zIndex: 10,
                                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                              }}
                            >
                              {skill}
                            </motion.span>
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