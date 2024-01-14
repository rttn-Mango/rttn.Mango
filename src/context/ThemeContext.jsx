import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}){
    const [changePalette, setChangePalette] = useState(false);

    return(
        <ThemeContext.Provider value={{changePalette, setChangePalette}}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node
}