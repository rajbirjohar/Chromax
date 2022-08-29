import Button from "../Button";
import Title from "../Title";
import styles from "./index.module.css";

export default function Examples() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.theme}>
        <h3 className={styles.lighttitle}>Light</h3>
        <Button />
        <Title />
      </div>
      <div className={`${styles.theme} ${styles.dark}`}>
        <h3>Dark</h3>
        <Button dark />
        <Title dark />
      </div>
    </div>
  );
}
