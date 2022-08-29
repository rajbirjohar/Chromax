import Button from "../Button";
import Title from "../Title";
import styles from "./index.module.css";

export default function Examples() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.theme}>
        <h3 className={styles.lighttitle}>Light</h3>
        <div className={styles.buttonwrapper}>
          <Button />
          <Button type="ghost" />
          <Button type="link" />
          <Button type="outline" />
        </div>
        <Title />
      </div>
      <div className={`${styles.theme} ${styles.dark}`}>
        <h3>Dark</h3>
        <div className={styles.buttonwrapper}>
          <Button dark />
          <Button type="ghost" dark />
          <Button type="link" dark />
          <Button type="outline" />
        </div>
        <Title dark />
      </div>
    </div>
  );
}
