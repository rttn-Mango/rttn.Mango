import { useContext } from "react";
import { HoverContentContext } from "../context/HoverContentContext";

export default function useHoverContentContext(){
    const context = useContext(HoverContentContext);

    if(!context) throw new Error("useHoverContentContext must be used inside a HoverContentContextProvider.")
    return context
}