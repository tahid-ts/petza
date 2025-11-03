/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/use-field.ts
"use client"
import { useFormContext, useController, UseControllerProps } from "react-hook-form";

export function useField<T extends Record<string, any> = Record<string, any>>(
  props: UseControllerProps<T>
) {
  const { control, formState } = useFormContext<T>();
  const {
    field,
    fieldState: { error },
  } = useController({ ...props, control });

  return {
    field,
    error: error?.message,
    formState,
  };
}