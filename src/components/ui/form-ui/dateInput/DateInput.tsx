// components/form/date-input.tsx
"use client";

import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface DateInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  helperText?: string;
  required?: boolean;
}

export const DateInput = React.forwardRef<
  HTMLInputElement,
  DateInputProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { name, label, placeholder, className = "", helperText, required, ...rest },
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
      >
        <input
          {...field}
          {...rest}
          id={id}
          ref={ref}
          type="date"
          placeholder={placeholder}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!error}
          aria-required={required}
        />
      </MemoizedFieldWrapper>
    );
  }
);

DateInput.displayName = "DateInput";
export const MemoizedDateInput = React.memo(DateInput);
