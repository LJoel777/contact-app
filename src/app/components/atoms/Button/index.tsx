import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { Icon, IconType } from "../Icon";

type ButtonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary" | "special";
  icon?: IconType;
};

const commonStyle =
  "flex flex-row justify-center items-center gap-[8px] rounded-[8px] text-white-100 font-lexendDeca text-[14px] active:outline-none focus:outline-none";

const buttonStyle = {
  primary: "bg-black-60 hover:bg-black-50 active:bg-black-40",
  secondary: "bg-black-100 hover:bg-black-90 active:bg-black-80",
  special:
    "rounded-full bg-gradient-to-b from-[#282828B2] to-[#282828] hover:from-[#282828B2] hover:to-[#282828] active:from-[#282828B2] active:to-[#282828]",
};

const paddingStyle = {
  icon: "p-[8px]",
  text: "py-[8px] px-[16px]",
  iconAndText: "pl-[8px] pr-[12px] py-[8px]",
};

// needs some work

export const SpecialButton: FC<ButtonProps> = ({ children, className, icon, ...props }) => (
  <button
    className="bg-gradient-to-b from-[#3C3C3C] to-[#3C3C3C00] p-[1px] rounded-full"
    {...props}
  >
    <div className={className}>
      {icon && <Icon type={icon} />}
      {children}
    </div>
  </button>
);

export const Button: FC<ButtonProps> = ({ children, variant, className, icon, ...props }) => {
  let padding = "";

  if (icon && !children) {
    padding = paddingStyle.icon;
  } else if (!icon && children) {
    padding = paddingStyle.text;
  } else if (icon && children) {
    padding = paddingStyle.iconAndText;
  }

  const mergedClassName = twMerge([commonStyle, padding, buttonStyle[variant], className]);

  return variant === "special" ? (
    <SpecialButton className={mergedClassName} variant={variant} icon={icon} {...props}>
      {children}
    </SpecialButton>
  ) : (
    <button className={mergedClassName} {...props}>
      {icon && <Icon type={icon} />}
      {children}
    </button>
  );
};
