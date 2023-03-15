import { useNavigate } from 'react-router';

import { Navigate, Outlet } from 'react-router-dom';
import Authen from "./authentication";



// console.log(authen);
const Sidebarroute = ({ children }) => {
    const navigate = useNavigate();
  return Authen() ? children : '';
}


export default Sidebarroute ;