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

const Projeh= () => {
  const [value, setValue] = React.useState(new Date());

  const classes = useStyle();
  return (
    <div className={classes.root}>
        <div className={classes.Boluk}>
<Box sx={{  }}>
          <Box sx={{ display: 'flex', justifyContent: 'right' ,}}>
            <Box sx={{ ...commonStyles, borderLeft: 0 }}>
              <Box className={classes.botitle} sx={{ display: 'flex',p: 1,m: 1, }}>
                <Item className={classes.title}> ثبت پروژه های جدید</Item> 
              </Box>
              <Box className={classes.botitle} sx={{ display: 'flex',p: 1,m: 1, }}>
                <Item className={classes.bobo}> </Item>
              </Box>              
{/* =============input1=========== */}
{/*
            <Box sx={{ width: 1 ,  mt: 1  }}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box sx={{mt: 1}}>
                  <Item className={classes.iconbox}><QrCode2Icon  className={classes.icontex}/></Item>     
                </Box>
                <Box sx={{mt: 1}} className={classes.tot} gridColumn="span 1">
                  <Item className={classes.boxto}><typography>کدپروژه</typography></Item>
                </Box>
                <Box   className={classes.cod} gridColumn="span 3" component="form" noValidateautoComplete="off">
                  <Item  className={classes.boxin}><Input   className={classes.textinput} placeholder="کدپروزه را وارد کنید." /></Item>
                </Box>
                <Box sx={{pt: 1 ,mt: .5 }} gridColumn="span 2">
                  <Item className={classes.boxico}>
                  <CancelIcon  className={classes.colorgr}/>
                  <CheckCircleIcon className={classes.colorre}/>
                  </Item>
                </Box>
              </Box>
            </Box>
 */}
          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><QrCode2Icon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>کدپروژه</typography></Item>     
                <Item sx={{mb:5 }}  className={classes.boxin}><Input sx={{mb:0}}  className={classes.textinput} placeholder="کدپروژه را وارد کنید." /></Item>
                <Item className={classes.boxico}>
                   {/* <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><BadgeIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>نام پروژه</typography></Item>     
                <Item sx={{mb:5 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="نام پروژه را وارد کنید." /></Item>
                <Item className={classes.boxico}>
                  {/*  <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
                
              </Box>
          </Box>

          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><CalendarTodayIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>تاریخ شروع</typography></Item>     
                <Item sx={{mb:5 }}  className={classes.boxin}>
                  <LocalizationProvider dateAdapter={AdapterJalali}>
                    <DatePicker
                      mask="____/__/__"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Item>
              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><EngineeringIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>اجراکننده</typography></Item>     
                <Item sx={{mb:5 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="نام مجری پروژه را وارد کنید" /></Item>
                <Item className={classes.boxico}>
                 {/*    <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
          </Box>

          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><ControlPointDuplicateIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>تعدادبلوک</typography></Item>     
                <Item sx={{mb:5 }}  className={classes.boxin}><Input sx={{mb:0}}  className={classes.textinput} placeholder="تعداد بلوک ها را وارد کنید." /></Item>
                <Item className={classes.boxico}>
                  {/*   <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><LibraryAddIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>تعدادواحد</typography></Item>     
                <Item sx={{mb:5 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="تعداد واحد را وارد کنید." /></Item>
                <Item className={classes.boxico}>
                 {/*    <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
          </Box>
{/* input2 
            <Box sx={{ width: 1 ,  mt: 0  }}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box sx={{mt: 1}}>
                  <Item className={classes.iconbox}><BadgeIcon  className={classes.icontex}/></Item>     
                </Box>
                <Box sx={{mt: 1}} className={classes.tot} gridColumn="span 1">
                  <Item className={classes.boxto}><typography>نام پروژه</typography></Item>
                </Box>

                <Box   className={classes.cod} gridColumn="span 3" component="form" noValidateautoComplete="off">
                  <Item  className={classes.boxin}><Input  className={classes.textinput}  placeholder="نام پروژه را وارد کنید." /></Item>
                </Box>
                <Box sx={{pt: 1 ,mt: .5 }} gridColumn="span 2">
                  <Item className={classes.boxico}>
                  <CancelIcon  className={classes.colorgr}/>
                  <CheckCircleIcon className={classes.colorre}/>
                  </Item>
                </Box>
              </Box>
            </Box>
*/}
{/* date 


      <Box sx={{ width: 1 ,  mt: 1  }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" >
        <Box >
            <Item className={classes.iconbox}><CalendarTodayIcon  className={classes.icontex}/></Item>     
          </Box>
          <Box className={classes.tot} gridColumn="span 1">
            <Item className={classes.boxto}><typography>تقویم </typography></Item>
          </Box>
          <Box sx={{pr:4 }} className={classes.cod} gridColumn="span 3" component="form" noValidateautoComplete="off">

          <LocalizationProvider dateAdapter={AdapterDateFns} display="grid">
            <Stack spacing={1}>
                <DatePicker label="تاریخ" 
                 readOnly value={value}
                 onChange={(newValue) =>
                {  setValue(newValue); }}renderInput={(params) => <TextField {...params} />} />
            </Stack>
          </LocalizationProvider>
          </Box>
        </Box>
      </Box>  
*/}
{/* input3 
            <Box sx={{ width: 1 ,  mt: 2  }}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box sx={{mt: 1}}>
                  <Item className={classes.iconbox}><EngineeringIcon  className={classes.icontex}/></Item>     
                </Box>
                <Box sx={{mt: 1}} className={classes.tot} gridColumn="span 1">
                  <Item className={classes.boxto}><typography>اجراکننده</typography></Item>
                </Box>

                <Box   className={classes.cod} gridColumn="span 3" component="form" noValidateautoComplete="off">
                  <Item  className={classes.boxin}><Input  className={classes.textinput}  placeholder="نام مجری پروژه را وارد کنید." /></Item>
                </Box>
                <Box sx={{pt: 1 ,mt: .5 }} gridColumn="span 2">
                  <Item className={classes.boxico}>
                  <CancelIcon  className={classes.colorgr}/>
                  <CheckCircleIcon className={classes.colorre}/>
                  </Item>
                </Box>
              </Box>
            </Box>
 */} 
          
{/* input4 
            <Box sx={{ width: 1 ,  mt: 2  }}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box sx={{mt: 1}}>
                  <Item className={classes.iconbox}><ControlPointDuplicateIcon  className={classes.icontex}/></Item>     
                </Box>
                <Box sx={{mt: 1}} className={classes.tot} gridColumn="span 1">
                  <Item className={classes.boxto}><typography>تعدادبلوک</typography></Item>
                </Box>

                <Box   className={classes.cod} gridColumn="span 3" component="form" noValidateautoComplete="off">
                  <Item  className={classes.boxin}><Input  className={classes.textinput}  placeholder=" تعداد بلوک را وارد کنید." /></Item>
                </Box>
                <Box sx={{pt: 1 ,mt: .5 }} gridColumn="span 2">
                  <Item className={classes.boxico}>
                  <CancelIcon  className={classes.colorgr}/>
                  <CheckCircleIcon className={classes.colorre}/>
                  </Item>
                </Box>
              </Box>
            </Box>
  */}          
{/* input5  
            <Box sx={{ width: 1 ,  mt: 1  }}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box sx={{mt: 1}}>
                  <Item className={classes.iconbox}><LibraryAddIcon  className={classes.icontex}/></Item>     
                </Box>
                <Box sx={{mt: 1}} className={classes.tot} gridColumn="span 1">
                  <Item className={classes.boxto}><typography>تعدادواحد</typography></Item>
                </Box>

                <Box   className={classes.cod} gridColumn="span 3" component="form" noValidateautoComplete="off">
                  <Item  className={classes.boxin}><Input  className={classes.textinput}  placeholder="تعداد واحد را وارد کنید." /></Item>
                </Box>
                <Box sx={{pt: 1 ,mt: .5 }} gridColumn="span 2">
                  <Item className={classes.boxico}>
                  <CancelIcon  className={classes.colorgr}/>
                  <CheckCircleIcon className={classes.colorre}/>
                  </Item>
                </Box>
              </Box>
            </Box>

        */}    

              <Stack direction="row"   sx={{ mx:45 , my:5  }}>
                  <Stack >
                    <Button className={classes.bgdel} variant="contained">
                      <img  id="frame" src={"/images/delate.png"} width="110px" /></Button>
                  </Stack>
                  <Stack sx={{pr: 2  }}>
                    <Button className={classes.bgsab} variant="contained">
                       <img  id="frame" src={"/images/sabt.png"} width="110px" /></Button>
                  </Stack>
                </Stack>



           



          </Box>
        </Box>



        </Box>
        </div>
    </div>
  );
};
export default Projeh;




