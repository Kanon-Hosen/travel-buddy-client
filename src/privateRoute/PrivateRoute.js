import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import { auth } from '../config/Firebase';

const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if (user) {
        return children;
    }
    return <Navigate to='/login' replace state={{from: location}}></Navigate>
};

export default PrivateRoute;