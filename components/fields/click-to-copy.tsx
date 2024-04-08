"use client";
import { Button } from "../ui/button";
import { toast } from "sonner";
interface Props {
  packageName: string;
  command: string;
  item: string;
  flag: string;
  arg: string;
}
export const ClickToCopy = ({ props }: { props: Props }) => {
  function copy() {
    const ele = document.getElementById("input");

    if (!ele) {
      toast.error("We can't copy empty text");
      return;
    }
    const text = ele.textContent;
    navigator.clipboard.writeText(text!);

    toast.success("Copied to clipboard");
  }

  const string = `${props.packageName} ${props.command} ${props.item} ${props.flag} ${props.arg}`;
  return (
    <code
      id="code"
      onClick={() => copy}
      className="flex content-center items-center gap-4 text-center text-sm"
    >
      <span id="input">{string}</span>
      <Button onClick={copy} className="ml-2" variant={"outline"}>
        Copy
      </Button>
    </code>
  );
};
