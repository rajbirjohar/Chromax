import usePrimaryRange from "@/hooks/usePrimaryRange";
import ColorRange from "@/components/ColorRange";
import useSecondaryRange from "@/hooks/useSecondaryRange";
import useGrayScaleRange from "@/hooks/useGrayScaleRange";
import useComplementaryRange from "@/hooks/useComplementaryRange";
import useTriadicRange from "@/hooks/useTriadicRange";
import styles from "./index.module.css";
import { motion, Variants } from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";
import Button from "../Button";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function AllColorRanges(props: { color: Hsla }): JSX.Element {
  const primaryRange = usePrimaryRange({ color: props.color });
  const secondaryRange = useSecondaryRange({ color: props.color });
  const complementaryRange = useComplementaryRange({ color: props.color });
  const grayScaleRange = useGrayScaleRange({ color: props.color });
  const triadicRange = useTriadicRange({ color: props.color });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.wrapper}
    >
      <motion.div variants={item}>
        <ColorRange title="Primary" colorRange={primaryRange} />
      </motion.div>
      <motion.div variants={item}>
        <ColorRange
          title="Secondary"
          colorRange={secondaryRange}
          key="secondary"
        />
      </motion.div>
      <motion.div variants={item}>
        <ColorRange
          title="Complementary"
          colorRange={complementaryRange}
          key="complementary"
        />
      </motion.div>
      <motion.div variants={item}>
        <ColorRange title="Triadic" colorRange={triadicRange} key="triadic" />
      </motion.div>
      <motion.div variants={item}>
        <ColorRange
          title="Gray Scale"
          colorRange={grayScaleRange}
          key="grayscale"
        />
      </motion.div>
    </motion.div>
  );
}
