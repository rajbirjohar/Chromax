import { useColorContext } from "contexts/ColorContextProvider";
import styles from "./index.module.css";

export default function Title(props: { dark?: boolean }) {
  const context = useColorContext();
  const primaryDark: Hsla = context.range[8];
  const primary: Hsla = context.range[0];
  const fg = `hsla(${primary.h}, ${primary.s}%, ${primary.l}%, ${primary.a})`;
  const darkFg = `hsla(${primaryDark.h}, ${primaryDark.s}%, ${primaryDark.l}%, ${primaryDark.a})`;

  return (
    <div
      style={{
        color: `${props.dark ? darkFg : fg}`,
      }}
      className={styles.wrapper}
    >
      <h1>Title</h1>
      <h2>Subtitle</h2>
      <h3>Heading</h3>
      <h4>Subheading</h4>
      <h5>Small Subheading</h5>
      <h6>Super Small Subheading</h6>
      <p
        style={{
          color: `${props.dark ? "var(--gray-50)" : "var(--gray-900)"}`,
        }}
      >
        This is fun isn&#39;t it?
      </p>
    </div>
  );
}
