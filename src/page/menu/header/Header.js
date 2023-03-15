import react from'react';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import useStyle from './Styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Header=() =>{
  const classes = useStyle();
    return (
<div className={classes.root}>
  <div className={classes.heade}>
      <Box sx={{display: 'flex',}}>
            <Box sx={{flex:3,flexDirection: 'row-reverse',}}>
              <Stack className={classes.headimg} >
                  <img className={classes.logoImg} src={"./images/logo-cut-all.png"} />
              </Stack>
            </Box>
            <Grid className={classes.boxtext}  direction={"row-reverse"} alignItems={'center'}>
                {/* <Grid item pt={.5} pl={.9}  >
                    <Typography className={classes.texttnx}>
                   خوش آمدید آقای
                  </Typography>
                </Grid>
                <Grid item pt={.5} pl={.9} border-radius={12}  >
                  <Typography className={classes.textname}>
                  حسین محمدپور
                  </Typography>
                </Grid> */}
            </Grid>
            <Box  className={classes.float}>
                <Avatar className={classes.borderImg} sx={{ bgcolor: 'success.main' }}>
                <Avatar className={classes.bg12} sx={{  }}>N</Avatar>

                </Avatar>
            </Box>
      </Box>
     
  </div>
</div>
);
 };
export default Header;
// <div className={classes.root}>
//   <div className={classes.heade}>
//
//   </div>
// </div>




