import * as React from 'react';
import useStyle from './Styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CheckIcon from '@mui/icons-material/Check';
import Client from '../client/client';
import Clienthalf from '../client/clienthalf';


const Input = styled('input')({
    display: 'none',
    fontFamily:'IRANSans !important',
    fontSize:'25px !mportant',
  });
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      fontFamily:'IRANSansDigit !important',
      fontSize:'25px !mportant',
    },
  },
};
const names = [
  'هشتگرد',
  'صفا بخش',
  'رباط کریم',
  'خادم آباد',
  'پاکدشت',
  'شمس آباد',
  'اسلامشهر',
  'شهر قدس',
  'شورآباد',
  'کهریزک',
];
const semats = [
    'مدیر ',
    ' مدیر حسابدار',
    'کارشناس ',
    ' کارشناس ارشد',
    ' پیمانکار',
    ' کارمند اداری',
    'کارمند اجرایی ',
    ' مدیر پروژه',

  ];
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
const Datauserhalf = () => {
  const classes = useStyle();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div className={classes.roothalf}>
        <div className={classes.borderbo}>



            <Accordion sx={{ m: 1, width: '590px' ,mr:2 , mt:3 , }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography className={classes.fontir}>اطلاعات فردی</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box component="form"sx={{'& .MuiTextField-root': { m: 2, width: '25ch' },}}noValidate autoComplete="off" >
                    <div className={classes.scroll} >
                      <Clienthalf></Clienthalf>
                    </div>
                    </Box>
                </AccordionDetails>
            </Accordion>



            <div>
                <FormControl sx={{ m: 1, width: '590px' , p:1 }}>
                    <InputLabel className={classes.fontir} id="demo-multiple-chip-label">دسته بندی ها</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="دسته بندی ها" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div>
            <div>                
                <FormControl sx={{ m: 1, width: '590px' , p:1 }}>
                    <InputLabel className={classes.fontir} id="demo-multiple-chip-label">سمت ها</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="دسته بندی ها" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => ( <Chip key={value} label={value} />))}
                        </Box>)}
                    MenuProps={MenuProps}
                    >
                    {semats.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div>
            <Stack className={classes.img} sx={{ m:1,  p:1 }} direction="row" alignItems="center"  >
              <img id="frame" src={"/images/entekhab.jpg"} width="80px" height="80px"/>
              <img id="frame" src={"/images/data.JFIF "} width="80px" height="80px"/>
              <img id="frame" src={"/images/datatwo.png"} width="80px" height="80px"/>
              <img id="frame" src={"/images/datathre.JFIF "} width="80px" height="80px"/>
            </Stack>
            <Stack className={classes.img} sx={{ mr:1,  p:1 }} direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                  <Input  accept="image/*" id="contained-button-file" multiple type="file" />
                  <Button   className={classes.bot}  variant="contained" component="span">
                  آپلود کردن مدارک
                  </Button>
                </label>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton  aria-label="upload picture" component="span">
                  <PhotoCamera className={classes.icon} /> 
                  </IconButton>
                </label>
            </Stack> 



            <Accordion sx={{ m: 1, width:'590px',mr:2 , mt:3 , }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography className={classes.fontir}>فعالیت ها</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box component="form" sx={{'& .MuiTextField-root': { m: 2, width: '25ch' },}}noValidate autoComplete="off" >

                    </Box>
                </AccordionDetails>
            </Accordion>





            <Accordion sx={{ m: 1, width: '590px',mr:2 , mt:3 , }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography className={classes.fontir}>تغییر و تایید رمز ورود</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box component="form"sx={{'& .MuiTextField-root': { m: 2, width: '35ch' },}}noValidate autoComplete="off" >
                    <Box sx={{  Width: '580px', m:2}}>
                      <TextField fullWidth label="رمز" id="fullWidth" />
                    </Box>
                    <Box className={classes.fontir} sx={{  Width: '100%', m:2}}>
                      <TextField  fullWidth label="رمز" id="fullWidth" />
                    </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Stack className={classes.sabt} sx={{pr: 2 , pl:2 }}>
              <Button className={classes.bgsabt} variant="contained">ثبت اطلاعات شخصی </Button>
            </Stack>
               




        </div>   
    </div>
  );
};
export default Datauserhalf;
