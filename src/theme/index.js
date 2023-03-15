import * as React from 'react';

import {createMuiTheme} from "@material-ui/core";
import { green, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import tinyColor from 'tinycolor2';

const colorPrimary = "#5ea9dd";

const Theme = createTheme({

    palette: {
      primary: {
        main: colorPrimary,
        light: tinyColor(colorPrimary).lighten().toHexString()
      }
    },

  typography: {
    fontFamily: 'IRANSans !important' ,
  },



     MuiListItem: {
      button: {
        fontFamily: 'IRANSans !important',
      }
    },
    MuiInputBase : {
      placeholder: {
        fontFamily:'IRANSans !important',
      }
    },
     MuiButton: {
      label: {
        fontFamily:'IRANSans !important',
      }
    }

  
})

export default Theme;