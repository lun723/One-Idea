import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypewriterText } from "../components/TypewriterText";

const skills = [
  "React.js", "Vite", "MUI", "Bootstrap", "Ant Design", "RWD響應式網頁設計", "SCSS/SASS", "Git", "Github", "GitLab", "API 串接", "AWS", "Node.js", "Canva"
];

const About: React.FC = () => {
  const [firstTextComplete, setFirstTextComplete] = useState(false);

  // Hero 區塊動畫
  const otherRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: otherRef,
    offset: ["start 90%", "start 60%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div className="min-h-screen flex items-center justify-center transition-all duration-1000 ease-out bg-gradient-to-br from-blue-100 to-purple-100 px-2 md:px-0">
      {/* Hero 區塊（永遠顯示） */}
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center text-center max-w-4xl mx-auto px-2 md:px-8 py-8 md:py-16 gap-6 md:gap-12 w-full">
          {/* 左側：個人簡介 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full"
          >
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900">
              <TypewriterText
                text="Hello, I'm Juila"
                speed={100}
                isActive={true}
                onComplete={() => setFirstTextComplete(true)}
              />
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-2 md:mb-4 text-gray-700">
              <TypewriterText
                text="A Front-end Engineer"
                delay={0}
                speed={100}
                isActive={firstTextComplete}
              />
            </h2>
          </motion.div>
          {/* 右側：學歷/聯絡方式/經歷，滑動到一定程度才顯示 */}
          <motion.div
            ref={otherRef}
            style={{ opacity, y }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-full px-2 md:px-6 py-4 md:py-8 w-full"
          >
            {/* 學歷 */}
            <div className="w-full max-w-full px-2 md:px-6 py-2 md:py-4">
              <h2 className="text-2xl md:text-3xl font-semibold mb-1 md:mb-2 text-gray-900">學歷</h2>
              <div>
                <span className="font-bold">南臺科技大學</span>
                <span className="ml-2 text-gray-700">資訊管理系</span>
              </div>
            </div>
            {/* 經歷 */}
            <div className="w-full max-w-full px-2 md:px-6 py-2 md:py-4">
              <h2 className="text-2xl md:text-3xl font-semibold mb-1 md:mb-2 text-gray-900">工作經歷</h2>
              <div className="mb-1 md:mb-2">
                <div className="flex items-center">
                  <span className="font-bold text-base md:text-lg">越世實業股份有限公司</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base">
                  <li>參與1項開發專案、4項維運及開發專案，具中大型專案經驗</li>
                  <li>與SA、SD討論UI/UX、API規格，開發專案畫面</li>
                  <li>使用React.js元件模組化、自訂功能函式、路由管理</li>
                  <li>導入Vite、MUI、Bootstrap，實現快速開發與一致性設計</li>
                  <li>前端專案部屬至AWS（S3、CloudFront）</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        {/* 技能列表區塊 */}
        <div className="w-full mb-4 md:mb-8 px-2 md:px-8 flex items-center justify-center py-3">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                className="bg-blue-200 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;