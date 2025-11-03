// components/form/select-field.tsx
"use client";

import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface SelectFieldProps {
  name: string;
  label?: string;
  className?: string;
  helperText?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export const SelectField = React.forwardRef<
  HTMLSelectElement,
  SelectFieldProps & React.SelectHTMLAttributes<HTMLSelectElement>
>(
  (
    { name, label, className = "", helperText, required, children, ...rest },
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
        <select
          {...field}
          {...rest}
          id={id}
          ref={ref}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!error}
          aria-required={required}
        >
          {children}
        </select>
      </MemoizedFieldWrapper>
    );
  }
);

SelectField.displayName = "SelectField";
export const MemoizedSelectField = React.memo(SelectField);
