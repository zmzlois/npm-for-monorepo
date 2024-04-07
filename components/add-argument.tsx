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
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog";
import {
  Form,
} from "@/components/ui/form";
import { InputField } from "./input.field";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { argSchema } from "@/lib/form-schema";
import { SelectField } from "./select.field";
import { usePkgStore } from "@/lib/zustand-store";
import { toast } from "sonner";
import { useState } from "react";

export function AddArgument() {

    const [open, setOpen] = useState(false);
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
    
    setOpen(false);
    toast.success("Arguments updated. 🎉 ");
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
