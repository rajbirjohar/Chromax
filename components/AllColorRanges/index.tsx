import ColorRange from "@/components/ColorRange";
import styles from "./index.module.css";
import { motion, Variants } from "framer-motion";
import useCalculateColorRange from "@/hooks/useCalculateColorRange";

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
  const primaryRange = useCalculateColorRange({
    color: props.color,
    h: null,
    s: null,
    l: null,
  });
  const secondaryRange = useCalculateColorRange({
    color: props.color,
    h: props.color.h + 60 > 360 ? props.color.h + 60 - 360 : props.color.h + 60,
    s: null,
    l: null,
  });
  const complementaryRange = useCalculateColorRange({
    color: props.color,
    h:
      props.color.h + 180 > 360
        ? props.color.h + 180 - 360
        : props.color.h + 180,
    s: null,
    l: null,
  });
  const triadicRange = useCalculateColorRange({
    color: props.color,
    h:
      props.color.h + 120 > 360
        ? props.color.h + 120 - 360
        : props.color.h + 120,
    s: null,
    l: null,
  });
  const grayScaleRange = useCalculateColorRange({
    color: props.color,
    s: 0,
    h: null,
    l: null,
  });

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
