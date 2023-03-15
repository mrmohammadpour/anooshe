import * as React from 'react';
import useStyle from './Styles';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { typography } from '@mui/system';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Input from '@mui/material/Input';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import BadgeIcon from '@mui/icons-material/Badge';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
{/* =======consts======= */}  

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

{/* =======start function======= */}  


const Boluk= () => {
  const [value, setValue] = React.useState(null);
  const classes = useStyle();
  return (
    <div className={classes.root}>
        <div className={classes.Boluk}>
          <Box sx={{ display: 'flex', justifyContent: 'right' }}>
              <Box sx={{ ...commonStyles, borderLeft: 0 }}>
{/*========= title ============ */}  

                <Box className={classes.botitle} sx={{ display: 'flex',p: 1,m: 1, }}>
                  <Item className={classes.title}> ثبت بلوک جدید</Item> 
                </Box>

 {/* input 1 */}    


          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',mt:3 }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item  sx={{pr:15,}} className={classes.iconbox}><FormatListNumberedIcon  className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>شماره بلوک</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="شماره بلوک خود را وارد کنید." /></Item>
              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item className={classes.iconbox}><DriveFileRenameOutlineIcon  className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>نام بلوک</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="نام بلوک خود را وارد کنید." /></Item>
              </Box>
          </Box>

{/* name boluke */}  


          <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item className={classes.iconbox}><PrivacyTipIcon  className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>تیپ بلوک</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="تیپ بلوک خود را وارد کنید." /></Item>

              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item className={classes.iconbox}><DynamicFeedIcon  className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>تعداد طبقات</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="تعداد طبقات بلوک را وارد کنید." /></Item>

              </Box>
          </Box>



{/* tip boluke */}  

            <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item className={classes.iconbox}><ControlPointDuplicateIcon   className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>تعداد واحد</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="تعداد واحد هر طبقه را وارد کنید." /></Item>

              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item className={classes.iconbox}><CameraRearIcon  className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>متراژ مفید</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="متراژ مفید واحدتان را وارد کنید." /></Item>

              </Box>
          </Box>
      
{/*  tedad vahed */}  

            <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item className={classes.iconbox}><ViewCarouselIcon   className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>متراژ ناخالص</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="متراژ ناخالص واحد را وارد کنید." /></Item>

              </Box>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item className={classes.iconbox}><WarehouseIcon  className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>تعداد انباری</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="تعداد انباری را وارد کنید." /></Item>

              </Box>
            </Box>

      
{/* metrazh nakhales */}  
          
            <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper', }}>
              <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
                  <Item className={classes.iconbox}><LocalParkingIcon  className={classes.icontex}/></Item>
                  <Item className={classes.boxto}><typography>تعداد پارکینگ</typography></Item>
                  <Item sx={{mb:2 }}  className={classes.boxin}><Input sx={{mb:0 }}  className={classes.textinput} placeholder="تعداد پارکینگ را وارد کنید." /></Item>

              </Box>
        
            </Box>
      
{/* tedad parking */}  

{/* =======button record & delate======= */}  

                <Stack direction="row"   sx={{ mx:45 , my:5  }}>
                  <Stack >
                    <Button className={classes.bgdel} variant="contained">
                      <img  id="frame" src={"/images/delate.png"} width="110px" /></Button>
                  </Stack>
                  <Stack sx={{pr: 2  }}>
                    <Button className={classes.bgsab} variant="contained"> <img  id="frame" src={"/images/sabt.png"} width="110px" /></Button>
                  </Stack>
                </Stack>

              </Box>
           </Box>
        </div>
    </div>
  );
};
export default Boluk;




