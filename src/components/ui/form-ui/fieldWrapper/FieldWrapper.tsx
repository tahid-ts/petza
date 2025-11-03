// components/form/field-wrapper.tsx
"use client";

import React from "react";

export interface FieldWrapperProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
  htmlFor?: string;
}

export function FieldWrapper({
  label,
  error,
  helperText,
  required = false,
  children,
  className = "",
  labelClassName = "",
  htmlFor,
}: FieldWrapperProps): React.JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={htmlFor}
          className={`mb-2 text-sm font-title font-medium text-gray-700 ${labelClassName}`}
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
}

export const MemoizedFieldWrapper = React.memo(FieldWrapper);
