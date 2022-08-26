import styles from "./index.module.css";

export default function ColorRange(props: { title: string }) {
  return (
    <>
      <h2>{props.title}</h2>
      <ul></ul>
    </>
  );
}
