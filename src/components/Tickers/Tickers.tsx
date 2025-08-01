import type { TickersProps } from "./Tickers.types";
import { tickersVariants } from "./Tickers.animations";
import { STYLES } from './Tickers.styles';
import { motion } from "framer-motion";

const Tickers: React.FC<TickersProps> = ({ text, index }) => (
    <motion.span key={text} custom={index} variants={tickersVariants} initial="hidden" animate="visible" className={`${STYLES.tickers.base} ${STYLES.tickers.hover}`}>
        {text}
    </motion.span>
);

export default Tickers;