import * as React from 'react';
import useStyle from './Styles';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Input from '@mui/material/Input';

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

const Wl_input= ({component,name,...props}) => {
  const [value, setValue] = React.useState(new Date());

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Box sx={{display: 'flex',flexDirection: 'row',bgcolor: 'background.paper',flex:1 }} >
        <Item  sx={{pr:15,}} className={classes.iconbox}>{component}</Item>
        <Item className={classes.boxto}><typography>{name}</typography></Item>
        <Item sx={{mb:2 }}  className={classes.boxin}>
          <Input sx={{mb:0 }}  className={classes.textinput} {...props} />
        </Item>
      </Box>
    </div>
  );
};
export default Wl_input;




