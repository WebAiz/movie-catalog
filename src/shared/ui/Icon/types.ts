import { HTMLAttributes, MouseEvent } from "react";
import { IconMap } from "./data";

export type IconType = keyof typeof IconMap;

export interface IconProps extends HTMLAttributes<HTMLImageElement> {
  type: IconType;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
  className?: string;
}
