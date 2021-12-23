import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";


const AdminGuardedRoute = () => {
    const { isAdmin } = useAuthContext();

    return isAdmin ? <Outlet /> : <Navigate to="/" />
}

export default AdminGuardedRoute;