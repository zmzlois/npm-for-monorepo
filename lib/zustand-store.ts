import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const usePkgStore = create(
    persist(
        (set, get) => ({
            packageManager: "pnpm",
            command: "add",
            setPackage: (item: "pnpm" | "yarn" | "npm") => {
                if (item === "pnpm") set({ command: "add" })
                if (item === "yarn") set({ command: "add" })
                if (item === "npm") set({ command: "install" })
                return set({ packageManager: item })
            },
            flag: "",
            setFlag: (item: string) => set({ flag: item }),
            arg: "",
            setArg: (item: string) => set({ arg: item }),
        }),
        {
            name: 'package', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)