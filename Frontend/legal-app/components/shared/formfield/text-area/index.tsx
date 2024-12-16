"use client";

import { FieldValues, Path } from "react-hook-form";
import { TTextAreaFormFieldProps } from "../types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AppFormLabel } from "../../label";
import { Textarea } from "@/components/ui/textarea";

export const TextAreaFormField = <T extends FieldValues>(
  props: TTextAreaFormFieldProps<T>
) => {
  const { form, fieldName, label, isRequired = false, placeholder } = props;
  return (
    <FormField
      control={form.control}
      name={fieldName as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <AppFormLabel label={label} required={isRequired} />
          </FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
