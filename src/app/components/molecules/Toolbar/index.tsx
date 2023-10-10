import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type ToolbarProps = ComponentProps<"div">;

export const Toolbar: FC<ToolbarProps> = ({ className, children, ...props }) => {
  const mergedClassName = twMerge([
    "absolute top-11 right-[-180px] rounded-[8px] overflow-hidden",
    className,
  ]);

  return (
    <div className={mergedClassName} {...props}>
      {children}
    </div>
  );
};
