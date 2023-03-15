import { useNavigate } from 'react-router';

import { Navigate, Outlet } from 'react-router-dom';
import Authen from "./authentication";


const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  return Authen() ? <Navigate to="/dashboard" /> :   children;
}

export default PublicRoute ;