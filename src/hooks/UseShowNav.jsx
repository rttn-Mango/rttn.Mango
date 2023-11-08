import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

export const ShowNavContext = createContext(null);

export default function ShowNavProvider({children}) {
    const [showNav, setShowNav] = useState(false);

    return(
        <ShowNavContext.Provider value={{showNav, setShowNav}}>
            {children}
        </ShowNavContext.Provider>
    )
}

export function useShowNavProvider() {
    const context = useContext(ShowNavContext);

    if(!context) throw new Error('ShowNavContext should only be used inside the ShowNavProvider')

    return context;
}

ShowNavProvider.propTypes = {
    children: PropTypes.any,
}
