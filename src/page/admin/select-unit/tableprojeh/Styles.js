import {makeStyles} from "@mui/styles";
const useStyles = makeStyles({
  root: {
    fontFamily:'IRANSansDigit !important',
    direction:'rtl !important',
    background:'#fff',
    marginTop:'10px',
    borderRadius:'25px',

  },
  borderbo:{
    padding:'35px',
    border:'1px solid #ccc',
    borderRadius:'25px',
    boxShadow:'1px 1px 10px 8px #e9f5c3',

  },
 table: {
   background:'#e9e9e9',
   borderRadius:'22px',
  },
  divv:{
    background:'#ccc',
    padding: '10px',
    position:'relative',
   
  },
  boxhead:{
    background:'#ffffff !important', 
    color:'#a8a9a6 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'14px !important',
    fontWeight:'400 !important',
    borderBottom:'2px solid rgb(166 200 62) !important',
    textAlign:'center !important',
    paddingTop:'10px !important',
    textShadow:'2px 2px 2px #ccc',

  },
  texttable:{
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'15px !important',
    fontWeight:'400 !important',
    textAlign:'center !important',
    textShadow:'2px 2px 2px #ccc',
  },
  title:{
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'18px !important',
    fontWeight:'400 !important',
    borderBottom:'2px solid rgb(166 200 62) !important',
    textAlign:'center !important',
    textShadow:'2px 2px 2px #ccc',
    paddBottom:'5px !important',
    marginLeft:'25% !important',
  },
  bordti:{
    borderBottom:'2px solid rgb(166 200 62) !important',
    width:'80px',
    marginBottom:'20px',
    marginRight:'45.5%',
    marginTop:'10px'
  },
  tex:{
    marginBottom:'0px !important',
  },
  boxtitle:{
    background:'#a6c83e',
    width:'110px',
    height:'25px',
    borderRadius:'10px',
    fontFamily:'IRANSansDigit !important',
    fontSize:'12px !important',
    fontWeight:'500 !important',
    textAlign:'center !important',
    textShadow:'2px 2px 2px #ccc',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  texejad:{
  },
  boxtotal:{
    display: 'flex',
    direction:'row-reverse !important',

  },
  trhover:{
    display: 'none !important'
  },
  line:{
    background:'#000',
    width:'2px',
    height:'15px',
  },
  boxlink:{
    textDecoration:'none !important',
    color:'#000',
    },


//===============================================  start tablehalf  ===========================================//

roothalf: {
  fontFamily:'IRANSansDigit !important',
  padding:'10px',
  direction:'rtl !important',
  marginTop:'10px',
  borderRadius:'25px',

},
borderbohalf:{
},
tablehalf: {
 background:'#e9e9e9',
 borderRadius:'22px',
 
},

boxheadhalf:{
  background:'#ffffff !important', 
  color:'#a8a9a6 !important',
  fontFamily:'IRANSansDigit !important',
  fontSize:'14px !important',
  fontWeight:'400 !important',
  borderBottom:'2px solid rgb(166 200 62) !important',
  textAlign:'center !important',
  paddingTop:'10px !important',
  textShadow:'2px 2px 2px #ccc',

},
texttablehalf:{
  color:'#222222 !important',
  fontFamily:'IRANSansDigit !important',
  fontSize:'15px !important',
  fontWeight:'400 !important',
  textAlign:'center !important',
  textShadow:'2px 2px 2px #ccc',
},
titlehalf:{
  color:'#222222 !important',
  fontFamily:'IRANSansDigit !important',
  fontSize:'18px !important',
  fontWeight:'400 !important',
  borderBottom:'2px solid rgb(166 200 62) !important',
  textAlign:'center !important',
  textShadow:'2px 2px 2px #ccc',
  paddBottom:'5px !important',
  marginLeft:'25% !important',
},
bordtihalf:{
  borderBottom:'2px solid rgb(166 200 62) !important',
  width:'80px',
  marginBottom:'20px',
  marginRight:'45.5%',
  marginTop:'10px'
},
texhalf:{
  marginBottom:'0px !important',
},
boxtitlehalf:{
  background:'#a6c83e',
  width:'110px',
  height:'25px',
  borderRadius:'10px',
  fontFamily:'IRANSansDigit !important',
  fontSize:'12px !important',
  fontWeight:'500 !important',
  textAlign:'center !important',
  textShadow:'2px 2px 2px #ccc',
  justifyContent: 'center',
  alignSelf: 'center',

},
texejadhalf:{
},
boxtotalhalf:{
  display: 'flex',
  direction:'row-reverse !important',

},
trhoverhalf:{
  display: 'none !important'
},
linehalf:{
  background:'#000',
  width:'2px',
  height:'15px',
},
boxlinkhalf:{
  textDecoration:'none !important',
  color:'#000',
  position:'absolute',
  },
boxedit:{

  position:'absolute',
  top:'-70px',
  right:'10px',
  },

boxlbook:{
  position:'absolute',  
  top:'20px',
  left:'-30px',
  },

boxdelete:{
  position:'absolute', 
  top:'-70px',
  left:'50px',
  },

boxkey:{
  position:'absolute', 
  top:'-70px',
  left:'30px',
  },

boxlock:{
  position:'absolute',  
  top:'-70px',
  left:'90px',
  },
  boxconta:{
    position:'relative',  
    top:'-70px',
    left:'70px',
    },
});

export default useStyles;
