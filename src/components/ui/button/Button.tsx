"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { BaseComponentProps } from "@/types/types";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "primary-outline"
  | "primary-two"
  | "iconOnly";

export type ButtonSize = "none" | "xs" | "sm" | "md" | "lg";

interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  textClassName?: string;
  href?: string; // ✅ New prop for Next.js Link
  target?: "_blank" | "_self";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  icon,
  iconPosition = "right",
  iconClassName = "",
  textClassName = "",
  href,
  target = "_self",
  ...props
}) => {
  // 🎨 Base Styles
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg overflow-hidden focus:outline-none group cursor-pointer";

  const sizes: Record<ButtonSize, string> = {
    none: "",
    xs: "px-3 py-2 text-xs h-8 w-8",
    sm: "px-4 py-2 text-sm h-10",
    md: "px-6 py-3 text-base h-12",
    lg: "px-8 py-4 text-lg h-14",
  };

  const variants: Record<ButtonVariant, string> = {
    primary: clsx(
      "bg-primary border border-primary cursor-pointer",
      "before:absolute before:inset-0 before:h-0 before:bg-white before:transition-all before:duration-300 before:rounded-lg",
      "hover:before:h-full hover:bg-transparent z-[1] before:-z-10"
    ),
    secondary: clsx(
      "bg-transparent border border-primary cursor-pointer",
      "before:absolute before:inset-0 before:w-0 before:bg-primary before:transition-all before:duration-300 before:rounded-lg",
      "hover:before:w-full z-[1] before:-z-10"
    ),
    tertiary: clsx(
      "bg-light rounded border-[3px] border-primary w-full cursor-pointer",
      "before:absolute before:border-primary before:inset-0 before:w-0 before:bg-primary before:transition-all before:duration-300 before:rounded",
      "hover:before:w-full z-[1] before:-z-10"
    ),
    "primary-outline": clsx(
      "bg-transparent border border-primary cursor-pointer",
      "before:absolute before:inset-0 before:w-0 before:bg-primary before:transition-all before:duration-300 before:rounded-lg",
      "hover:before:w-full z-[1] before:-z-10"
    ),
    "primary-two": clsx(
      "bg-primary border border-primary rounded-md cursor-pointer",
      "before:absolute before:inset-0 before:w-0 before:bg-white before:transition-all before:duration-300 before:rounded-md",
      "hover:before:w-full z-[1] before:-z-10"
    ),
    iconOnly: clsx(
      "flex items-center justify-center cursor-pointer rounded-full transition-all duration-300"
    ),
  };

  const iconBase =
    "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300";

  const iconVariants: Record<ButtonVariant, string> = {
    primary: clsx(
      iconBase,
      "bg-white text-primary group-hover:bg-primary group-hover:text-white"
    ),
    secondary: clsx(
      iconBase,
      "bg-primary text-white group-hover:bg-white group-hover:text-primary"
    ),
    tertiary: clsx(
      iconBase,
      "bg-primary text-white group-hover:bg-white group-hover:text-primary"
    ),
    "primary-outline": clsx(
      iconBase,
      "bg-primary text-white group-hover:bg-white group-hover:text-primary"
    ),
    "primary-two": clsx(
      iconBase,
      "bg-white text-primary group-hover:bg-primary group-hover:text-white"
    ),
    iconOnly: clsx("text-dark group-hover:text-primary"),
  };

  const textVariants: Record<ButtonVariant, string> = {
    primary: "text-white group-hover:text-primary",
    secondary: "text-dark group-hover:text-white",
    tertiary: "text-dark group-hover:text-white",
    "primary-outline": "text-dark group-hover:text-white",
    "primary-two": "text-white group-hover:text-dark",
    iconOnly: "text-dark group-hover:text-primary",
  };

  const iconClasses = clsx(iconVariants[variant], "shrink-0", iconClassName);

  const textClasses = clsx(
    "whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-center",
    textVariants[variant],
    textClassName
  );

  const buttonClasses = clsx(
    baseClasses,
    variant === "iconOnly" ? sizes["none"] : sizes[size],
    variants[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  // 🧠 Shared Button Content
  const content = (
    <span
      className={clsx(
        "relative z-10 inline-flex items-center",
        icon && "justify-between w-full",
        iconPosition === "left" && "flex-row-reverse"
      )}
    >
      {icon && <span className={iconClasses}>{icon}</span>}
      <span className={textClasses}>{children}</span>
    </span>
  );

  if (href && !disabled) {
    return (
      <Link href={href} target={target} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default React.memo(Button);
