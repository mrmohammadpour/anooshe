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
  padding:'15px',
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

{/* =======start function======= */}  


const Bolukhalf= () => {
  const [value, setValue] = React.useState(null);
  const classes = useStyle();
  return (
    <div className={classes.roothalf}>
        <div className={classes.Bolukhalf}>
          <Box sx={{ display: 'flex', justifyContent: 'right' }}>
              <Box sx={{ ...commonStyles, borderLeft: 0 }}>
{/*========= title ============ */}  

                <Box className={classes.botitlehalf} sx={{ display: 'flex',p: 1,m: 1, }}>
                  <Item className={classes.titlehalf}> ثبت پروژه های جدید</Item> 
                </Box>

 {/* input 1 */}     
              <Box className={classes.botitlehalf} sx={{ display: 'flex',p: 1,m: 1, }}>
                <Item className={classes.bobohalf}> </Item>
              </Box>
              <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                  <Box >
                    <Item className={classes.iconboxhalf}><FormatListNumberedIcon  className={classes.icontexhalf}/></Item>     
                  </Box>
                  <Box className={classes.tothalf} gridColumn="span 2">
                    <Item className={classes.boxtohalf}><typography>شماره بلوک</typography></Item>
                  </Box>
                  <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                    <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="شماره بلوک را وارد کنید" /></Item>
                  </Box>
                </Box>
              </Box>

     

{/* name boluke */}  
              <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                  <Box >
                    <Item className={classes.iconboxhalf}><DriveFileRenameOutlineIcon  className={classes.icontexhalf}/></Item>     
                  </Box>
                  <Box className={classes.tothalf} gridColumn="span 2">
                    <Item className={classes.boxtohalf}><typography>نام بلوک</typography></Item>
                  </Box>
                  <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                    <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="نام بلوک  را وارد کنید" /></Item>
                  </Box>
                </Box>
              </Box>




{/* tip boluke */}  
            <Box sx={{ width: 1 }}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box >
                  <Item className={classes.iconboxhalf}><PrivacyTipIcon  className={classes.icontexhalf}/></Item>     
                </Box>
                <Box className={classes.tothalf} gridColumn="span 2">
                  <Item className={classes.boxtohalf}><typography>تیپ بلوک</typography></Item>
                </Box>
                <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                  <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="تیپ بلوک را وارد کنید" /></Item>
                </Box>
              </Box>
            </Box>

      
{/* tedad tabagheh */}  
          <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box >
                <Item className={classes.iconboxhalf}><DynamicFeedIcon  className={classes.icontexhalf}/></Item>     
              </Box>
              <Box className={classes.tothalf} gridColumn="span 2">
                <Item className={classes.boxtohalf}><typography>تعداد طبقات</typography></Item>
              </Box>
              <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="تعداد طبقات را وارد کنید" /></Item>
              </Box>
            </Box>
          </Box>

      
{/*  tedad vahed */}  
          <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box >
                <Item className={classes.iconboxhalf}><ControlPointDuplicateIcon  className={classes.icontexhalf}/></Item>     
              </Box>
              <Box className={classes.tothalf} gridColumn="span 2">
                <Item className={classes.boxtohalf}><typography>تعدادواحد</typography></Item>
              </Box>
              <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="تعداد واحد را وارد کنید" /></Item>
              </Box>
            </Box>
          </Box>

      
{/* metrazh mofid */}  
          <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box >
                <Item className={classes.iconboxhalf}><CameraRearIcon  className={classes.icontexhalf}/></Item>     
              </Box>
              <Box className={classes.tothalf} gridColumn="span 2">
                <Item className={classes.boxtohalf}><typography>متراژ مفید</typography></Item>
              </Box>
              <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="متراژ مفید واحد را وارد کنید." /></Item>
              </Box>
            </Box>
          </Box>


      
{/* metrazh nakhales */}  
                <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box >
                        <Item className={classes.iconboxhalf}><ViewCarouselIcon  className={classes.icontexhalf}/></Item>     
                      </Box>
                      <Box className={classes.tothalf} gridColumn="span 2">
                        <Item className={classes.boxtohalf}><typography>متراژناخالص</typography></Item>
                      </Box>
                      <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                        <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="متراژ ناخالص را وارد کنید." /></Item>
                      </Box>
                    </Box>
                  </Box>
{/* tedade anbari */}  
                  <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box >
                        <Item className={classes.iconboxhalf}><WarehouseIcon  className={classes.icontexhalf}/></Item>     
                      </Box>
                      <Box className={classes.tothalf} gridColumn="span 2">
                        <Item className={classes.boxtohalf}><typography>تعدادانباری</typography></Item>
                      </Box>
                      <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                        <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="تعداد انباری را وارد کنید" /></Item>
                      </Box>
                    </Box>
                  </Box>

      
{/* tedad parking */}  
                <Box sx={{ width: 1 }}>
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box >
                      <Item className={classes.iconboxhalf}><LocalParkingIcon  className={classes.icontexhalf}/></Item>     
                    </Box>
                    <Box className={classes.tothalf} gridColumn="span 2">
                      <Item className={classes.boxtohalf}><typography>تعداد پارکینگ</typography></Item>
                    </Box>
                    <Box className={classes.codhalf} gridColumn="span 2" component="form" noValidateautoComplete="off">
                      <Item className={classes.boxtohalf}><Input className={classes.lineinhalf}  placeholder="تعداد پارکینگ را وارد کنید" /></Item>
                    </Box>
                  </Box>
                </Box>
{/* =======button record & delate======= */}  

                <Stack direction="row"   sx={{ mx:15 , my:5  }}>
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
export default Bolukhalf;




