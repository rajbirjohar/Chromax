import { motion } from "framer-motion";
import styles from "./index.module.css";

const color = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Color(props: { color: Hsla }) {
  return (
    <motion.li
      key={props.color.l}
      variants={color}
      style={{
        border:
          props.color.l === 50
            ? `4px solid hsla(${props.color.h}, ${props.color.s}%, ${props.color.l}%, ${props.color.a})`
            : ``,
        padding: 4,
        borderRadius: `50%`,
      }}
    >
      <div
        className={styles.color}
        style={{
          backgroundColor: `hsla(${props.color.h}, ${props.color.s}%, ${props.color.l}%, ${props.color.a})`,
        }}
      />
    </motion.li>
  );
}
