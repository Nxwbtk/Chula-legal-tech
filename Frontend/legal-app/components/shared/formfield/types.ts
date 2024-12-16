import { FieldValues, UseFormReturn } from "react-hook-form";
export type TSelectOptionProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  fieldName: string;
  label: string;
  isRequired?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export type TInputFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  fieldName: string;
  label: string;
  isRequired?: boolean;
  type?: string;
  placeholder?: string;
  isDisabled?: boolean;
  className?: string;
};

export type TSelectMultiProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  fieldName: string;
  label: string;
  isRequired?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
  id: string;
  createAble: boolean;
  isMulti: boolean;
  isDisabled?: boolean;
  noOptionsMessage: string;
};

export type TTextAreaFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  fieldName: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
};

export type TCheckBoxFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  label: string;
  isRequired?: boolean;
  items: { id: string; label: string }[];
  feildName: string;
};

export type TDatePickerFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  fieldName: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
};
