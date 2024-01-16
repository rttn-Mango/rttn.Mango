import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const LoadingContext = createContext();

export default function LoadingContextProvider({children}){
    const [loading, setLoading] = useState(true);

    return(
        <LoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}

LoadingContextProvider.propTypes = {
    children: PropTypes.node
}