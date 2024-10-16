import { Store } from "@/types/store";
import { immer } from "zustand/middleware/immer"; //immer is a middleware provided by Zustand
import { createUserSlice } from "./userSlice";
import { create } from "zustand"; //This function initializes the Zustand store.
import { createCartSlice } from "./cart-slice";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
    devtools(
        persist(
            subscribeWithSelector(
                immer((...a) => ({
                    ...createUserSlice(...a),
                    ...createCartSlice(...a),
                }))
            ),
            {
                name: 'local-storage',
            } 
        ),     
    )
);