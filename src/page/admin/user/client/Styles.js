import { filledInputClasses } from "@mui/material";
import {makeStyles} from "@mui/styles";
import { resolvePath } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    fontFamily:'IRANSansDigit !important',
    direction:'rtl !important',
    padding:'15px',   
  },
    bohi:{
      height:'auto',
    },
  title:{
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'18px !important',
    fontWeight:'400 !important',
    textAlign:'center !important',
    textShadow:'2px 2px 2px #ccc',
    marginRight:'40% !important',
    boxShadow:'0px 0px 0px #fff !important',
    margin:'0px !important',
    padding:'0px !important',

  },

  bobo:{
    boxShadow:'0px 0px 0px #fff !important',
    marginRight:'30% !important',
    borderRadius: '0px !important',
    width:'110px',
    margin:'0px !important',
    padding:'0px !important',
    paddingTop:'10px !important',
    marginBottom:'10px !important',
  },
  pic:{
    width:'130px !important',
    height:'130px !important',
    position:'relative',
    border:'5px double #fff',
    boxShadow: '0px 0px 2px #000'
  },
  iconupload:{
    display:'none',
  },
  icontex:{
    fontSize:'30px !important',
    paddingTop:'4px',
    paddingLeft:'0px',
    
  },
  iconbox:{
    width:'40px',
    height:'40px',
    borderRadius:"60px !important",
    padding:'0px !important',

    boxShadow:'0px 0px 4px 1px #a6c83e !important',
  },
  boxto:{
    boxShadow:'0px 0px 0px #fff !important',
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'18px !important',
    fontWeight:'400 !important',
    textAlign:'right !important',
    textShadow:'2px 2px 2px #ccc',
    marginTop:'0rem !important',
    padding:'2px !important',
    paddingTop:'16px !important',
  },

  boxico:{
    borderRadius:"1px !important",
    border:'0px 0px 0px 0px #fff !important',
    boxShadow:'0px 0px 0px #fff !important',
    color:'#222222 !important',
    marginTop:'.2rem !important',  
    marginRight:'rem !important',
    textAlign:'right !important',
    
  },

  boxin:{
    boxShadow:'0px 0px 0px #fff !important',
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'28px !important',
    fontWeight:'400 !important',  
    paddingTop:'0px !important',
    paddingBottom:'0px !important',
  },
  textinput:{
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'14px !important',
    fontWeight:'400 !important',    
    textAlign:'right !important',
    direction:'rtl !important',
  },
  cod:{
    paddingTop:'0px !important',
    paddingBottom:'0px !important',
  },
  variant:{
    background:'red',
  },
  bgdel:{
    fontFamily:'IRANSansDigit !important',
    background:'#fff !important',
    padding:'0px !important',
    boxShadow:'1px 1px 12px 1px #fff !important',
  },
 bgsab:{
  fontFamily:'IRANSansDigit !important',
  background:'#fff !important',
  padding:'0px !important',
  boxShadow:'1px 1px 12px 1px #fff !important',
  },
  img:{
    marginBottom:'1px !important',
    marginTop:'1px !important',
    paddingTop:'1px !important',
    paddingBottom:'1px !important',
  },
  iconcamra:{
    position:'absolute',
    fontSize:'2rem !important',
    color:'#fff', 
    top:'85px',
    right:'-30px',
    background:'#a6c83e',
    borderRadius:'7px ',
    boxShadow:'1px 1px 3px #b5b5b5',
  },

  // *************************** start projehhalf ******************************//

  roothalf: {
    fontFamily:'IRANSansDigit !important',
    direction:'rtl !important',
    padding:'15px',  


  },
    bohihalf:{
      display:'grid',
      gridTemplateColumns :'repeat(auto-fill, minmax(400 , 1fr))',
      gridTemplateRows :'repeat(auto-fill, minmax(200 , 1fr))',
      background:'#000',
    },
  titlehalf:{
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'18px !important',
    fontWeight:'400 !important',
    textShadow:'2px 2px 2px #ccc',
    marginRight:'11% !important',
    boxShadow:'0px 0px 0px #fff !important',
    margin:'0px !important',
    padding:'0px !important',

  },

  bobohalf:{
    boxShadow:'0px 0px 0px #fff !important',
    marginRight:'0% !important',
    borderRadius: '0px !important',
    width:'110px',
    margin:'0px !important',
    padding:'0px !important',
    paddingTop:'10px !important',
    marginBottom:'10px !important',
  },
  pichalf:{
    width:'130px !important',
    height:'130px !important',
    position:'relative',
    border:'5px double #fff',
    boxShadow: '0px 0px 2px #000'
  },
  iconuploadhalf:{
    display:'none',
  },
  icontexhalf:{
    fontSize:'30px !important',
    paddingTop:'4px',
    paddingLeft:'0px',
    
  },
  iconboxhalf:{
    width:'40px',
    height:'40px',
    borderRadius:"60px !important",
    margin:'0px !important',
    padding:'0px !important',
    marginRight:'1rem !important',
    marginTop:'.5rem !important',
    boxShadow:'0px 0px 4px 1px #a6c83e !important',
  },
  boxtohalf:{
    boxShadow:'0px 0px 0px #fff !important',
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'18px !important',
    fontWeight:'400 !important',
    textAlign:'right !important',
    textShadow:'2px 2px 2px #ccc',
    marginTop:'0rem !important',
    padding:'2px !important',
    paddingTop:'16px !important',
  },

  boxicohalf:{
    borderRadius:"1px !important",
    border:'0px 0px 0px 0px #fff !important',
    boxShadow:'0px 0px 0px #fff !important',
    color:'#222222 !important',
    marginTop:'.2rem !important',  
    marginRight:'rem !important',
    textAlign:'right !important',
    
  },

  boxinhalf:{
    boxShadow:'0px 0px 0px #fff !important',
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'28px !important',
    fontWeight:'400 !important',  
    paddingTop:'0px !important',
    paddingBottom:'0px !important',
  },
  textinputhalf:{
    color:'#222222 !important',
    fontFamily:'IRANSansDigit !important',
    fontSize:'14px !important',
    fontWeight:'400 !important',    
  },
  codhalf:{
    paddingTop:'0px !important',
    paddingBottom:'0px !important',
  },
  varianthalf:{
    background:'red',
  },
  bgdelhalf:{
    fontFamily:'IRANSansDigit !important',
    background:'#fff !important',
    padding:'0px !important',
    boxShadow:'1px 1px 12px 1px #fff !important',
  },
 bgsabhalf:{
  fontFamily:'IRANSansDigit !important',
  background:'#fff !important',
  padding:'0px !important',
  boxShadow:'1px 1px 12px 1px #fff !important',
  },
  imghalf:{
    marginBottom:'1px !important',
    marginTop:'1px !important',
    paddingTop:'1px !important',
    paddingBottom:'1px !important',
  },
  iconcamrahalf:{
    position:'absolute',
    fontSize:'2rem !important',
    color:'#fff', 
    top:'85px',
    right:'-30px',
    background:'#a6c83e',
    borderRadius:'7px ',
    boxShadow:'1px 1px 3px #b5b5b5',
  },
  bgdel:{
    fontFamily:'IRANSansDigit !important',
    background:'#fff !important',
    padding:'0px !important',
    boxShadow:'1px 1px 12px 1px #fff !important',
  },
 bgsab:{
  fontFamily:'IRANSansDigit !important',
  background:'#fff !important',
  padding:'0px !important',
  boxShadow:'1px 1px 12px 1px #fff !important',
  },

  iconsahalf:{
    fontFamily:'IRANSansDigit !important',
    fontSize:'35px !important',
    fontWeight:'100 !important',
    paddingBottom:'6px !important',
    paddingRight:'20px !important',
    textShadow:'2px 1px 3px  #ccc !important',
    position:'absolute',
    right:'33px',
    bottom:'5px',
    color:'#fff',
  },
  textlab:{
    position:'relative',
  },
  textlab2:{
    position:'absolute',
    right:'4.4rem',
    top:'5px',
  },
  relfamel:{
    position:'relative',
  },
  relman:{
    position:'relative',
  },
  textman:{
    position:'absolute',
    right:'1rem',
    top:'7px',
  },
  textfamel:{
    position:'absolute',
    right:'5.7rem',
    top:'7px',
  },




  ccc:{
    display:'subgrid', 
  },
























});

export default useStyles;
