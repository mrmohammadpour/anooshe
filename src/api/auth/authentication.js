import * as jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router';

import { Navigate, Outlet } from 'react-router-dom';



const Authen = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");
    const decoded = jwt.decode(token, { complete: true });
  if (token) {
    const decoded = jwt.decode(token, { complete: true });
    const dateNow = Math.round(+new Date() / 1000);
    const dateexp = decoded.payload.exp;
    if (dateexp < dateNow) {
      console.log(dateexp + ' | ' + dateNow);
      console.log('no');
      localStorage.clear();
      navigate("/login", { replace: true });
      return false;
    } else {
      console.log(dateexp + ' | ' + dateNow);
      console.log('ok');
      return true;
    }
  } else {
    return false
  }
}

export default Authen ;
// if (decoded) {
//   function getArraysIntersection(a1, a2) {
//     return a1.filter(function (n) { return a2.indexOf(n) !== -1; });
//   }
//   const colors1 = ["ABOUT_MANAGER_MODIFY_ABOUT", "kala_MANAGER_DELETE_kala"];
//   const colors2 = decoded.payload.permissions;
//   const intersectingColors = getArraysIntersection(colors1, colors2);
//   // console.log(intersectingColors[1]);
// }