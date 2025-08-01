import { motion } from 'framer-motion';
import { loadingAnimation, containerAnimation, dotAnimation } from './Loading.animations';
import { STYLES } from './Loading.styles';

const Loading = () => {
    return (
        <motion.div className={STYLES.wrapper} initial="initial" animate="animate" exit="exit" variants={loadingAnimation}>
            <motion.div className={STYLES.container} initial="initial" animate="animate" exit="exit" variants={containerAnimation}>
                {[0, 1, 2].map((index) => (
                    <motion.div key={index} className={STYLES.dot} initial="initial" animate="animate" variants={dotAnimation} custom={index}/>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Loading;