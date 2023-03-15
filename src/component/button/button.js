import * as React from 'react';
import useStyle from './Styles';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
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

const ariaLabel = { 'aria-label': 'description' };
const commonStyles = {
  bgcolor: 'background.paper',
  border: 1,
  m: 1,
  borderColor: 'rgb(181 181 181 / 87%)',
  borderRadius:'30px',
  background:'#fff',
  width:'100%',
  height:'84vh',
  padding:'15px',
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

{/*  start function project  */}

const Wlbutton= ({submit, exit,...props}) => {
  const [value, setValue] = React.useState(new Date());

  const classes = useStyle();
  return (
    <div className={classes.root}>
 
       
                      


                <Stack direction="row"  >
                  <Stack sx={{mt:.2}} >
                    <Button className={classes.bgdel} variant="contained">
                      <img  id="frame" src={"/images/delate.png"} width="110px" />{exit}</Button>
                  </Stack>
                  <Stack sx={{pr: 2  }}>
                    <Button className={classes.bgsab} variant="contained"{...props}>
                       <img  id="frame" src={"/images/sabt.png"} width="110px" />{submit}</Button>
                  </Stack>
                </Stack>



           




    </div>
  );
};
export default Wlbutton;




