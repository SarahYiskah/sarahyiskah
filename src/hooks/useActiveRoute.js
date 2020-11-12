import { useState } from 'react';
import { ROUTES } from 'utility';


function useActiveRoute() {
    const [activeRoute, setActiveRoute] = useState(ROUTES.ABOUT);
    return [activeRoute, setActiveRoute];
}

export default useActiveRoute;