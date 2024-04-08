import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  packageManager: "pnpm" | "yarn" | "npm";
  command: "add" | "install";
  flag: string;
  arg: string;
};

type Actions = {
  setPackage: (item: "pnpm" | "yarn" | "npm") => void;
  setFlag: (item: string) => void;
  setArg: (item: string) => void;
};

export const usePkgStore = create<State & Actions>()(
  persist(
    (set) => ({
      packageManager: "pnpm",
      command: "add",
      setPackage: (item: "pnpm" | "yarn" | "npm") => {
        if (item === "pnpm") set({ command: "add" });
        if (item === "yarn") set({ command: "add" });
        if (item === "npm") set({ command: "install" });
        return set({ packageManager: item });
      },
      flag: "",
      setFlag: (item: string) => set({ flag: item }),
      arg: "",
      setArg: (item: string) => set({ arg: item }),
    }),
    {
      name: "npm-for-monorepo", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
