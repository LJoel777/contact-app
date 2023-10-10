import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { Icon, IconType } from "..";

type ListItemProps = ComponentProps<"button"> & {
  icon?: IconType;
};

const baseClassName =
  "flex flex-row justify-start items-center gap-[12px] w-full px-[10px] py-[12px] text-white-100 bg-black-80 font-lexendDeca text-[14px] focus:outline-none hover:bg-black-70 active:outline-none active:bg-black-60";

export const ListItem: FC<ListItemProps> = ({ icon, className, children, ...props }) => {
  const mergedClassName = twMerge([baseClassName, className]);

  return (
    <button className={mergedClassName} {...props}>
      {icon && <Icon type={icon} width={20} height={20} iconColor="rgba(255, 255, 255, 0.56)" />}
      {children}
    </button>
  );
};
