import { ButtonSize, ButtonVariant } from "@/types/button";
import { BaseComponentProps } from "@/types/types";
import React from "react";

interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = React.memo(
  ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    onClick,
    type = "button",
    ...props
  }) => {
    const baseClasses =
      "font-semibold w-full rounded-lg transition-all duration-200 focus:outline-none whitespace-nowrap flex items-center justify-center gap-2";

    const variants: Record<ButtonVariant, string> = {
      primary: "bg-secondary text-white hover:bg-green-700 cursor-pointer",
      secondary:
        "bg-[#F2D701] text-gray-800 hover:bg-gray-200 cursor-pointer focus:outline-none ",
      outline:
        "border border-green-600 bg-white text-green-600 hover:bg-green-50 cursor-pointer",
      iconOnly:
        "bg-transparent text-green-600 cursor-pointer focus:outline-none ",
      icon: "bg-transparent text-green-600 hover:bg-green-50 cursor-pointer focus:outline-none",
    };

    const sizes: Record<ButtonSize, string> = {
      none: "",
      sm: "px-3 py-2 text-sm ",
      md: "lg:px-6 lg:py-2 px-5 py-1.5 text-base",
      lg: "px-8 py-3 text-lg",
    };

    return (
      <button
        type={type}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${
          disabled ? "opacity-50 cursor-not-allowed " : ""
        } ${className}`}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
