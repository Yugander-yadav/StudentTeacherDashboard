import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,t1,t2,t3) {
  return { name,t1,t2,t3 };
}

const rows = [
  createData('Student 1',"Teacher 1","Teacher 2","Teacher 3" ),
  createData('Student 2',"Teacher 1","Teacher 2","Teacher 3" ),
  createData('Student 3',"Teacher 1","Teacher 2","Teacher 3" ),
  createData('Student 4',"Teacher 1","Teacher 2","Teacher 3" ),
  createData('Student 5',"Teacher 1","Teacher 2","Teacher 3" ),
];

export default function DenseTable(props) {

  return (
    <TableContainer style={{border:'1px solid black',margin:" 10px auto",padding:"10px"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Students</TableCell>
            <TableCell align="right">Student</TableCell>
            <TableCell align="right">Subject 1</TableCell>
            <TableCell align="right">Subject 2</TableCell>
            <TableCell align="right">Subject 3</TableCell>
            <TableCell align="right">
                Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row,index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.subone}</TableCell>
              <TableCell align="right">{row.subtwo}</TableCell>
              <TableCell align="right">{row.subthree}</TableCell>
              <TableCell align="right">
                
                {"  "}
                <button onClick={
                  ()=>{
                    
                 props.deleteRow(row.id,index)
                  }
                }>delete</button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

