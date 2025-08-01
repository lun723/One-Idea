import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tickers from "../../components/Tickers";
import Card from "../../components/Card";
import { Button } from "../../components/Button";
import { TypewriterText } from "../../components/TypewriterText";
import globalStyles from "../style/globalStyles";

const About: React.FC = () => {
  const [textCompletion, setTextCompletion] = useState({
    first: false,
    second: false,
    third: false,
  });
  const skills = [ "React.js", "Vite", "MUI", "Bootstrap", "Ant Design", "RWD響應式網頁設計", "SCSS/SASS", "Git", "Github", "GitLab", "API 串接", "AWS", "Node.js", "Canva" ];
  const [cardVisibility, setCardVisibility] = useState({ experience: false, skills: false });
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
    <div className={globalStyles.pageContainer}>
      <div className={`${globalStyles.contentWrapper} mt-6`}>
        <div className={`${globalStyles.contentWrapper} flex flex-col md:flex-row items-center justify-center`}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full md:w-3/7 px-2 md:px-6 py-10">
            <h2 className="text-2xl font-light m-8 text-gray-700">
              <TypewriterText text="點選觀看我的" speed={100} isActive={true} onComplete={() => handleTextComplete("first")}/>
            </h2>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: textCompletion.first ? 1 : 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className={globalStyles.buttonContainer}>
              <Button label={"經歷"} onClick={() => toggleCard("experience")}/>
              <Button label={"技能"} onClick={() => toggleCard("skills")} />
            </motion.div>
          </motion.div>
          <AnimatePresence mode="wait">
            {isRightSideVisible && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="w-full md:w-4/7 px-2 md:px-6 py-4">
                <AnimatePresence mode="wait">
                  {cardVisibility.experience && (
                    <Card title="經歷">
                      <div className="font-bold mb-4 px-3 py-2 text-start">
                        <div className="font-bold mb-2 text-lg py-2">越世實業股份有限公司</div>
                        <ul className="list-disc list-outside ml-8 text-gray-600 text-sm space-y-2">
                          <li>參與1項開發專案、4項維運及開發專案，具中大型專案經驗</li>
                          <li>與SA、SD討論UI/UX、API規格，開發專案畫面</li>
                          <li>使用React.js元件模組化、自訂功能函式、路由管理</li>
                          <li>導入Vite、MUI、Bootstrap，實現快速開發與一致性設計</li>
                          <li>前端專案部屬至AWS（S3、CloudFront）</li>
                        </ul>
                      </div>
                    </Card>
                  )}
                  {cardVisibility.skills && (
                    <Card title="技能">
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {skills.map((skill, idx) => (
                          <Tickers key={skill} text={skill} index={idx} />
                        ))}
                      </div>
                    </Card>
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