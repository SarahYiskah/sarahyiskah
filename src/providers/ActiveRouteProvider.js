import React, { useState, createContext, useContext } from 'react';
import { ROUTES } from 'utility';

const INIT_STATE = {
    activeRoute: ROUTES.ABOUT
};

export const ActiveRouteContext = createContext(INIT_STATE);

export const useActiveRoute = () => {
    return useContext(ActiveRouteContext);
};

function ActiveRouteProvider(props) {
    const { children } = props;

    const [activeRoute, setActiveRoute] = useState(INIT_STATE.activeRoute);

    return (
        <ActiveRouteContext.Provider value={{ activeRoute, setActiveRoute }}>
            {children}
        </ActiveRouteContext.Provider>
    );
}

export default ActiveRouteProvider;
