import { ComponentProps, FC, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "../Text";

type TextFieldProps = ComponentProps<"input"> & {
  label: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, label, ...props }, ref) => {
    const inputClassName = twMerge([
      "bg-black-80 border-black-60 border-[1px] rounded-lg px-3 py-2 text-white-100 leading-[17.5px] text-[14px] max-w-[390px] w-full font-lexendDeca focus:outline-none focus:border-black-10 focus:bg-black-60 hover:border-black-30 placeholder:text-white-32",
      className,
    ]);

    return (
      <div>
        <Text type="message" className="text-white-56 mb-1">
          {label}
        </Text>
        <input ref={ref} className={inputClassName} {...props} />
      </div>
    );
  }
);
