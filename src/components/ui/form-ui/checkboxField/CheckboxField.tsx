"use client";
import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface CheckboxFieldProps {
  name: string;
  label?: string | React.ReactNode; // Allow ReactNode for custom JSX
  className?: string;
  labelClassName?: string;
  helperText?: string;
  required?: boolean;
}

export const CheckboxField = React.forwardRef<
  HTMLInputElement,
  CheckboxFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      name,
      label,
      className = "",
      labelClassName = "",
      helperText,
      required,
      ...rest
    },
    ref
  ) => {
    const { field, error } = useField({ name });
    const id = React.useId();

    return (
      <MemoizedFieldWrapper
        error={error}
        helperText={helperText}
        required={required}
        htmlFor={id}
        className={className}
        labelClassName={labelClassName}
      >
        <div className="flex ">
          <input
            {...field}
            {...rest}
            id={id}
            ref={ref}
            type="checkbox"
            checked={!!field.value}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
            aria-invalid={!!error}
            aria-required={required}
          />
          {label && (
            <label
              htmlFor={id}
              className={`ml-2 block text-sm ${labelClassName}`}
            >
              {label}
            </label>
          )}
        </div>
      </MemoizedFieldWrapper>
    );
  }
);

CheckboxField.displayName = "CheckboxField";
export const MemoizedCheckboxField = React.memo(CheckboxField);
