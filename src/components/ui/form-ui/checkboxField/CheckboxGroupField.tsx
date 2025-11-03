// components/form/checkbox-group-field.tsx
"use client";

import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface CheckboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CheckboxGroupFieldProps {
  /** Form field name */
  name: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  options?: CheckboxOption[];
  layout?: "horizontal" | "vertical";

  selectionType?: "single" | "multiple" | "standalone";
}

export const CheckboxGroupField = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      name,
      label,
      helperText,
      required,
      className = "",
      labelClassName = "",
      options,
      layout = "vertical",
      selectionType = "standalone",
      ...rest
    },
    ref
  ) => {
    const { field, error } = useField({ name });
    const groupId = React.useId();

    /** Handle change depending on selection type */
    const handleChange = (optionValue?: string) => {
      if (selectionType === "standalone") {
        field.onChange(!field.value);
        return;
      }

      if (!optionValue) return;

      if (selectionType === "single") {
        // allow only one selected
        field.onChange(optionValue);
      } else if (selectionType === "multiple") {
        // allow multiple selections (array)
        const currentValues = Array.isArray(field.value) ? field.value : [];
        const isSelected = currentValues.includes(optionValue);
        const updated = isSelected
          ? currentValues.filter((v) => v !== optionValue)
          : [...currentValues, optionValue];
        field.onChange(updated);
      }
    };

    const renderCheckbox = (
      optionValue: string,
      optionLabel: string,
      isChecked: boolean,
      disabled?: boolean
    ) => (
      <label
        key={optionValue}
        htmlFor={`${groupId}-${optionValue}`}
        className={`flex items-center cursor-pointer bg-pattern rounded-2xl px-4 select-none py-7 gap-4  ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <input
          id={`${groupId}-${optionValue}`}
          ref={ref}
          type="checkbox"
          value={optionValue}
          checked={isChecked}
          onChange={() => handleChange(optionValue)}
          disabled={disabled}
          className={`h-4 w-4 appearance-none rounded border transition-all duration-150 
            ${
              isChecked
                ? "bg-primary border-primary ring-2 ring-primary"
                : "border-primary  hover:border-primary/60"
            }
            focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50
          `}
          aria-invalid={!!error}
          aria-required={required}
          {...rest}
        />
        <span className="ml-2 text-sm text-gray-700 font-medium">
          {optionLabel}
        </span>
      </label>
    );

    /** --- Standalone Checkbox (Single Boolean) --- */
    if (selectionType === "standalone") {
      const id = `${groupId}-standalone`;
      return (
        <MemoizedFieldWrapper
          label={label}
          error={error}
          helperText={helperText}
          required={required}
          className={className}
          labelClassName={labelClassName}
          htmlFor={id}
        >
          <div className="flex items-center">
            <input
              {...field}
              {...rest}
              id={id}
              ref={ref}
              type="checkbox"
              checked={!!field.value}
              onChange={() => handleChange()}
              className={`h-4 w-4 appearance-none rounded border transition-all duration-150
                ${
                  field.value
                    ? "bg-primary border-primary ring-2 ring-primary"
                    : "border-primary  hover:border-primary/60"
                }
                focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50
              `}
              aria-invalid={!!error}
              aria-required={required}
            />
            {label && (
              <label
                htmlFor={id}
                className="ml-2 text-sm text-dark font-medium select-none"
              >
                {label}
              </label>
            )}
          </div>
        </MemoizedFieldWrapper>
      );
    }

    /** --- Group Checkbox Layout (Single or Multiple Select) --- */
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
          role="group"
          aria-labelledby={groupId}
          className={`flex ${
            layout === "horizontal"
              ? "flex-row flex-wrap gap-4"
              : "flex-col gap-2"
          }`}
        >
          {options?.map((option) => {
            const isChecked =
              selectionType === "multiple"
                ? Array.isArray(field.value) &&
                  field.value.includes(option.value)
                : field.value === option.value;

            return renderCheckbox(
              option.value,
              option.label,
              isChecked,
              option.disabled
            );
          })}
        </div>
      </MemoizedFieldWrapper>
    );
  }
);

CheckboxGroupField.displayName = "CheckboxGroupField";
export const MemoizedCheckboxGroupField = React.memo(CheckboxGroupField);
