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
  Button,
  TextField
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./ReturnAsset.module.css";

class ReturnAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // We will need this Asset ID to verify if the asset is available to return or not.
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
    this.setState({ data });
    // console.log(data);
  }

  handleDateChange = () => {
    //   console.log(date)
  };

  render() {
    const { data } = this.state;
    // console.log(this.state.data);
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Return Asset
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
                src={data.picture}
                alt={data.serialNumber}
                className={styles.picture}
              />
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell align="left" component="th" scope="row">
                      Serial No:
                    </TableCell>
                    <TableCell align="left">{data.serialNumber}</TableCell>
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
                      Category:
                    </TableCell>
                    <TableCell align="left">{data.category}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                label="Date of Return"
                format="dd/MM/yyyy"
                // value={purchaseDate}
                onChange={this.handleDateChange}
                fullWidth
              />
            </MuiPickersUtilsProvider>

            <Box
              display="flex"
              flexDirection="column"
              p={1}
              m={1}
              justifyContent="center"
            >
              <TextField
                id="remarks"
                label="Remarks"
                type="text"
                variant="outlined"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" color="primary">
                Return Asset
              </Button>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}
export default connect()(ReturnAsset);
