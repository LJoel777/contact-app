import { ComponentProps, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type TextProps = PropsWithChildren & {
  type: "h1" | "h2" | "h3" | "body" | "message";
  className?: ComponentProps<"p" | "h1" | "h2" | "h3">["className"];
};

export const Text: FC<TextProps> = ({ children, type, className, ...props }) => {
  const baseClasses = {
    h1: "font-glysa text-[32px] leading-[48px]",
    h2: "font-glysa text-[24px] leading-[40px]",
    h3: "font-lexendDeca text-[16px] leading-[24px] tracking-[0.16px]",
    body: "font-lexendDeca text-[14px] leading-[20px] tracking-[0.16px]",
    message: "font-lexendDeca text-[12px] leading-[12px] tracking-[0.16px]",
  };

  const classesToApply = twMerge(baseClasses[type], className);

  switch (type) {
    case "h1":
      return (
        <h1 className={classesToApply} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classesToApply} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={classesToApply} {...props}>
          {children}
        </h3>
      );
    case "body":
    case "message":
    default:
      return (
        <p className={classesToApply} {...props}>
          {children}
        </p>
      );
  }
};
