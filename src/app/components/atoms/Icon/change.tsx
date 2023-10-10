import { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  iconColor?: string;
};

export const Change: FC<IconProps> = ({ iconColor, className, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="m15.65 5-3.675 3.65-1.05-1.05 1.85-1.85H12c-1.733 0-3.208.612-4.425 1.837C6.358 8.812 5.75 10.3 5.75 12.05c0 .417.046.83.138 1.237A6.1 6.1 0 0 0 6.3 14.5l-1.125 1.125a8.188 8.188 0 0 1-.687-1.75 7.109 7.109 0 0 1-.238-1.825c0-2.167.754-4.008 2.263-5.525C8.021 5.008 9.85 4.25 12 4.25h.775l-1.85-1.85 1.05-1.05L15.65 5Zm-7.3 14 3.675-3.65 1.05 1.05-1.85 1.85H12c1.733 0 3.208-.612 4.425-1.837 1.217-1.225 1.825-2.713 1.825-4.463 0-.417-.046-.83-.137-1.238A6.156 6.156 0 0 0 17.7 9.5l1.125-1.125c.3.567.53 1.15.688 1.75.158.6.237 1.208.237 1.825 0 2.167-.754 4.008-2.262 5.525C15.979 18.992 14.15 19.75 12 19.75h-.775l1.85 1.85-1.05 1.05L8.35 19Z"
      fill={iconColor}
    />
  </svg>
);