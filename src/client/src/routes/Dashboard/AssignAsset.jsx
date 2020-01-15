/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TextField,
  Button
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./AssignAsset.module.css";

class AssignAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignDate: new Date(Date.now()),
      expectedReturnDate: new Date(Date.now()),
      data: {}
    };
  }

  componentDidMount() {
    // We will need this Asset ID to verify if the asset is available to assign or not.
    // const {
    //   renderProps: {
    //     match: {
    //       params: { id }
    //     }
    //   }
    // } = this.props;
    const data = {
      serialNumber: "SM-G920I",
      brand: "Samsung",
      model: "Galaxy S6",
      category: "Electronics",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
    };
    const users = [
      {
        id: 1,
        name: "Karthik"
      },
      {
        id: 2,
        name: "Nikhil"
      }
    ];
    this.setState({ data, users });
  }

  handleDateChange = evt => {
    this.setState({ assignDate: evt });
  };

  render() {
    const {
      data: { picture, serialNumber, brand, model, category },
      data,
      users,
      assignDate,
      expectedReturnDate
    } = this.state;
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Assign Asset
        </Typography>
        {data ? (
          <>
            <Box
              display="flex"
              flexDirection="row"
              p={1}
              m={1}
              bgcolor="background.paper"
              justifyContent="space-around"
            >
              <img
                src={picture}
                alt={serialNumber}
                className={styles.picture}
              />
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Serial No:
                    </TableCell>
                    <TableCell align="center">{serialNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Brand:
                    </TableCell>
                    <TableCell align="center">{brand}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Model:
                    </TableCell>
                    <TableCell align="center">{model}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Category:
                    </TableCell>
                    <TableCell align="center">{category}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <form noValidate>
              <MuiPickersUtilsProvider
                utils={DateFnsUtils}
                className={styles.inputField}
              >
                <KeyboardDatePicker
                  margin="normal"
                  label="Date of Assign"
                  format="dd/MM/yyyy"
                  value={assignDate}
                  onChange={this.handleDateChange}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider
                utils={DateFnsUtils}
                className={styles.inputField}
              >
                <KeyboardDatePicker
                  margin="normal"
                  label="Expected Date of Return"
                  format="dd/MM/yyyy"
                  value={expectedReturnDate}
                  onChange={this.handleDateChange}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
              <Autocomplete
                options={users}
                getOptionLabel={option => option.name}
                style={{ width: "100%" }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Assign To"
                    variant="outlined"
                    fullWidth
                  />
                )}
                className={styles.inputField}
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}

export default connect()(AssignAsset);
