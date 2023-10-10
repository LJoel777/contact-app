import { ComponentProps, FC } from "react";
import { Add } from "./add";
import { BackArrow } from "./backArrow";
import { Call } from "./call";
import { Change } from "./change";
import { Delete } from "./delete";
import { Favorite } from "./favorite";
import { LightMode } from "./lightMode";
import { More } from "./more";
import { Mute } from "./mute";
import { Search } from "./search";
import { Settings } from "./settings";

export type IconType =
  | "add"
  | "backArrow"
  | "call"
  | "change"
  | "delete"
  | "favorite"
  | "lightMode"
  | "more"
  | "mute"
  | "search"
  | "settings";

export type IconProps = {
  type: IconType;
  iconColor?: string;
  width?: number;
  height?: number;
  className?: ComponentProps<"svg">["className"];
};

export const Icon: FC<IconProps> = ({ type, iconColor = "#fff", ...props }) => {
  switch (type) {
    case "add":
      return <Add iconColor={iconColor} {...props} />;
    case "backArrow":
      return <BackArrow iconColor={iconColor} {...props} />;
    case "call":
      return <Call iconColor={iconColor} {...props} />;
    case "change":
      return <Change iconColor={iconColor} {...props} />;
    case "delete":
      return <Delete iconColor={iconColor} {...props} />;
    case "favorite":
      return <Favorite iconColor={iconColor} {...props} />;
    case "more":
      return <More iconColor={iconColor} {...props} />;
    case "mute":
      return <Mute iconColor={iconColor} {...props} />;
    case "search":
      return <Search iconColor={iconColor} {...props} />;
    case "lightMode":
      return <LightMode iconColor={iconColor} {...props} />;
    case "settings":
      return <Settings iconColor={iconColor} {...props} />;
    default:
      return null;
  }
};
