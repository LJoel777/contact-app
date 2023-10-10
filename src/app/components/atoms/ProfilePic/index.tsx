import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type ProfilePicProps = Omit<ComponentProps<"img">, "alt"> & {
  size: "small" | "large";
};

const sizeValue = {
  small: 40,
  large: 88,
};

const baseUrl = `https://${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`;

export const ProfilePic: FC<ProfilePicProps> = ({
  size,
  className,
  src = `${baseUrl}/default.png`,
  ...props
}) => {
  const currentSize = sizeValue[size];
  const mergedClassName = twMerge([
    "rounded-full",
    `w-${currentSize}`,
    `h-${currentSize}`,
    className,
  ]);

  return (
    <img
      src={src}
      className={mergedClassName}
      alt={`image-${src}`}
      height={currentSize}
      width={currentSize}
      {...props}
    />
  );
};
