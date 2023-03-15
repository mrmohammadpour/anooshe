import react, { useState }  from 'react';
import useStyle from './Styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import { display, typography } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/Key';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: 'white',
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover .icon': {
    backgroundColor: 'red',
    display: 'block!important'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Tablee= ({rows,header,...props}) => {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyle();

  return (
    <div className={classes.roothalf}>
      <div className={classes.borderbohalf}>
          <div className={classes.tablehalf}>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead >
                    <TableRow  >
                      {header.map((head,index) => (
                        <StyledTableCell className={classes.boxheadhalf}>{head}</StyledTableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row , index) => (
                      <StyledTableRow key={row.name} className={classes.hoverteshalf} >
                          <StyledTableCell className={classes.texttablehalf} component="th" scope="row">
                            {++index}
                          </StyledTableCell>
                          <StyledTableCell className={classes.texttablehalf} align="right">{row.display_name} </StyledTableCell>
                          <StyledTableCell className={classes.texttablehalf} align="right">{row.nationalCode}</StyledTableCell>
                          <StyledTableCell className={classes.texttablehalf} align="right">{row.usermeta.birthday}</StyledTableCell>
                          <StyledTableCell className={classes.texttablehalf} align="right">{row.usermeta.fathers_name}</StyledTableCell>                  
                          <StyledTableCell className={classes.texttablehalf} align="right">{row.usermeta.phone}</StyledTableCell>                  
                          <StyledTableCell className={classes.texttablehalf} align="right">{row.phoneNumber}</StyledTableCell>                  
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
          </div>
      </div>  
    </div>
  );
};
export default Tablee;



