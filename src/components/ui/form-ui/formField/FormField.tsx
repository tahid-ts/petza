/* eslint-disable @typescript-eslint/no-explicit-any */
// components/form/form-field.tsx
"use client";

import { useField } from "@/hooks/useField";
import React from "react";
import { MemoizedFieldWrapper } from "../fieldWrapper/FieldWrapper";

export interface FormFieldProps {
  name: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  className?: string;
  children: (props: {
    field: any;
    error?: string;
    id: string;
  }) => React.ReactNode;
}

export function FormField({
  name,
  label,
  helperText,
  required,
  className = "",
  children,
}: FormFieldProps): React.JSX.Element {
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
      {children({ field, error, id })}
    </MemoizedFieldWrapper>
  );
}

export const MemoizedFormField = React.memo(FormField);
