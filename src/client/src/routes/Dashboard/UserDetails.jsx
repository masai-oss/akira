import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from "@material-ui/core";

import styles from "./UserDetails.module.css";
import axios from "../../utils/axiosInterceptor";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // We will need this ID to make an API call for the particular user.
    const {
      renderProps: {
        match: {
          params: { id }
        }
      }
    } = this.props;

    axios.get(`/users/${id}`).then(response =>
      this.setState({
        data: response.data.data
      })
    );

    // const data = {
    //   username: "Karthikeyan",
    //   title: "XYZ",
    //   reportingTo: "Nikhil",
    //   gender: "Male",
    //   age: 20,
    //   phoneNumber: 123456,
    //   address: "1-2-3 ABC",
    //   picture:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
    // };
    // this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          User Details
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
                alt={data.first_name}
                className={styles.picture}
              />
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Name:
                    </TableCell>
                    <TableCell align="center">{data.first_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Gender:
                    </TableCell>
                    <TableCell align="center">{data.gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Age:
                    </TableCell>
                    <TableCell align="center">{data.age}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Title:
                    </TableCell>
                    <TableCell align="center">{data.title}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Reporting To:
                    </TableCell>
                    <TableCell align="center">{data.reporting_to}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Phone Number:
                    </TableCell>
                    <TableCell align="center">{data.phone_no}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      Address:
                    </TableCell>
                    <TableCell align="center">{data.address}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}

UserDetails.propTypes = {
  renderProps: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    })
  }).isRequired
};

export default UserDetails;
