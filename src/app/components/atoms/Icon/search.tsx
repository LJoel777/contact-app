import { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  iconColor?: string;
};

export const Search: FC<IconProps> = ({ iconColor, className, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="m19.55 20.575-6.3-6.275c-.5.417-1.075.742-1.725.975-.65.233-1.317.35-2 .35-1.717 0-3.167-.592-4.35-1.775C3.992 12.667 3.4 11.217 3.4 9.5c0-1.7.592-3.146 1.775-4.338 1.183-1.191 2.633-1.787 4.35-1.787 1.7 0 3.142.592 4.325 1.775 1.183 1.183 1.775 2.633 1.775 4.35 0 .717-.117 1.4-.35 2.05a5.612 5.612 0 0 1-.95 1.7l6.275 6.275-1.05 1.05Zm-10.025-6.45c1.283 0 2.37-.45 3.263-1.35.891-.9 1.337-1.992 1.337-3.275s-.446-2.375-1.337-3.275c-.892-.9-1.98-1.35-3.263-1.35-1.3 0-2.396.45-3.287 1.35C5.346 7.125 4.9 8.217 4.9 9.5s.446 2.375 1.338 3.275c.891.9 1.987 1.35 3.287 1.35Z"
      fill={iconColor}
    />
  </svg>
);
