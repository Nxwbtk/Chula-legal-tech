"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, Path } from "react-hook-form";
import { AppFormLabel } from "../../label";
import { TInputFormFieldProps } from "../types";

/**
 *
 * @param props {form, fieldName, label, isRequired, placeholder, type}
 * @param form is from useForm hook
 * @param fieldName is the name of the field
 * @param label is the label of the field
 * @param isRequired is the field required. This one is optional
 * @param placeholder is the placeholder of the input field
 * @param type is the type of the input field. Default is text
 * @param isDisabled is the field disabled. Default is false\
 * @param className is the class name of the input field
 * @example
 * type = "text" | "password" | "email" | "number" | "tel" | "url"
 * @returns
 */
export const InputFormField = <T extends FieldValues>(
  props: TInputFormFieldProps<T>
) => {
  const {
    form,
    fieldName,
    label,
    isRequired = false,
    placeholder,
    type = "text",
    isDisabled = false,
    className = "",
  } = props;
  return (
    <FormField
      control={form.control}
      name={fieldName as Path<T>}
      render={({ field }) => (
        <FormItem>
          {label !== "" && (
            <FormLabel>
              <AppFormLabel label={label} required={isRequired} />
            </FormLabel>
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              disabled={isDisabled}
              className={className}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
