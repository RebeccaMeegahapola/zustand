import { Store } from "@/types/store";
import { immer } from "zustand/middleware/immer"; //immer is a middleware provided by Zustand
import { createUserSlice } from "./userSlice";
import { create } from "zustand"; //This function initializes the Zustand store.

export const useStore = create<Store>()(
    immer((...a) => ({
        ...createUserSlice(...a),
    }))
);