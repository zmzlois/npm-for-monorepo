"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
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
import type { FieldPath, FieldValues } from "react-hook-form/dist/types";

export interface SelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  label: string;
}

export const SelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: SelectFieldProps<TFieldValues, TName>) => {
  return (
    <>
      <FormField
        {...props}
        render={({ field }) => (
          <FormItem className="w-full">
            <Label htmlFor="name" className="col-span-1 text-start">
              {props.label}
            </Label>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                name={field.name}
                value={field.value}
              >
                <SelectTrigger className="col-span-3 items-center ">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="pnpm">pnpm</SelectItem>
                    <SelectItem value="npm">npm</SelectItem>
                    <SelectItem value="yarn">yarn</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};
