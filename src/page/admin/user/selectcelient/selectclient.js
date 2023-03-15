import React,{ useState,useEffect } from 'react';
import useStyle from './Styles';
import BadgeIcon from '@mui/icons-material/Badge';
import { experimentalStyled as styled } from '@mui/material/styles';
import Wl_input from '../../../../component/input/input';
import Fifty from '../../../../component/fifty-fifty/fifty';
import Tablee from '../../../../component/table/Tablehalf';
import Wlbutton from '../../../../component/button/button';
import Datauser from '../userdata/datauser';
import { datauserApi,datagetuserApi} from '../../../../api/users';
import Wlsearch from '../../../../component/search/search';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

//  *** START FUNCTION PAGE *** //
const Selectclient= () => {








  
  const [state , setstate] = useState();
  const [rows , setrows] = useState([]);
  const [take , settake] = useState(10);
  const [skip , setskip] = useState(0);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, page_value) => {
    
    let testPage = (page_value - 1)*10;
    datagetuserApi((isOk,data) => {
      if (!isOk){
            return alert('no table');
      }else{ 
          console.log(data);

          setrows(data)
          return 0;}
        }, {
          skip:testPage,
          take:10
        });
        setPage(page_value);
  console.log(rows);
  };
  const classes = useStyle();

  const searchclick=()=>{
    const searchcodenatinal=document.getElementById('searchcodenatinal');
    const params = {
      nationalCode: searchcodenatinal.value,
    };
    console.log(params);
    datagetuserApi((isOk,data) => {
      if (!isOk){
            return alert('موجود نیست');
      }else{
          setrows(data)
          return 0;
      }
      },params);
  } 

  const onclickState=()=>{
    const Name =document.getElementById('name');
    const LastName = document.getElementById('lastname');
    const NationalCode = document.getElementById('codenatinal');
    const CodeSend = document.getElementById('codesend');
    
   const  user ={
     nationalCode : NationalCode.value,
     phoneNumber : CodeSend.value,
     firstName: Name.value,
     lastName: LastName.value,
     username: NationalCode.value,
     password: CodeSend.value,
     roles: [1]
   }
   datauserApi(user,(isOk,data) => {
     if (!isOk) {
         return alert(data);
     }else {
       // useEffect(() => {
         datagetuserApi((isOk,data) => {
           if (!isOk){
                 return alert('no table');
           }else{ 
               setrows(data)
               return 0;
           }
           });
      //  }, []);
     }
   });
  }
// console.log(page);
 useEffect(() => {
  datagetuserApi((isOk,data) => {
    if (!isOk){
          return alert('no table');
    }else{ 
        setrows(data)
        return 0;
    }
  }, {
      skip:0,
      take:10
    });
 }, []);

  return (
    <div className={classes.root}>

     <Fifty
  right={
      <>            
        <Wl_input id={'name'} name={"نام "} placeholder={"نام خودرا وارد کنید"}  component={<BadgeIcon className={classes.icontex} />} />
        <Wl_input id={'lastname'} name={"نام خانوادگی "} placeholder={"نام خانوادگی خود راوارد کنید."}  component={<BadgeIcon className={classes.icontex} />} />
        <Wl_input id={'codenatinal'} name={"کدملی "} placeholder={"کدملی را وارد کنید."}  component={<BadgeIcon className={classes.icontex} />} />
        <Wl_input id={'codesend'} name={"کد پستی "} placeholder={"کدپستی خود را وارد کنید"}  component={<BadgeIcon className={classes.icontex} />} />
        <Stack sx={{pr: 3 ,pl:3 }}>
          <Button onClick={()=>onclickState()} className={classes.bgsab} variant="contained">
           ثبت اطلاعات کاربر</Button>
        </Stack>
      </>
}
   left={
        <>
{/* *** Start box search *** */}

        <Grid container spacing={0}> 
          <Grid item xs={6}>
            <Wlsearch id={'searchcodenatinal'} name={'جست وجوی کدملی'}/>
          </Grid>
          <Grid item xs={6}>
            <Wlsearch name={'جستوجوی نام خانوادگی'}/>
            </Grid>
        </Grid>
        <Stack sx={{pr: 1 ,pl:1 }}>
          <Button onClick={()=>searchclick()} className={classes.bgsab} variant="contained">
           شخص مورد نظر جستوجو شود</Button>
        </Stack>

        {/* *** Start box table *** */}

          <Tablee data={rows} page={page} header={['درس','حمید','مجید','عمق','کلاس','ردیف']}/>

        {/* *** Start box pageion *** */}

        

      <Stack  sx={{pr:10 }} >

                <Pagination onChange={handleChange} page={page}  count={6} variant="outlined" />

      </Stack>

        </>
        
          }
          xs_right={6}
          xs_left={6}
        />
      </div>
  );
};
export default Selectclient;




