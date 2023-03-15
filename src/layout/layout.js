import react from'react';
// import Rightbar from'../rightbar/Rightbar.js';
// import Leftbar from'../leftbar/leftbar.js';
import useStyle from './Style';
import Box from '@mui/material/Box';
// import Table from '../component/table/Table.js';
// import Tablee from '../component/table/Table.js';
// import Boluk from '../component/boluk/boluk.js';
// import Listvahed from '../component/listvahed/listvahed.js';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Header from '../page/menu/header/Header.js';
// import Datauser from '../users/userdata/datauser.js';
// import Projeh from '../component/projeh/Projeh.js';
// import Tablehalf from '../component/table/Tablehalf.js';
// import Projehhalf from '../component/projeh/Projehhalf.js';
// import Bolukhalf from '../component/boluk/bolukhalf.js';
// import Login from '../../page/login/Login.js';
// import Fourty from '../../page/404/404.js';
import Sidebar from "../page/menu/sidebar/Sidebar";
const 
Layout=(props) =>{
  const classes = useStyle();
    return (
      <div className={classes.root} >
        <Header></Header>
        <Box sx={{display: 'flex',flexDirection: 'row-reverse',}}>
            <Box sx={{flex:1,}}> <Sidebar /> </Box>
            <Box sx={{flex:5.8,}}>
              {props.children}   
            </Box>
        </Box>

    </div>
  );
};
export default Layout;