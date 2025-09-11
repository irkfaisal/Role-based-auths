import { getToken } from '../utils/auth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = getToken();
    return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute
