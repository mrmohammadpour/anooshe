import { useNavigate } from 'react-router';

import { Navigate, Outlet } from 'react-router-dom';
import Authen from "./authentication";



// console.log(authen);
const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
  return Authen() ? children :   <Navigate to="/login" />;
}


export default PrivateRoute ;