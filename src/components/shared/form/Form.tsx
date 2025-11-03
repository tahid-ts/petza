/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { JSX } from "react";
// import {
//   useForm,
//   FormProvider,
//   SubmitHandler,
//   useFormContext,
//   useController,
//   FieldValues,
// } from "react-hook-form";
// import { z, ZodTypeAny } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// /* ---------------------------------------------
//   🔧 Types
// ---------------------------------------------- */
// type AnyZod = ZodTypeAny;

// export interface FormProps<S extends AnyZod> {
//   schema: S;
//   defaultValues?: Partial<z.infer<S>>;
//   onSubmit: (values: z.infer<S>) => Promise<void> | void;
//   children?: React.ReactNode;
//   className?: string;
// }

// /* ---------------------------------------------
//   🧱 Main Form Component
// ---------------------------------------------- */
// export function Form<S extends AnyZod>({
//   schema,
//   defaultValues,
//   onSubmit,
//   children,
//   className = "space-y-4 w-full",
// }: FormProps<S>): JSX.Element {
//   const methods = useForm<z.infer<S>>({
//     resolver: zodResolver(schema),
//     defaultValues,
//     mode: "onBlur",
//   });

//   const handleSubmit: SubmitHandler<z.infer<S>> = async (values) => {
//     await onSubmit(values);
//   };

//   return (
//     <FormProvider<z.infer<S>> {...methods}>
//       <form
//         onSubmit={methods.handleSubmit(handleSubmit)}
//         className={className}
//         noValidate
//       >
//         {children}
//       </form>
//     </FormProvider>
//   );
// }

// /* ---------------------------------------------
//   🧩 Shared field props
// ---------------------------------------------- */
// interface FieldCommonProps {
//   name: string;
//   label?: string;
//   placeholder?: string;
//   className?: string;
// }

// /* ---------------------------------------------
//   ✏️ Input Field
// ---------------------------------------------- */
// Form.Input = function Input({
//   name,
//   label,
//   placeholder,
//   className = "",
//   ...rest
// }: FieldCommonProps & React.InputHTMLAttributes<HTMLInputElement>) {
//   const { control, formState } = useFormContext();
//   const { field } = useController({ name, control });
//   const error = formState.errors[name];

//   return (
//     <div className={`flex flex-col ${className}`}>
//       {label && (
//         <label className="mb-1 text-sm font-medium text-slate-700">
//           {label}
//         </label>
//       )}
//       <input
//         {...field}
//         {...rest}
//         placeholder={placeholder}
//         className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-60"
//       />
//       {error && (
//         <p className="mt-1 text-xs text-red-600">
//           {(error as any).message?.toString()}
//         </p>
//       )}
//     </div>
//   );
// };

// /* ---------------------------------------------
//   📝 TextArea Field
// ---------------------------------------------- */
// Form.TextArea = function TextArea({
//   name,
//   label,
//   placeholder,
//   className = "",
//   rows = 4,
//   ...rest
// }: FieldCommonProps &
//   React.TextareaHTMLAttributes<HTMLTextAreaElement> & { rows?: number }) {
//   const { control, formState } = useFormContext();
//   const { field } = useController({ name, control });
//   const error = formState.errors[name];

//   return (
//     <div className={`flex flex-col ${className}`}>
//       {label && (
//         <label className="mb-1 text-sm font-medium text-slate-700">
//           {label}
//         </label>
//       )}
//       <textarea
//         {...field}
//         {...rest}
//         rows={rows}
//         placeholder={placeholder}
//         className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-60"
//       />
//       {error && (
//         <p className="mt-1 text-xs text-red-600">
//           {(error as any).message?.toString()}
//         </p>
//       )}
//     </div>
//   );
// };

// /* ---------------------------------------------
//   🔽 Select Field
// ---------------------------------------------- */
// Form.Select = function Select({
//   name,
//   label,
//   className = "",
//   children,
//   ...rest
// }: FieldCommonProps & React.SelectHTMLAttributes<HTMLSelectElement>) {
//   const { control, formState } = useFormContext();
//   const { field } = useController({ name, control });
//   const error = formState.errors[name];

//   return (
//     <div className={`flex flex-col ${className}`}>
//       {label && (
//         <label className="mb-1 text-sm font-medium text-slate-700">
//           {label}
//         </label>
//       )}
//       <select
//         {...field}
//         {...rest}
//         className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
//       >
//         {children}
//       </select>
//       {error && (
//         <p className="mt-1 text-xs text-red-600">
//           {(error as any).message?.toString()}
//         </p>
//       )}
//     </div>
//   );
// };

// /* ---------------------------------------------
//   ☑️ Checkbox Field
// ---------------------------------------------- */
// Form.Checkbox = function Checkbox({
//   name,
//   label,
//   className = "",
//   ...rest
// }: FieldCommonProps & React.InputHTMLAttributes<HTMLInputElement>) {
//   const { control, formState } = useFormContext();
//   const { field } = useController({ name, control, defaultValue: false });
//   const error = formState.errors[name];

//   return (
//     <div className={`flex items-start space-x-2 ${className}`}>
//       <input
//         {...field}
//         {...rest}
//         type="checkbox"
//         checked={!!field.value}
//         className="mt-1 h-4 w-4 rounded border-slate-300"
//       />
//       {label && <label className="text-sm text-slate-700">{label}</label>}
//       {error && (
//         <p className="mt-1 text-xs text-red-600">
//           {(error as any).message?.toString()}
//         </p>
//       )}
//     </div>
//   );
// };

// /* ---------------------------------------------
//   🚀 Submit Button
// ---------------------------------------------- */
// Form.Submit = function Submit({
//   children,
//   className = "",
//   ...rest
// }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
//   return (
//     <button
//       type="submit"
//       {...rest}
//       className={`px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-700 transition ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Form;

// components/form/index.tsx
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
  // Use any for form data to bypass the strict type checking
  // This is safe because zodResolver will handle the validation
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
// "use client";

// import React, { useCallback } from "react";
// import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// // Use the non-deprecated ZodType
// type AnyZodType = z.ZodType<any, any, any>;

// export interface FormProps<S extends AnyZodType> {
//   schema: S;
//   defaultValues?: Partial<z.infer<S>>;
//   onSubmit: (values: z.infer<S>) => Promise<void> | void;
//   children?: React.ReactNode;
//   className?: string;
//   mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
//   resetOnSubmit?: boolean;
// }

// export function Form<S extends AnyZodType>({
//   schema,
//   defaultValues,
//   onSubmit,
//   children,
//   className = "space-y-4 w-full",
//   mode = "onBlur",
//   resetOnSubmit = false,
// }: FormProps<S>): React.JSX.Element {
//   // Use any for form data to bypass the strict type checking
//   // This is safe because zodResolver will handle the validation
//   const methods = useForm<any>({
//     resolver: zodResolver(schema),
//     defaultValues,
//     mode,
//   });

//   const handleSubmit: SubmitHandler<any> = useCallback(
//     async (values) => {
//       try {
//         await onSubmit(values);
//         if (resetOnSubmit) {
//           methods.reset();
//         }
//       } catch (error) {
//         console.error("Form submission error:", error);
//       }
//     },
//     [onSubmit, resetOnSubmit, methods]
//   );

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={methods.handleSubmit(handleSubmit)}
//         className={className}
//         noValidate
//       >
//         {children}
//       </form>
//     </FormProvider>
//   );
// }

// export default Form;
