import styles from "./index.module.css";

export default function Color(props: { color: Hsla }): JSX.Element {
  return (
    <li
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
    </li>
  );
}
