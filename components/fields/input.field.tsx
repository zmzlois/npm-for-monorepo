import { Label } from "../ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";

import { useForm, UseFormReturn } from "react-hook-form";
import type { ControllerProps } from "react-hook-form";
import type { FieldPath, FieldValues, Path } from "react-hook-form/dist/types";
import { Input } from "../ui/input";

export interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  label: string;
}

export const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: InputFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <>
          <Label htmlFor={props.label} className="col-span-1 text-start">
            {props.label}
          </Label>
          <FormControl>
            <Input
              className="col-span-3"
              onChange={field.onChange}
              defaultValue={field.value}
              name={field.name}
            />
          </FormControl>
        </>
      )}
    />
  );
};
