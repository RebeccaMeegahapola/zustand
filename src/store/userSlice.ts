import { StateCreator } from "zustand";

type UserState = {
    userName: string;
    fullName: string;
    age: number;
    address: string;
};

type UserActions = { //This type defines the actions (functions) that will be available to modify the UserState.
    setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions; //this type combines both UserState and UserActions

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (
    set // set function is used to update the state
) => ({
    address: '',
    age: 0,
    fullName: '',
    userName: '',
    setAddress: (address) => 
        set((state) => { 
            state.address = address
        }) //updates the address field
});
