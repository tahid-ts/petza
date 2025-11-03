// components/form/submit-button.tsx
"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import Button from "../../button/Button";

export interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  varient?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const SubmitButton = React.forwardRef<
  HTMLButtonElement,
  SubmitButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      children,
      className = "",
      varient,
      icon,
      iconPosition,
      loading = false,
      disabled,
      ...rest
    },
    ref
  ) => {
    const { formState } = useFormContext();
    const isSubmitting = formState.isSubmitting || loading;

    return (
      <Button
        type="submit"
        ref={ref}
        disabled={disabled || isSubmitting}
        {...rest}
        varient={varient}
        className={` ${className}`}
        icon={icon}
        iconPosition={iconPosition}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Loading...
          </div>
        ) : (
          children
        )}
      </Button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";
export const MemoizedSubmitButton = React.memo(SubmitButton);
