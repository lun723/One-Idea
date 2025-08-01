import React from "react";
import { motion } from "framer-motion";
import { TypewriterText } from "../../components/TypewriterText";
import globalStyles from "../style/globalStyles";

const Error: React.FC = () => {

  return (
    <div className={globalStyles.pageContainer}>
      <div className={globalStyles.contentWrapper}>
        <div className={`${globalStyles.contentWrapper} flex items-center justify-center`}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full px-2 md:px-6 py-10 text-center">
            <h2 className="text-4xl font-bold m-6 text-gray-900">
              <TypewriterText text="找不到該畫面OAO！" speed={100} isActive={true}/>
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Error;