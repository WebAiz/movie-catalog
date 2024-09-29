import { ReactNode } from "react";
import styles from "./Container.module.scss";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return <section className={styles.container}>{children}</section>;
}
