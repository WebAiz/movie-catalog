import { FC } from "react";
import cn from "classnames";

// data
import { IconMap } from "./data";

// types
import { IconProps } from "./types";

// styles
import styles from "./Icon.module.scss";

export const Icon: FC<IconProps> = ({ type, onClick, className, ...props }) => {
  return (
    <img
      className={cn(styles.icon, className)}
      src={IconMap[type]}
      onClick={onClick}
      {...props}
      alt="icon"
    />
  );
};
