import styles from "./Input.module.scss";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  const { id, ...args } = props;
  return (
    <label className={styles.input__label} htmlFor={id}>
      <input {...args} className={styles.input} id={id} />
    </label>
  );
}
