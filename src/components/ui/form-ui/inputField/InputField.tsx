// components/form/input-field.tsx
"use client";

import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface InputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  helperText?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
}

export const InputField = React.forwardRef<
  HTMLInputElement,
  InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      name,
      label,
      placeholder,
      className = "",
      labelClassName = "",
      helperText,
      required,
      type = "text",
      ...rest
    },
    ref
  ) => {
    const { field, error } = useField({ name });
    const id = React.useId();

    return (
      <MemoizedFieldWrapper
        label={label}
        error={error}
        helperText={helperText}
        required={required}
        htmlFor={id}
        className={className}
        labelClassName={labelClassName}
      >
        <input
          {...field}
          {...rest}
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="px-4 py-3 h-11 lg:h-[50px] rounded-md focus:outline-none focus:ring-0 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-pattern text-dark"
          aria-invalid={!!error}
          aria-required={required}
        />
      </MemoizedFieldWrapper>
    );
  }
);

InputField.displayName = "InputField";
export const MemoizedInputField = React.memo(InputField);
