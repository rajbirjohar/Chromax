import styles from "./index.module.css";
import { useColorContext } from "../../contexts/ColorContextProvider";

export default function Button(props: {
  dark?: boolean;
  type?: "ghost" | "link" | "outline";
}): JSX.Element {
  const context = useColorContext();

  const color: Hsla = context.color;

  const bg: Hsla = context.light.five;
  const fg: Hsla = context.light.one;
  const darkBg: Hsla = context.dark.five;
  const darkFg: Hsla = context.dark.eight;

  const buttonBg = `hsla(${bg.h}, ${bg.s}%, ${bg.l}%, ${bg.a})`;
  const buttonBorder = `hsla(${bg.h}, ${bg.s}%, ${bg.l}%, ${bg.a})`;
  const buttonText = `hsla(${fg.h}, ${fg.s}%, ${fg.l}%, ${fg.a})`;
  const darkButtonBg = `hsla(${darkBg.h}, ${darkBg.s}%, ${darkBg.l}%, ${darkBg.a})`;
  const darkButtonBorder = `hsla(${darkBg.h}, ${darkBg.s}%, ${darkBg.l}%, ${darkBg.a})`;
  const darkButtonText = `hsla(${darkFg.h}, ${darkFg.s}%, ${darkFg.l}%, ${darkFg.a})`;

  if (props.type === "ghost") {
    return (
      <button
        style={{
          backgroundColor: props.dark ? buttonText : darkButtonText,
          color: props.dark ? darkButtonText : buttonText,
        }}
        className={styles.button}
      >
        Button
      </button>
    );
  }

  if (props.type === "link") {
    return (
      <button
        style={{
          color: props.dark ? darkButtonText : buttonText,
          backgroundColor: "transparent",
        }}
        className={styles.button}
      >
        Button
      </button>
    );
  }

  if (props.type === "outline") {
    return (
      <button
        style={{
          border: `2px solid ${props.dark ? darkButtonBorder : buttonBorder}`,
          color: props.dark ? darkButtonBorder : buttonBorder,
          backgroundColor: "transparent",
        }}
        className={styles.button}
      >
        Button
      </button>
    );
  }

  return (
    <button
      style={{
        backgroundColor: props.dark ? darkButtonBg : buttonBg,
        color:
          (color.h >= 50 && color.h <= 190 && color.a > 0.5) || color.h >= 400
            ? buttonText
            : darkButtonText,
      }}
      className={styles.button}
    >
      Button
    </button>
  );
}
