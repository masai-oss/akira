import React, { Component } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TablePagination
} from "@material-ui/core";
import styles from "./ViewAsset.module.css";

function createData(itemUID, dateOfAssignment, dateOfReturn, assignedTo) {
  return { itemUID, dateOfAssignment, dateOfReturn, assignedTo };
}

const rows = [
  createData("1", "12/12/2002", "01/01/2003", "Piyush"),
  createData("2", "12/12/2002", "01/01/2003", "Piyush"),
  createData("3", "12/12/2002", "01/01/2003", "Piyush"),
  createData("4", "12/12/2002", "01/01/2003", "Piyush"),
  createData("5", "12/12/2002", "01/01/2003", "Piyush"),
  createData("6", "12/12/2002", "01/01/2003", "Piyush"),
  createData("7", "12/12/2002", "01/01/2003", "Piyush")
];

const data = {
  id: 1,
  serial_number: "124456",
  brand: "dell",
  model: "latitude",
  item_name: "laptop",
  cost: 5000,
  date_of_purchase: "24-10-2019",
  item_uid: "2364",
  picture: "static/img/ad.png",
  status: "available",
  category_id: 1,
  disposed_by: "Nikhil",
  disposal_date: "15-06-2505",
  assigned_to: "Piyush"
};

class ViewAsset extends Component {
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
          View Asset
        </Typography>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <img
              src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05966371.png"
              alt=""
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Typography variant="h6" component="h2">
            Asset Picture
          </Typography>
        </Grid>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Button variant="contained" color="primary">
              Edit Asset
            </Button>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="demo-simple-select-label">More</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="Assign"
              >
                <MenuItem value="Assign">Assign</MenuItem>
                <MenuItem value="Return">Return</MenuItem>
                <MenuItem value="Delete">Delete</MenuItem>
                <MenuItem value="Dispose">Dispose</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box className={styles.box}>
          <Typography variant="h6" component="h2">
            Asset Details
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Serial Number:
                  </TableCell>
                  <TableCell align="left">{data.serial_number}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Item Name:
                  </TableCell>
                  <TableCell align="left">{data.item_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Brand:
                  </TableCell>
                  <TableCell align="left">{data.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Model:
                  </TableCell>
                  <TableCell align="left">{data.model}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Cost:
                  </TableCell>
                  <TableCell align="left">{data.cost}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Date Of Purchase:
                  </TableCell>
                  <TableCell align="left">{data.date_of_purchase}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Category:
                  </TableCell>
                  <TableCell align="left">{data.category_id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Status:
                  </TableCell>
                  <TableCell align="left">{data.status}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" component="th" scope="row">
                    Assigned To:
                  </TableCell>
                  <TableCell align="left">{data.assigned_to}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box className={styles.box}>
          <Typography variant="h6" component="h2">
            History
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Assign Date</TableCell>
                  <TableCell align="left">Return Date</TableCell>
                  <TableCell align="left">Assigned To</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.itemUID}>
                    <TableCell component="th" scope="row">
                      {row.dateOfAssignment}
                    </TableCell>
                    <TableCell align="left">{row.dateOfReturn}</TableCell>
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
        </Box>
      </Container>
    );
  }
}

export default ViewAsset;
