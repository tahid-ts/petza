/* eslint-disable @typescript-eslint/no-unused-vars */
// components/form/switch-field.tsx
"use client";

import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface SwitchFieldProps {
  name: string;
  label?: string;
  className?: string;
  helperText?: string;
  required?: boolean;
}

export const SwitchField = React.forwardRef<
  HTMLInputElement,
  SwitchFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ name, label, className = "", helperText, required, ...rest }, ref) => {
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
      <div className="flex items-center">
        <button
          type="button"
          role="switch"
          aria-checked={!!field.value}
          aria-invalid={!!error}
          aria-required={required}
          onClick={() => field.onChange(!field.value)}
          className={`${
            field.value ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 Shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50`}
          disabled={rest.disabled}
        >
          <span
            className={`${
              field.value ? "translate-x-5" : "translate-x-0"
            } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
          />
        </button>
        {label && (
          <label htmlFor={id} className="ml-3 block text-sm text-gray-700">
            {label}
          </label>
        )}
      </div>
    </MemoizedFieldWrapper>
  );
});

SwitchField.displayName = "SwitchField";
export const MemoizedSwitchField = React.memo(SwitchField);
