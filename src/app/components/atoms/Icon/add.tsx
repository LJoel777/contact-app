import { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  iconColor?: string;
};

export const Add: FC<IconProps> = ({ iconColor, className, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M11.25 18.75v-6h-6v-1.5h6v-6h1.5v6h6v1.5h-6v6h-1.5Z" fill={iconColor} />
  </svg>
);
