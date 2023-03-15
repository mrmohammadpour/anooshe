import React, { useState } from 'react';
import useStyle from './Styles';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'; 
import Input from '@mui/material/Input';
import { Button, Grid } from '@mui/material';
import Client from '../../page/admin/user/client/client';
import Datauser from '../../page/admin/user/userdata/datauser';
import { typography } from '@mui/system';
import Clienthalf from '../client/clienthalf';
import { useDataDispatch, useDataState } from '../../context/user-information';
import { datagetuserApi } from '../../api/users';
import Tablehalf from '../table/Tablehalf';




function showDiv(elem) {
  var divsToCheck = ["BraveDiv", "CompassionateDiv"]; // Add to here to check more divs
  for (var i = 0; i < divsToCheck.length; i++) {
    if (divsToCheck[i] == elem) {
      document.getElementById(divsToCheck[i]).style.display = "block";
    } else {
      document.getElementById(divsToCheck[i]).style.display = "none";
    }
  }
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ariaLabel = { 'aria-label': 'description' };
const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'rgb(181 181 181 / 87%)',
  borderRadius:'30px',
  background:'#fff',
  width:'100%',
  padding:'5px',
};

  const Fifty = ({xs_right,xs_left,right,left}) => {
    const [visible, setVisible] = React.useState(false);
    const classes = useStyle();
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={xs_right}>
              <Item>
                  {right}
              </Item>
          </Grid>
          <Grid item xs={xs_left}>
              <Item>
                  {left} 
              </Item>
          </Grid>
        </Grid>


          
    </div>
  );
};


export default Fifty;

