import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectIsloggedIn } from "../auth/login/loginSlice";

const ProtectedRoute: React.FC<any> = ({children}) => {
    const isLoggedIn = useAppSelector(selectIsloggedIn);
    let location = useLocation();
    if(!isLoggedIn ) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    return children
};

export default ProtectedRoute;