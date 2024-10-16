import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { CircleX, ShoppingCart, Trash2, UserIcon } from "lucide-react";
import { useShallow } from 'zustand/react/shallow';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ChangeQtyButtons } from "./ChangeQtyButtons";
import { useStore } from "@/store/store";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect } from "react";

export function User() {

    const { setAddress, address, fullName, userName, fetchUser } = useStore(
        useShallow((state) => ({
            fullName: state.fullName,
            userName: state.userName,
            address: state.address,
            setAddress: state.setAddress,
            fetchUser: state.fetchUser
        }))
    );

    useEffect(() => {
        async function fetchData() {
            await fetchUser();
        }

        fetchData();
    }, [])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon">
                    <UserIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="overflow-y-scroll space-y-2 w-96">
                <div className="flex items-center gap-2">
                    <p>{fullName}</p>
                    <p className="text-sm">{userName}</p>
                </div> 

                <Label htmlFor="address">Your Address</Label>   
                <Input 
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />   
            </PopoverContent>
        </Popover>
    )
}