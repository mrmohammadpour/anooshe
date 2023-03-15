import React from 'react';
import { Box } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
// import Leftbar from './components/leftbar/leftbar';
// import Rightbar from './components/rightbar/Rightbar';
// import Fourty from './page/404/404';
import Login from '../page/auth/login/login';
import * as jwt from 'jsonwebtoken';

import { Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Projeh from '../page/admin/select-unit/project/Projeh';
import Boluk from '../page/admin/select-unit/boluk/boluk';
import Bolukhalf from '../page/admin/select-unit/boluk/bolukhalf';
import Projehhalf from '../page/admin/select-unit/project/Projehhalf';
import Layout from '../layout/layout';
import Dashboard from '../page/admin/dashboard/dashboard';
import PublicRoute from '../api/auth/publicroute';
import PrivateRoute from '../api/auth/privateroute';
import Listunit from '../page/admin/select-unit/list_unit/list_unit';
import Tablehalf from '../component/table/Tablehalf';
import Wlsearch from '../component/search/search';
import Client from '../page/admin/user/client/client';
import Clienthalf from '../page/admin/user/client/clienthalf';
import Datauser from '../page/admin/user/userdata/datauser';
import Datauserhalf from '../page/admin/user/userdata/datauserhalf';
import Fifty from '../component/fifty-fifty/fifty';
import Wl_input from '../component/input/input';
import Selectclient from '../page/admin/user/selectcelient/selectclient';
import Tablee from '../component/table/table';
import Wlbutton from '../component/button/button';
import Tableproject from '../page/admin/select-unit/tableprojeh/table';
// import Listvahed from './components/component/listvahed/listvahed';
// import Boluk from './page/admin/select-unit/boluk';
// import Bolukhalf from './page/admin/select-unit/bolukhalf';
// import Projeh from './page/admin/select-unit/Projeh';
// import Projehhalf from './page/admin/select-unit/Projehhalf';
// import { Class1, Class2 } from './components/component/Button/Test';

const Wl_route = () => {
  const navigate = useNavigate();

  return (
    
    <Layout>
      <Routes>
        {/* <Route exact path="/login" component={Login} /> */}

      </Routes>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/boluk" element={<PrivateRoute><Boluk /></PrivateRoute>} />
        <Route path="/bolukhalf" element={<PrivateRoute><Bolukhalf /></PrivateRoute>} />
        <Route path="/projehhalf" element={<PrivateRoute><Projehhalf /></PrivateRoute>} />
        <Route path="/listunit" element={<PrivateRoute><Listunit /></PrivateRoute>} />
        <Route path="/tablehalf" element={<PrivateRoute><Tablehalf /></PrivateRoute>} />
        <Route path="/wlsearch" element={<PrivateRoute><Wlsearch /></PrivateRoute>} />
        <Route path="/client" element={<PrivateRoute><Client /></PrivateRoute>} />
        <Route path="/clienthalf " element={<PrivateRoute><Clienthalf /></PrivateRoute>} />
        <Route path="/datauser " element={<PrivateRoute><Datauser /></PrivateRoute>} />
        <Route path="/datauserhalf " element={<PrivateRoute><Datauserhalf /></PrivateRoute>} />
        <Route path="/fifty" element={<PrivateRoute><Fifty /></PrivateRoute>} />
        <Route path="/input" element={<PrivateRoute><Wl_input /></PrivateRoute>} />
        <Route path="/selectclient" element={<PrivateRoute><Selectclient /></PrivateRoute>} />
        <Route path="/table" element={<PrivateRoute><Tablee /></PrivateRoute>} />
        <Route path="/button" element={<PrivateRoute><Wlbutton /></PrivateRoute>} />
        <Route path="/tableproject" element={<PrivateRoute><Tableproject /></PrivateRoute>} />

        {/* <Route path="/class1" element={<PrivateRoute><Class1 /></PrivateRoute>} /> */}
        {/* <Route path="/class2" element={<PrivateRoute><Class2 /></PrivateRoute>} /> */}

        <Route path="*" element={<Projeh />} />
      </Routes>
    </Layout>

  );
}

export default Wl_route;