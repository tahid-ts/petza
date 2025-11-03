"use client";
import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupFieldProps {
  name: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  helperText?: string;
  required?: boolean;
  options: RadioOption[];
  layout?: "horizontal" | "vertical";
  variant?: "default" | "card";
}

export const RadioGroupField = React.forwardRef<
  HTMLInputElement,
  RadioGroupFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      name,
      label,
      className = "",
      labelClassName = "",
      helperText,
      required,
      options,
      layout = "vertical",
      variant = "default",
      ...rest
    },
    ref
  ) => {
    const { field, error } = useField({ name });
    const groupId = React.useId();

    const isCardVariant = variant === "card";

    return (
      <MemoizedFieldWrapper
        label={label}
        error={error}
        helperText={helperText}
        required={required}
        className={className}
        labelClassName={labelClassName}
      >
        <div
          className={`flex gap-3 ${
            layout === "horizontal" ? "flex-row flex-wrap" : "flex-col"
          } ${isCardVariant ? "gap-2" : ""}`}
          role="radiogroup"
          aria-labelledby={groupId}
          aria-invalid={!!error}
          aria-required={required}
        >
          {options.map((option) => {
            const isSelected = field.value === option.value;
            const optionId = `${groupId}-${option.value}`;

            if (isCardVariant) {
              return (
                <label
                  key={option.value}
                  htmlFor={optionId}
                  className={`relative flex items-center p-3 border rounded-lg cursor-pointer transition-all
                    ${
                      isSelected
                        ? " bg-primary/10"
                        : "border-gray-300 bg-white hover:/60 hover:bg-gray-50"
                    }
                    ${
                      option.disabled
                        ? "opacity-50 cursor-not-allowed bg-gray-100"
                        : ""
                    }
                  `}
                >
                  <input
                    {...field}
                    {...rest}
                    id={optionId}
                    ref={ref}
                    type="radio"
                    value={option.value}
                    checked={isSelected}
                    disabled={option.disabled}
                    className={`h-4 w-4 appearance-none rounded-md border 
                      ${
                        isSelected
                          ? "bg-primary  ring-2 ring-primary"
                          : "border-gray-300 bg-white"
                      } 
                      focus:outline-none focus:ring-2 focus:ring-primary 
                      disabled:opacity-50 transition-all duration-150
                    `}
                  />
                  <span
                    className={`ml-3 text-sm font-medium ${
                      option.disabled ? "text-gray-500" : "text-gray-900"
                    }`}
                  >
                    {option.label}
                  </span>
                </label>
              );
            }

            // Default radio layout
            return (
              <div key={option.value} className="flex items-center">
                <input
                  {...field}
                  {...rest}
                  id={optionId}
                  ref={ref}
                  type="radio"
                  value={option.value}
                  checked={isSelected}
                  disabled={option.disabled}
                  className={`h-4 w-4 appearance-none rounded-md border 
                    ${
                      isSelected
                        ? "bg-primary  ring-2 ring-primary"
                        : "border-gray-300 bg-white"
                    }
                    focus:outline-none focus:ring-2 focus:ring-primary 
                    disabled:opacity-50 transition-all duration-150
                  `}
                />
                <label
                  htmlFor={optionId}
                  className={`ml-2 block text-sm ${
                    option.disabled ? "text-gray-500" : "text-gray-700"
                  }`}
                >
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>
      </MemoizedFieldWrapper>
    );
  }
);

RadioGroupField.displayName = "RadioGroupField";

export const MemoizedRadioGroupField = React.memo(RadioGroupField);
