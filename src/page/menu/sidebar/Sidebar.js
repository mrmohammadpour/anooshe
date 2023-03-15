import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import useStyle from './Styles';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import {  BiChevronsLeft } from "react-icons/bi";
import {  BiMenuAltRight } from "react-icons/bi";
import {  BiLogOutCircle } from "react-icons/bi";
import {  BiLeftIndent } from "react-icons/bi";
import {  BiLayer } from "react-icons/bi";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Sidebarroute from '../../../api/auth/sidebarroutr';
import Listunit from '../../admin/select-unit/list_unit/list_unit';
import Selectclient from '../../admin/user/selectcelient/selectclient';
import Tablehalf from '../../../component/table/Tablehalf';
import Tableprojeh from '../../admin/select-unit/tableprojeh/table';
export default function Sidebar() {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  return (
<div className={classes.root}>
  <div className={classes.ghab}>
    <Box className={classes.boxdash} >
        <Box className={classes.icondash}>
            <AccountBalanceIcon />
        </Box>
        <Box>
            <span className={classes.textdash} >داشبورد</span>
        </Box>
      </Box>
     <Sidebarroute>
    <List
      sx={{ width: '100%', maxWidth: 360,  }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>}>
        <ListItemButton className={classes.hab} onClick={handleClick}>
            <TaskIcon className={classes.icon}/>
            <span className={classes.text} >ثبت پروژه ها</span>
            <ListItemText />
            {open ? <ExpandLess className={classes.icon} /> : <ExpandMore />}
        </ListItemButton>
    <Link to="tableproject" className={classes.boxlink}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.box} component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} pl={4}>
            <ListItemIcon className={classes.boxicon}>
              < BiChevronsLeft  className={classes.icontwo}/>
              <span className={classes.texttwo} >جدول پروژه ها</span>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
      </Link>
    <Link to="Projeh" className={classes.boxlink}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.box} component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} pl={4}>
            <ListItemIcon className={classes.boxicon}>
              <BiLogOutCircle  className={classes.icontwo}/>
              <span className={classes.texttwo} >ثبت پروژه جدید</span>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </Link>
    <Link to="boluk" className={classes.boxlink}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.box} component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} pl={4}>
            <ListItemIcon className={classes.boxicon}>
              <BiLeftIndent  className={classes.icontwo}/>
              <span className={classes.texttwo} >ثبت بلوک</span>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </Link>
    <Link to="Listunit" className={classes.boxlink}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.box} component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} pl={4}>
            <ListItemIcon className={classes.boxicon}>
              <BiLayer  className={classes.icontwo}/>
              <span className={classes.texttwo} >لیست واحدها</span>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </Link>
    <Link to="leftbar" className={classes.boxlink}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.box} component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} pl={4}>
            <ListItemIcon className={classes.boxicon}>
              <BiMenuAltRight  className={classes.icontwo}/>
              <span className={classes.texttwo} >لفت بار</span>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </Link>
    <ListItemButton className={classes.hab} onClick={handleClick1}>
            <ContactMailIcon className={classes.icon}/>
            <span className={classes.text} >کاربران</span>
            <ListItemText />
            {open1 ? <ExpandLess className={classes.icon} /> : <ExpandMore />}
        </ListItemButton>
        <Link to="Selectclient" className={classes.boxlink}>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List className={classes.box} component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} pl={4}>
            <ListItemIcon className={classes.boxicon}>
              <BiLayer  className={classes.icontwo}/>
              <span className={classes.texttwo} >ثبت کاربران</span>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </Link>
    <Link to="leftbar" className={classes.boxlink}>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List className={classes.box} component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} pl={4}>
            <ListItemIcon className={classes.boxicon}>
              <BiMenuAltRight  className={classes.icontwo}/>
              <span className={classes.texttwo} >لیست کاربران</span>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </Link>


    <ListItemButton className={classes.hab} onClick={handleClick}>
            < MonetizationOnIcon  className={classes.icon}/>
            <span className={classes.text} >مالی</span>
            <ListItemText />
            {open ? <ExpandLess className={classes.icon} /> : <ExpandMore />}
        </ListItemButton>
   </List>
   </Sidebarroute>
  </div>
</div>
  );
}
