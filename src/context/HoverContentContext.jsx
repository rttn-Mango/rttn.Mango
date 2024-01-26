import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const HoverContentContext = createContext();

export default function HoverContentContextProvider({children}){
    const [hoverContent, setHoverContent] = useState({
        isHovered: false,
        elementToRender: null,
        shouldBeDisabled: false,
        height: 25,
        width: 25,
    });

    return(
        <HoverContentContext.Provider value={{hoverContent, setHoverContent}}>
            {children}
        </HoverContentContext.Provider>
    )
}

HoverContentContextProvider.propTypes = {
    children: PropTypes.node
}