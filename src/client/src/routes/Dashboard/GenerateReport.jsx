import React from "react";
import { connect } from "react-redux";
import { Container, Typography, Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./GenerateReport.module.css";
import axios from "../../utils/axiosInterceptor";

class GenerateReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignDate: null,
      expectedReturnDate: null,
      reportGenerate: []
    };
  }

  handleDateChange = evt => {
    this.setState({ assignDate: evt });
  };

  handleReturnDateChange = evt => {
    this.setState({ expectedReturnDate: evt });
  };

  handleDateSubmit = Date => {
    Date.preventDefault();
    const { assignDate, expectedReturnDate } = this.state;
    axios.get(` /?${assignDate} & ${expectedReturnDate}`).then(res => {
      this.setState({
        reportGenerate: res.data
      });
    });
  };

  render() {
    const { assignDate, expectedReturnDate, reportGenerate } = this.state;
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Generate Report
        </Typography>
        <form noValidate onSubmit={this.handleDateSubmit}>
          <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            className={styles.inputField}
          >
            <KeyboardDatePicker
              margin="normal"
              label="From"
              format="dd/MM/yyyy"
              // name="assignDate"
              value={assignDate}
              onChange={evt => this.handleDateChange(evt)}
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            className={styles.inputField}
          >
            <KeyboardDatePicker
              margin="normal"
              label="To"
              format="dd/MM/yyyy"
              value={expectedReturnDate}
              onChange={evt => this.handleReturnDateChange(evt)}
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <Button
            href={reportGenerate.download_url}
            download
            variant="contained"
            color="primary"
            type="submit"
            className={styles.submit}
          >
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}

export default connect()(GenerateReport);
