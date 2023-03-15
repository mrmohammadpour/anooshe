import * as React from 'react';
import useStyle from './Styles';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { typography } from '@mui/system';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Calendar } from "react-multi-date-picker";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import BadgeIcon from '@mui/icons-material/Badge';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AdapterJalali from '@date-io/date-fns-jalali';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Theme from '../../theme/index';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';

{/*  start function project  */}


const Wlsearch= ({name,lastname, ...props}) => {
  const [value, setValue] = React.useState(new Date());
  const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const classes = useStyle();
  return (
    <div className={classes.root}> 
     <CacheProvider value={cacheRtl}> 
      <ThemeProvider  theme={Theme }>
          <TextField  xs={2} id="outlined-basic" dir="rtl" variant="outlined" {...props} fullWidth label={name}/>
      </ThemeProvider>
      </CacheProvider>
    </div>
  );
};
export default Wlsearch;




