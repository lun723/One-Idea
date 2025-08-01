import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TypewriterText } from "../../components/TypewriterText";
import { Button } from "../../components/Button";
import globalStyles from "../style/globalStyles";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [textCompletion, setTextCompletion] = useState({
    first: false,
    second: false,
    third: false,
  });
  
  const handleTextComplete = useCallback((stage: keyof typeof textCompletion) => {
    setTextCompletion((prev) => ({ ...prev, [stage]: true }));
  }, []);

  return (
    <div className={globalStyles.pageContainer}>
      <div className={globalStyles.contentWrapper}>
        <div className={`${globalStyles.contentWrapper} flex items-center justify-center`}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full px-2 md:px-6 py-10 text-center">
            <h2 className="text-4xl font-bold m-6 text-gray-900">
              <TypewriterText text="Hello, I'm Juila" speed={100} isActive={true} onComplete={() => handleTextComplete("first")}/>
            </h2>
            <h2 className="text-xl font-light m-4 text-gray-700">
              <TypewriterText text="A Front-end Engineer" speed={100} isActive={textCompletion.first} onComplete={() => handleTextComplete("second")}/>
            </h2>
            <h2 className="grid md:flex text-lg sm:text-xl gap-2 md:text-2xl font-light m-8 text-gray-700 items-center justify-center">
              <TypewriterText text="想知道更多有關我的經歷和技能嗎？" speed={200} isActive={textCompletion.second} onComplete={() => handleTextComplete("third")}/>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: textCompletion.third ? 1 : 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className={globalStyles.buttonContainer}>
                <Button onClick={() => navigate("/About")} label={<>去看看<i className="fas fa-arrow-right-long ml-2"></i></>}/>
              </motion.div>
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;