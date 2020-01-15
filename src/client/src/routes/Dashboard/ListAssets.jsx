import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  TablePagination,
  Button,
  Box
} from "@material-ui/core";
import styles from "./ListAssets.module.css";

function createData(itemUID, itemName, assignedTo) {
  return { itemUID, itemName, assignedTo };
}

const rows = [
  createData("123456XYZ", "Laptop", "Piyush"),
  createData("123456ABC", "Laptop", "Karthik"),
  createData("123456BCDA", "Laptop", "Nikhil"),
  createData("123456BCDB", "Laptop", "Naga"),
  createData("123456BCDC", "Laptop", "Arunabh"),
  createData("123456BCDD", "Laptop", "Rohit"),
  createData("123456BCDSD", "Laptop", "Sumit")
];

class ListAssets extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChangePage = () => {
    // console.log("this")
  };

  handleChangeRowsPerPage = () => {
    // console.log("this")
  };

  render() {
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          List Of Assets
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Inventory Code</TableCell>
                <TableCell align="left">Item Name</TableCell>
                <TableCell align="left">Assigned To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.itemUID}>
                  <TableCell component="th" scope="row">
                    {row.itemUID}
                  </TableCell>
                  <TableCell align="left">{row.itemName}</TableCell>
                  <TableCell align="left">{row.assignedTo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={10}
          page={0}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary">
            Filter
          </Button>
          <Button variant="contained" color="primary">
            Sort
          </Button>
        </Box>
      </Container>
    );
  }
}

export default ListAssets;
