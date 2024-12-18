"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AppFormLabel } from "../../label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import { TSelectMultiProps, TSelectOptionProps } from "../types";
import { SelectComponent } from "../../select";

/**
 *
 * @param form is from useForm hook
 * @param fieldName is the name of the field
 * @param label is the label of the field
 * @param isRequired is the field required. This one is optional
 * @param options is the options of the select field must be an array of object with value and label
 * @example
 * options = [{ value: "1", label: "1" }]
 * @returns
 */
export const SelectFormField = <T extends FieldValues>(
  props: TSelectOptionProps<T>
) => {
  const {
    form,
    fieldName,
    label,
    isRequired = false,
    options,
    placeholder,
  } = props;
  return (
    <FormField
      control={form.control}
      name={fieldName as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <AppFormLabel label={label} required={isRequired} />
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger
                className={cn(
                  form.formState.errors[fieldName as Path<T>] &&
                    "border-red-500 focus-visible:ring-rose-300"
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SelectFormFieldMulti = <T extends FieldValues>(
  props: TSelectMultiProps<T>
) => {
  const {
    form,
    fieldName,
    label,
    isRequired = false,
    options,
    placeholder,
    id,
    createAble,
    isMulti,
    isDisabled = false,
    noOptionsMessage,
  } = props;
  return (
    <FormField
      control={form.control}
      name={fieldName as Path<T>}
      render={({ field }) => (
        <FormItem>
          <AppFormLabel
            htmlFor={field.name}
            label={label}
            required={isRequired}
          />
          <SelectComponent
            id={id}
            createAble={createAble}
            isMulti={isMulti}
            value={field.value}
            onChange={field.onChange}
            options={options}
            placeholder={placeholder}
            isDisabled={isDisabled}
            noOptionsMessage={() => noOptionsMessage}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
