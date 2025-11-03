// components/form/textarea-field.tsx
"use client";

import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface TextAreaFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  helperText?: string;
  required?: boolean;
  rows?: number;
}

export const TextAreaField = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(
  (
    {
      name,
      label,
      placeholder,
      className = "",
      helperText,
      required,
      rows = 4,
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
      >
        <textarea
          {...field}
          {...rest}
          id={id}
          ref={ref}
          rows={rows}
          placeholder={placeholder}
          className="px-4 py-3 bg-pattern rounded-md focus:outline-none focus:ring-0 focus:ring-primary focus:border-transparent transition-colors resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!error}
          aria-required={required}
        />
      </MemoizedFieldWrapper>
    );
  }
);

TextAreaField.displayName = "TextAreaField";
export const MemoizedTextAreaField = React.memo(TextAreaField);
