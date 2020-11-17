import React, { useState, createContext, useContext } from 'react';
import { ROUTES } from 'utility';

const INIT_STATE = {
    activeRoute: ROUTES.ABOUT
};

export const routes = [
    'about',
    'projects.musico',
    'projects.game_night',
    'projects.trippy',
    'blog'
];

export const ActiveRouteContext = createContext(INIT_STATE);

export const useActiveRoute = () => {
    return useContext(ActiveRouteContext);
};

function ActiveRouteProvider(props) {
    const { children } = props;

    const [activeRoute, setActiveRoute] = useState(INIT_STATE.activeRoute);

    const setNextRoute = () => {
        if (activeRoute === routes[routes.length - 1]) return;
        const routeIndex = routes.indexOf(activeRoute);
        setActiveRoute(routes[routeIndex + 1]);
    };

    const setPreviousRoute = () => {
        if (activeRoute === routes[0]) return;
        const routeIndex = routes.indexOf(activeRoute);
        setActiveRoute(routes[routeIndex + - 1]);
    };

    const getNextRoute = () => {
        if (activeRoute === routes[routes.length - 1]) return null;
        const routeIndex = routes.indexOf(activeRoute);
        return routes[routeIndex + 1];
    };

    const getPreviousRoute = () => {
        if (activeRoute === routes[0]) return null;
        const routeIndex = routes.indexOf(activeRoute);
        return routes[routeIndex + - 1];
    };

    return (
        <ActiveRouteContext.Provider
            value={{ activeRoute, setActiveRoute, setNextRoute, setPreviousRoute, getNextRoute, getPreviousRoute }}
        >
            {children}
        </ActiveRouteContext.Provider>
    );
}

export default ActiveRouteProvider;
