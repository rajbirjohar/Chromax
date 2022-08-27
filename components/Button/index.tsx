import styles from "./index.module.css";

export default function Button(props: {
  color: Hsla;
  dark?: boolean;
}): JSX.Element {
  const foreground: Hsla = {
    h: props.color.h,
    s: props.color.s,
    l: 90,
    a: 1,
  };
  const background: Hsla = {
    h: props.color.h,
    s: props.color.s,
    l: 50,
    a: 1,
  };
  return (
    <button
      style={{
        backgroundColor: `hsla(${background.h}, ${background.s}%, ${background.l}%, ${background.a})`,
        color: `hsla(${foreground.h}, ${foreground.s}%, ${foreground.l}%, ${foreground.a})`,
      }}
      className={styles.button}
    >
      Button
    </button>
  );
}
