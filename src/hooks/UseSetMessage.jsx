import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

export const ShowNotifContext = createContext(null);

export default function ShowNotifProvider({children}){
    const [showNotif, setShowNotif] = useState(false);

    return(
        <ShowNotifContext.Provider value={{showNotif, setShowNotif}}>
            {children}
        </ShowNotifContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShowNotifProvider() {
    const context = useContext(ShowNotifContext);

    if(!context) {throw new Error('ShowNotif Context should be used within ShowNotifProvider');}

    return context;
}

ShowNotifProvider.propTypes = {
    children: PropTypes.any
}