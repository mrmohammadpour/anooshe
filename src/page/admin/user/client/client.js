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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import Avatar from '@mui/material/Avatar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';


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

const Client= () => {
  const [value, setValue] = React.useState(new Date());
  const classes = useStyle();
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };




  return (
    <div className={classes.root}>
        <div className={classes.Boluk}>
          
          <Box sx={{  }}>
           <Box sx={{ display: 'flex', justifyContent: 'right' ,}}>
            <Box className={classes.bohi} sx={{ ...commonStyles,}}>
              <Box  sx={{ display: 'flex'}}>
                <Item className={classes.bobo}> </Item>
                <Stack direction="row" >
                   <Avatar className={classes.pic} src="/broken-image.jpg" />

                


                    <label htmlFor="icon-button-file">
                    <Item className={classes.iconupload} > 
                             <Input accept="image/*" id="icon-button-file" type="file" />
                     </Item>
                        <IconButton  aria-label="upload picture" component="span">
                        <PhotoCamera className={classes.iconcamra} /> 
                      </IconButton>
                    </label>
                </Stack>

              </Box>  

              <Box className={classes.botitle} sx={{ display: 'flex', mt:2 ,}}>
                <Item className={classes.title} sx={{ mt:5 , }}> تصویرخودرا آپلود کنید</Item> 
              </Box>  

            
         


     <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', pt:3 ,pb:3}}>   
        <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
          <FormGroup className={classes.textlab} >
            <FormControlLabel   control={<Switch defaultChecked />} label="" />
            <typography  className={classes.textlab2} >حقوقی </typography> 
          </FormGroup>
        </Box> 
        <Box className={classes.relfamel} sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 ,pr:5 ,mr:6}} >
        <typography className={classes.textfamel} sx={{pt:4 }} >آقا </typography>     
          <Radio  sx={{ ml:1 }} 
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
         <typography className={classes.textman} sx={{  }} >خانم </typography> 
          <Radio sx={{ mr:1 }} 
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
        </Box>
 </Box>

{/* =============input1=========== */}
          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><QrCode2Icon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>کدملی</typography></Item>     
                <Item sx={{mb:5 ,pr:5.4  }}  className={classes.boxin}><TextField className={classes.textinput} id="standard-basic" label="کدملی خود را وارد کنید" variant="standard" /></Item>
                <Item className={classes.boxico}>
                   {/* <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><BadgeIcon  className={classes.icontex}/></Item>
                  <Item sx={{m:1 }} className={classes.boxto}><typography>شماره همراه</typography></Item>     
                  <Item sx={{mb:5 ,pr:5.2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="نام پروژه را وارد کنید." /></Item>
                  <Item className={classes.boxico}>
                </Item>
              </Box>
          </Box>
          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><EngineeringIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>نام     </typography></Item>     
                <Item sx={{mb:5 ,pr:8.4}}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="نام مجری پروژه را وارد کنید" /></Item>
                <Item className={classes.boxico}>
                </Item>
              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><EngineeringIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>نام خانوادگی</typography></Item>     
                <Item sx={{mb:5 , pr:5.2}}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="نام مجری پروژه را وارد کنید" /></Item>
                <Item className={classes.boxico}>
                </Item>
              </Box>
          </Box>
          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><ControlPointDuplicateIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>تاریخ تولد</typography></Item>     
                <Item sx={{mb:5 }}  className={classes.boxin}><Input sx={{mb:0}}  className={classes.textinput} placeholder="تعداد بلوک ها را وارد کنید." /></Item>
                <Item className={classes.boxico}>
                  {/*   <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><LibraryAddIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>نام پدر</typography></Item>     
                <Item sx={{mb:5  , pr:10.9 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="تعداد واحد را وارد کنید." /></Item>
                <Item className={classes.boxico}>
                 {/*    <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
          </Box>
          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><ControlPointDuplicateIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>کد پستی</typography></Item>     
                <Item sx={{mb:5 , pr:2.2 }}  className={classes.boxin}><Input sx={{mb:0}}  className={classes.textinput} placeholder="تعداد بلوک ها را وارد کنید." /></Item>
                <Item className={classes.boxico}>
                  {/*   <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><LibraryAddIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>شماره تلفن ثابت</typography></Item>     
                <Item sx={{mb:5 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="تعداد واحد را وارد کنید." /></Item>
                <Item className={classes.boxico}>
                 {/*    <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
          </Box>
          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                <Item className={classes.iconbox}><LibraryAddIcon  className={classes.icontex}/></Item>
                <Item sx={{m:1 }} className={classes.boxto}><typography>آدرس</typography></Item>     
                <Item sx={{mb:5  , pr:5.2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="آدرس را واحد کنید." /></Item>
                <Item className={classes.boxico}>
                 {/*    <CancelIcon  className={classes.colorgr}/>
                    <CheckCircleIcon className={classes.colorre}/>*/}
                </Item>
              </Box>
          </Box>
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
export default Client;




