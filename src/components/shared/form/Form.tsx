/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useCallback } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Use the non-deprecated ZodType
type AnyZodType = z.ZodType<any, any, any>;

export interface FormProps<S extends AnyZodType> {
  schema: S;
  defaultValues?: Partial<z.infer<S>>;
  onSubmit: (values: z.infer<S>) => Promise<void> | void;
  children?: React.ReactNode;
  className?: string;
  mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
  resetOnSubmit?: boolean;
}

export function Form<S extends AnyZodType>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className = "space-y-4 w-full",
  mode = "onBlur",
  resetOnSubmit = false,
}: FormProps<S>): React.JSX.Element {
  const methods = useForm<any>({
    resolver: zodResolver(schema),
    defaultValues,
    mode,
  });

  const handleSubmit: SubmitHandler<any> = useCallback(
    async (values) => {
      try {
        await onSubmit(values);
        if (resetOnSubmit) {
          methods.reset();
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
    [onSubmit, resetOnSubmit, methods]
  );

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className={className}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
