import styles from "./index.module.css";
import toast from "react-hot-toast";

export default function Color(props: { color: Hsla }): JSX.Element {
  return (
    <li
      role="button"
      style={{
        border:
          props.color.l === 50
            ? `4px solid hsla(${props.color.h}, ${props.color.s}%, ${props.color.l}%, ${props.color.a})`
            : ``,
        padding: 4,
        borderRadius: `50%`,
        transition: `border 150ms ease-in-out`,
      }}
      onClick={() => {
        navigator.clipboard.writeText(
          `hsla(${props.color.h}, ${props.color.s}%, ${props.color.l}%, ${props.color.a})`
        );
        toast.success(
          `Copied color hsla(${props.color.h}, ${props.color.s}%, ${props.color.l}%, ${props.color.a})`
        );
      }}
    >
      <div
        className={styles.color}
        style={{
          backgroundColor: `hsla(${props.color.h}, ${props.color.s}%, ${props.color.l}%, ${props.color.a})`,
        }}
      >
        {props.color.l === 50 && props.color.h}
      </div>
    </li>
  );
}
