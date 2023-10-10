import { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  iconColor?: string;
};

export const Settings: FC<IconProps> = ({ iconColor, className, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="m9.7 21.5-.4-3.05a3.694 3.694 0 0 1-.812-.375 7.632 7.632 0 0 1-.763-.525L4.9 18.75l-2.3-4 2.45-1.85c-.033-.15-.054-.3-.062-.45a7.797 7.797 0 0 1 0-.875c.008-.15.029-.308.062-.475L2.6 9.25l2.3-3.975L7.725 6.45a6.34 6.34 0 0 1 1.575-.9l.4-3.05h4.6l.4 3.05c.3.117.57.246.812.387.242.142.488.313.738.513l2.85-1.175 2.3 3.975-2.475 1.875c.033.167.05.317.05.45V12c0 .133-.004.27-.013.412a4.04 4.04 0 0 1-.062.488l2.45 1.85-2.3 4-2.8-1.2c-.25.2-.504.375-.762.525-.259.15-.521.275-.788.375l-.4 3.05H9.7ZM12 15c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 15 12c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 9c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 12c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 12 15Zm0-1.5c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0 1 10.5 12c0-.417.146-.77.438-1.062A1.444 1.444 0 0 1 12 10.5c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062 0 .417-.146.77-.438 1.062A1.444 1.444 0 0 1 12 13.5ZM11 20h1.975l.35-2.675a5.256 5.256 0 0 0 1.4-.575c.417-.25.825-.567 1.225-.95l2.475 1.05 1-1.7-2.175-1.625c.083-.267.138-.525.163-.775a7.623 7.623 0 0 0 0-1.512 3.476 3.476 0 0 0-.163-.738l2.175-1.65-.975-1.7-2.525 1.05a5.507 5.507 0 0 0-1.2-.938 5.295 5.295 0 0 0-1.4-.587L13 4h-1.975l-.35 2.675c-.5.117-.967.3-1.4.55-.433.25-.85.567-1.25.95L5.55 7.15l-.975 1.7 2.15 1.6c-.083.25-.142.5-.175.75s-.05.517-.05.8c0 .267.017.525.05.775s.092.5.175.75l-2.15 1.625.975 1.7 2.475-1.05c.383.383.792.7 1.225.95.433.25.908.442 1.425.575L11 20Z"
      fill={iconColor}
    />
  </svg>
);
