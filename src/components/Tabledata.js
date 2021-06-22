
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'; 
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Data from '../EmployeeDataset.json';
import { render } from "@testing-library/react";

function CustomizedTables() {
  const [searchTerm, setSearchTerm] = useState("");
 
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const classes = useStyles();

var temp = {}
for (let{location} of Data)
temp[location] = {
  location,
  count: temp[location] ? temp[location].count + 1: 1
}

let result = Object.values(temp);

var sumSalary = result.map((m)=> {
  var mergeData = Data.filter(a1 => a1.location === m.location);
  let meanOfCurrSalary = 0;
  mergeData.forEach(d => {
    meanOfCurrSalary += Number(d.currSalary.replace(/[^0-9\.-]+/g,""))/m.count;

  })
  return meanOfCurrSalary;
}
)

  

  return (
    <div>
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => {setSearchTerm(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <a className="nav-link active" aria-current="page" ><Link to ="/Chart">ChartView</Link> </a>
      </form>
    </div>
  </nav>
  
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Location</StyledTableCell>
            <StyledTableCell align="left">Salary</StyledTableCell> 
        </TableRow>
        </TableHead>
        <TableBody >
        <StyledTableRow>
        <StyledTableCell align="center" key={result.index}>
        {result.filter((val)=>{
            if (searchTerm === "") {
              return val
            } else if (val.location.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((result, index) => (
            <StyledTableRow>
            <StyledTableCell align="center" key={result.index}>
            {result.location}
            </StyledTableCell>
            </StyledTableRow>
            ))} </StyledTableCell>
         <StyledTableCell align="left">
            {sumSalary.map((result, index) => (
            <StyledTableRow>
            <StyledTableCell align="left">
              {result}</StyledTableCell>    
              </StyledTableRow>
               ))}
            </StyledTableCell> 
            </StyledTableRow>      
      </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default CustomizedTables;