import styles from "./Spinner.module.scss";

export function Spinner() {
  return (
    <div className={styles.spinner__wrapper}>
      <div className={styles.spinner} />
    </div>
  );
}
