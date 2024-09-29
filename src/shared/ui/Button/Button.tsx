import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...args }: ButtonProps) {
  return (
    <button {...args} className={styles.button}>
      {children}
    </button>
  );
}
