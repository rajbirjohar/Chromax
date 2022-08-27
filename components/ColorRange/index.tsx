import dynamic from "next/dynamic";
import Color from "@/components/Color";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const wrapper = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delay: 1,
  },
};

const colorRange = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

function ColorRange(props: { title: string; colorRange: Hsla[] | null }) {
  if (props.colorRange === null) {
    return <p>Painting new colors...</p>;
  }
  return (
    <motion.div
      variants={wrapper}
      initial="hidden"
      animate="show"
      className={styles.wrapper}
    >
      <h2>{props.title}</h2>
      <motion.ul
        variants={colorRange}
        initial="hidden"
        animate="show"
        className={styles.colorwrapper}
      >
        {props.colorRange.map((color: Hsla) => (
          <Color key={color.l} color={color} />
        ))}
        <div className={styles.spacer} />
      </motion.ul>
    </motion.div>
  );
}

export default dynamic(() => Promise.resolve(ColorRange), { ssr: false });
