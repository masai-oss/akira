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
  Button
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./DeleteAsset.module.css";

class DeleteAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // We will need this Asset ID to verify if the asset is available to delete or not.
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
    // console.log("date");
  };

  render() {
    const { data } = this.state;
    // console.log(this.state.data);
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Delete Asset
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
                    <TableCell align="center" component="th" scope="row">
                      Serial No:
                    </TableCell>
                    <TableCell align="center">{data.serialNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Brand:
                    </TableCell>
                    <TableCell align="center">{data.brand}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Model:
                    </TableCell>
                    <TableCell align="center">{data.model}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Category:
                    </TableCell>
                    <TableCell align="center">{data.category}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                label="Date of Deletion"
                format="dd/MM/yyyy"
                // value={purchaseDate}
                onChange={this.handleDateChange}
                fullWidth
              />
            </MuiPickersUtilsProvider>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" color="primary">
                Delete Asset
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
export default connect()(DeleteAsset);
