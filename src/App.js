import './App.css';
import { ThemeProvider ,createTheme } from '@mui/styles';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';

import Theme from './theme/index';
import Checkbox from '@mui/material/Checkbox';
import Buutton from './component/button/button';
import Chart from './component/chart/chart';
import Icon from './component/icon/icon';
import Input from './component/input/input';
import Tablee from './component/table/table';
import Wl_route from './route/route';

function App() {
  return (
    <div className="App" >
      <ThemeProvider  theme={Theme }>

        <Wl_route></Wl_route>

       </ThemeProvider>
    </div >
  );
}

export default App;
