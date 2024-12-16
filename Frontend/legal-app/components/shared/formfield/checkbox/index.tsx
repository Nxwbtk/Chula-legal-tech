"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AppFormLabel } from "../../label";
import { Checkbox } from "@/components/ui/checkbox";
import { TCheckBoxFormFieldProps } from "../types";
import { FieldValues, Path } from "react-hook-form";

export const CheckBoxFormField = <T extends FieldValues>(
  props: TCheckBoxFormFieldProps<T>
) => {
  const { form, label, isRequired = false, items, feildName } = props;

  return (
    <FormField
      control={form.control}
      name={feildName as Path<T>}
      render={() => (
        <FormItem>
          <FormLabel>
            <AppFormLabel label={label} required={isRequired} />
          </FormLabel>
          {items.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name={feildName as Path<T>}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: any) => value !== item.id
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
