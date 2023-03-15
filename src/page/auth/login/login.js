import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useStyle from './Styles';
import { Typography } from '@mui/material';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { typography } from '@mui/system';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { loginApi } from "../../../api/auth.js";
import { useTranslation } from "react-i18next";
import * as jwt from 'jsonwebtoken';

//                     validation               //

import { useForm } from "react-hook-form";
import Tost from './Toaster/Tost';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import Datauser from '../admin/user/userdata/datauser';
//                      react-toastify           //


const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;
const Login = () => {
  const { t } = useTranslation();


  const classes = useStyle();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,

  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [tab, setTab] = useState(LOGIN_TAB_VALUE);

  //login state
  const [usernameLogin, setUsernameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();
  const [rememberMeLogin, setrememberMeLogin] = useState();

  const [disable, setDisable] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all",
  });

  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    console.log("data", data);
    console.log("e", e);
    setDisable(true)


    const user = {
      username: usernameLogin,
      password: passwordLogin,
      rememberMe: rememberMeLogin,
    };

    //   const error = validateLogin(user);
    //   if (error)
    //     return alert("نام کاربری یا رمز عبور شما خالی می باشد.");
    loginApi(user, (isOk, data) => {
      if (!isOk) {
        setDisable(false);
        // console.log('sdsd');
        return toast("نام کاربری یا رمز عبور اشتباه میباشد");
      }
      else {
        toast("به سامانه هوش خودکار انوشه خوش آمدید",);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("permissions", data.permissions);
        navigate("/dashboard", { replace: true });
        // window.location.reload();
      }
      
    })
    
    
    
    
  }
  
  // navigate("/dashboard", { replace: true });











  return (
    <div style={{ textAlign: "center" }} className={classes.root}>
      <div>
        <Tost />
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'row', mt: .3, }}>
        <Box className={classes.bgtext} sx={{ flex: 1, pt: 4 }}>
          <typography className={classes.textlogin} >صفحه ورود</typography>
          <br />
          <typography className={classes.textwel}>با سلام ! به هلدینگ انوشه خوش آمدید.</typography>
          <Box>
            <FormControl sx={{ m: 5, width: '30ch', mt: '1 !important' }} constiant="outlined">
              <InputLabel className={classes.fildname} htmlFor="name">نام کاربری</InputLabel>
              <Input id="name"
                {...register("name", {  required: true,
                  //  pattern: {
                  //   value: /^[,/0-9]+$/i
                  // },
                  maxLength: 11
                })}
                value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)}  />
              {errors.name && errors.name.type === "required" && <span className={classes.errorBox}>لطفا نام کاربری خود را وارد کنید.</span>}
              {errors.name && errors.name.type === "maxLength" && <span className={classes.errorBox}>کدملی نادرست است</span>}
              {errors.name && errors.name.type === "pattern" && <span className={classes.errorBox}>عدد وارد کنید</span>}
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, width: '30ch' }} constiant="outlined">
              <InputLabel className={classes.fild} htmlFor="password">رمز</InputLabel>
              <Input id="password"
                {...register("password", {

                  required: true,
                  minLength: 5


                })}
                type={values.showPassword ? 'text' : 'password'}

                endAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword} edge="start">
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>} label="رمز"
                value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)}
              />
              {errors.password && errors.password.type === "required" && <span className={classes.errorBox}>لطفا رمز خود را وارد کنید.</span>}
              {errors.password && errors.password.type === "minLength" && <span className={classes.errorBox}>رمز نادرست است.</span>}

            </FormControl>
          </Box>
          <Box sx={{ ml: 22, fontSize: '13px !important', fontWeight: 800, }}>
            <Link to="/Projeh" className={classes.boxlink}>
              <typography >فراموشی رمز عبور؟</typography>
            </Link>
          </Box>
          <Stack className={classes.sabt} sx={{ pr: 15, pl: 14.7, mt: 6 }}>
            <Button className={classes.bgsabt} constiant="contained" disabled={disable} onClick={handleSubmit(onSubmit)}>ورود </Button>
          </Stack>
        </Box>
        <Box className={classes.bglogin} sx={{ flex: 1, pt: 4 }}>
          <Typography className={classes.textlogin}> به سامانه هوشمند  خوش آمدید. </Typography>
          <Typography className={classes.textwel}> هلدینگ انبوه سازی انوشه  </Typography>
          <img id="frame" src={"/images/building_pu.png"} width="100%" />
        </Box>
      </Box>
    </div>
  );

};
export default Login;