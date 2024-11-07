"use client";
import Image from "next/image";

interface Props {
  title?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  outline?: boolean;
  srcIcon?: string;
  altIcon?: string;
  onClick?: () => void;
}

export default function Button({
  title,
  type = "button",
  className,
  disabled,
  outline,
  srcIcon,
  altIcon = "icon",
  onClick,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`grid place-content-center py-4 font-medium rounded-lg w-full ${className} ${outline && "border mix-blend-difference"} ${disabled && "opacity-75"}`}
      onClick={onClick}
    >
      {title && title}
      {srcIcon && <Image src={srcIcon} width={14} height={14} alt={altIcon} />}
    </button>
  );
}
