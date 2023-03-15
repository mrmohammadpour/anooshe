import {makeStyles} from "@mui/styles";
const useStyles = makeStyles({
  root: {
    
    direction:'rtl',    
    fontFamily: 'IRANSans !important',  

  },
/*================  **Login**   =====================*/

textpic:{
  height:'auto !important',
  color:'#fff',
  fontSize:'18px !important',
  textShadow:'5px 5px 5px #000',
  backgroundImage:'url(pic1.jpg)',
},
fildname:{
  fontFamily: 'IRANSansDigit !important',
  left: '67% !important',
  fontSize:'18px !important',
  textShadow:'1px 1px 1px #ccc',
},
fild:{
  fontFamily: 'IRANSansDigit !important',
  left: '83% !important',
  fontSize:'18px !important',
  textShadow:'1px 1px 1px #ccc',
},
boxlink:{
  textDecoration:'none !important',
  color:'#6d6d6a',
  },
bgsabt:{
  paddingLeft:'5px !important',
  fontFamily:'IRANSans !important',
  fontSize:'19px !important',
  background:'#749314 !important',
  color: '#fff !important',
},
sabt:{
  display:'none',
},
textlogin:{
  fontFamily: 'IRANSans !important',
  fontSize:'18px !important',
  fontWeight:'700 !important',
  textShadow:'1px 1px 1px #ccc',
},
textwel:{
  color:'#6d6d6a',
  fontSize:'14px !important',
  fontWeight:'400 !important',
  textShadow:'1px 1px 1px #ccc',
  fontFamily: 'IRANSans !important',
},
bglogin:{
  height:'85vh',
  borderRadius:'35px 0px 0px 35px !important',
  background:'#f6f7fe !important',
},
bgtext:{
  height:'85vh',

  background:'#fff !important',
},
errorBox: {
  color:"red" , 
  top:"-5px" ,
  left:"0px",
  position:"absolute" , 
  fontSize:"12px"
                        
},
});


export default useStyles;
