import { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  iconColor?: string;
};

export const Delete: FC<IconProps> = ({ iconColor, className, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="M8.3 19h7.4c.067 0 .133-.034.2-.1.067-.067.1-.133.1-.2V9H8v9.7c0 .067.033.133.1.2s.133.1.2.1ZM5.625 6.3V4.8H8.6l1-1h4.8l1 1h2.975v1.5H5.625ZM8.3 20.5c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 6.5 18.7V7.5h11v11.2c0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525H8.3ZM8 19h8-8Z"
      fill={iconColor}
    />
  </svg>
);
