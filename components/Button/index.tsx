import styles from "./index.module.css";
import { useColorContext } from "../../contexts/ColorContextProvider";

export default function Button(props: { dark?: boolean }): JSX.Element {
  const context = useColorContext();

  const primary: Hsla = context.range[4];
  const text: Hsla = context.range[8];
  const primaryDark: Hsla = context.range[5];
  const textDark: Hsla = context.range[0];

  const bg = `hsla(${primary.h}, ${primary.s}%, ${primary.l}%, ${primary.a})`;
  const fg = `hsla(${text.h}, ${text.s}%, ${text.l}%, ${text.a})`;
  const darkBg = `hsla(${primaryDark.h}, ${primaryDark.s}%, ${primaryDark.l}%, ${primaryDark.a})`;
  const darkFg = `hsla(${textDark.h}, ${textDark.s}%, ${textDark.l}%, ${textDark.a})`;

  return (
    <button
      style={{
        backgroundColor: `${props.dark ? darkBg : bg}`,
        color: `${props.dark ? darkFg : fg}`,
      }}
      className={styles.button}
    >
      Button
    </button>
  );
}
