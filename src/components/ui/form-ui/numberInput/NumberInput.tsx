// components/form/number-input.tsx
"use client";

import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface NumberInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  helperText?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export const NumberInput = React.forwardRef<
  HTMLInputElement,
  NumberInputProps & React.InputHTMLAttributes<HTMLInputElement>
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
      min,
      max,
      step,
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
          type="number"
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          className="px-4 py-3 h-11 lg:h-[50px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!error}
          aria-required={required}
          onChange={(e) => field.onChange(e.target.valueAsNumber)}
        />
      </MemoizedFieldWrapper>
    );
  }
);

NumberInput.displayName = "NumberInput";
export const MemoizedNumberInput = React.memo(NumberInput);
