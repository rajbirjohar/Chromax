import usePrimaryRange from "@/hooks/usePrimaryRange";
import HslaRange from "@/components/ColorRange";
import useSecondaryRange from "@/hooks/useSecondaryRange";
import styles from "./index.module.css";
import useGrayScaleRange from "../../hooks/useGrayScaleRange";
import useComplementaryRange from "../../hooks/useComplementaryRange";

export default function AllHslaRanges(props: { color: Hsla }) {
  const primaryRange = usePrimaryRange({ color: props.color });
  const secondaryRange = useSecondaryRange({ color: props.color });
  const complementaryRange = useComplementaryRange({ color: props.color });
  const grayScaleRange = useGrayScaleRange({ color: props.color });

  return (
    <div className={styles.wrapper}>
      <HslaRange title="Primary" colorRange={primaryRange} />
      <HslaRange title="Secondary" colorRange={secondaryRange} />
      <HslaRange title="Complementary" colorRange={complementaryRange} />
      <HslaRange title="Gray Scale" colorRange={grayScaleRange} />
    </div>
  );
}
