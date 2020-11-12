import { useState } from 'react';
import { ROUTES } from 'src/utility';


function useActiveRoute() {
    const [activeRoute, setActiveRoute] = useState(ROUTES.ABOUT);
    return [activeRoute, setActiveRoute];
}

export default useActiveRoute;