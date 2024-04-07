"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputField } from "./input.field";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { argSchema } from "@/lib/form-schema";
import { SelectField } from "./select.field";
import { usePkgStore } from "@/lib/zustand-store";
import { toast } from "sonner";

export function AddArgument() {
  const form = useForm<z.infer<typeof argSchema>>({
    resolver: zodResolver(argSchema),
  });

  const updatePkg = usePkgStore((state: any) => state.setPackage);

  const updateFlag = usePkgStore((state: any) => state.setFlag);
  const updateArg = usePkgStore((state: any) => state.setArg);
  async function onSubmit(values: any) {
    const content = form.getValues();
    await updatePkg(content.name);
    await updateFlag(content.flag);
    await updateArg(content.label);
    toast.success("Arguments updated successfully. 🎉 You can now close the diaglog.");
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit arguments</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Edit arguments</DialogTitle>
              <DialogDescription>
                Make changes to your arguments.
              </DialogDescription>
            </DialogHeader>
            <div className="grid items-center gap-4 py-4">
              <SelectField
                control={form.control}
                label="Package manager"
                name="name"
              />
              <div className="grid grid-cols-4 items-center gap-4">
                <InputField control={form.control} label="Flag" name="flag" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <InputField
                  control={form.control}
                  label="Argument"
                  name="label"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
