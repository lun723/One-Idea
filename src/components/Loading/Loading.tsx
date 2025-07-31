import { motion } from 'framer-motion';
import { loadingAnimation, containerAnimation, spinnerAnimation } from './Loading.animations';
import { STYLES } from './Loading.styles';

const Loading = () => {
    return (
        <motion.div 
            className={STYLES.wrapper}
            {...loadingAnimation}
        >
            <motion.div
                className={STYLES.container}
                {...containerAnimation}
            >
                <motion.div 
                    className={STYLES.spinner}
                    {...spinnerAnimation}
                />
            </motion.div>
        </motion.div>
    );
};

export default Loading;