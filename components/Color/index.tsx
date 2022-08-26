import styles from "./index.module.css";

export default function Color(props: { hex: string }) {
  return <div>{props.hex}</div>;
}
