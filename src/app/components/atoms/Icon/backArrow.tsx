import { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  iconColor?: string;
};

export const BackArrow: FC<IconProps> = ({ iconColor, className, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="M12 19.625 4.375 12 12 4.375l1.075 1.075-5.825 5.8h12.375v1.5H7.25l5.825 5.8L12 19.625Z"
      fill={iconColor}
    />
  </svg>
);
