import dynamic from "next/dynamic";
import Color from "@/components/Color";
import styles from "./index.module.css";

function ColorRange(props: {
  title: string;
  colorRange: Hsla[] | null;
}): JSX.Element {
  if (props.colorRange === null) {
    return <p>Painting new colors...</p>;
  }
  return (
    <div className={styles.wrapper}>
      <h2>{props.title}</h2>
      <ul className={styles.colorwrapper}>
        {props.colorRange.map((color: Hsla) => (
          <Color color={color} key={color.l} />
        ))}
        <div className={styles.spacer} />
      </ul>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ColorRange), { ssr: false });
