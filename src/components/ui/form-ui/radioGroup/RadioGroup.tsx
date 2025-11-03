// components/form/radio-group.tsx

import { useField } from "@/hooks/useField";
import React, { useId } from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  helperText?: string;
  required?: boolean;
  options: RadioOption[];
  layout?: "horizontal" | "vertical";
}

export const RadioGroup = React.forwardRef<
  HTMLInputElement,
  RadioGroupProps & React.InputHTMLAttributes<HTMLInputElement>
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
      ...rest
    },
    ref
  ) => {
    const { field, error } = useField({ name });
    const groupId = React.useId();
    const optionId = useId();

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
          className={`flex gap-4 ${
            layout === "horizontal" ? "flex-row" : "flex-col"
          }`}
          role="radiogroup"
          aria-labelledby={groupId}
          aria-invalid={!!error}
        >
          {options?.map((option) => {
            return (
              <div key={option.value} className="flex items-center">
                <input
                  {...field}
                  {...rest}
                  id={`${optionId}-${option.value}`}
                  ref={ref}
                  type="radio"
                  value={option.value}
                  checked={field.value === option.value}
                  disabled={option.disabled}
                  className="h-4 w-4 text-primary border-gray-300 focus:ring-primary disabled:opacity-50"
                />
                <label
                  htmlFor={`${optionId}-${option.value}`}
                  className="ml-2 block text-sm text-gray-700"
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

RadioGroup.displayName = "RadioGroup";
export const MemoizedRadioGroup = React.memo(RadioGroup);
