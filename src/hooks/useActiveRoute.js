import { useContext } from 'react';
import { ActiveRouteContext } from 'providers';

function useActiveRoute() {
    return useContext(ActiveRouteContext);
}

export default useActiveRoute;