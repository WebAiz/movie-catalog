import { ReactNode } from "react";
import { Header } from "../Header";
import styles from "./BaseLayout.module.scss";

type Props = {
  children: ReactNode;
};

export function BaseLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />
      <section className={styles.layout__content}>{children}</section>
    </div>
  );
}
