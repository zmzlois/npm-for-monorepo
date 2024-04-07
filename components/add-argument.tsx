"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   

export function AddArgument() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit arguments</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit arguments</DialogTitle>
          <DialogDescription>
            Make changes to your arguments.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-start">
            <div className="grid grid-cols-5 items-center ">
            <Label htmlFor="name" className="text-start col-span-2">
             Package manager
            </Label>
            <Select>
      <SelectTrigger className="w-[180px] col-span-3">
        <SelectValue placeholder="pnpm" defaultValue={"pnpm"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="pnpm">pnpm</SelectItem>
          <SelectItem value="npm">npm</SelectItem>
          <SelectItem value="yarn">yarn</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
            <Label htmlFor="name" className="text-right">
             Flag
            </Label>
            <Input id="name" value="--filter" placeholder="--filter" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Label
            </Label>
            <Input id="username" value="app" placeholder="app" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
