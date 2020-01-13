/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import * as AddAssetActionCreator from "../../redux/addAsset/actions";

import styles from "./AddNewAsset.module.css";

const inputFields = [
  {
    name: "serialNo",
    label: "Serial Number",
    helperText: "Example: SM-G920I"
  },
  {
    name: "brand",
    label: "Brand",
    helperText: "Example: Samsung"
  },
  {
    name: "model",
    label: "Model",
    helperText: "Example: Galaxy S6"
  },
  {
    name: "cost",
    label: "Cost",
    helperText: "Example: 42000",
    type: "number"
  }
];

const availableCategories = [
  {
    id: 1,
    name: "One"
  },
  {
    id: 2,
    name: "Two"
  }
];

class AddNewAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serialNo: "",
      brand: "",
      model: "",
      cost: "",
      category: 0,
      purchaseDate: new Date(Date.now())
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleDateChange = evt => {
    this.setState({ purchaseDate: evt });
  };

  // handlePictureChange = evt => {
  //   console.log(evt.target.files);
  // };

  handleSubmit = e => {
    const { serialNo, brand, model, cost, category, purchaseDate } = this.state;
    e.preventDefault();
    const { addAssetActions } = this.props;
    const payload = {
      serialNo,
      brand,
      model,
      cost,
      category,
      purchaseDate
    };

    addAssetActions.addAsset(payload);
  };

  render() {
    const { category, purchaseDate } = this.state;
    // console.log(this.state, this.form, "props");
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Add Asset
        </Typography>
        <form noValidate>
          {inputFields.map(el => (
            <TextField
              label={el.label}
              helperText={el.helperText}
              variant="outlined"
              name={el.name}
              onChange={evt => this.handleChange(evt)}
              fullWidth
              className={styles.inputField}
              type={el.type ? el.type : "text"}
              key={el.name}
              required
            />
          ))}
          <TextField
            id="outlined-select-currency"
            select
            label="Category"
            value={category || ""}
            name="category"
            onChange={evt => this.handleChange(evt)}
            variant="outlined"
            required
            fullWidth
            className={styles.inputField}
          >
            <MenuItem key="default" value="">
              Select...
            </MenuItem>
            {availableCategories.map(option => (
              <MenuItem key={option.name} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              label="Date of Purchase"
              format="dd/MM/yyyy"
              value={purchaseDate}
              onChange={this.handleDateChange}
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <Box
            display="flex"
            flexDirection="row"
            p={1}
            m={1}
            bgcolor="background.paper"
            justifyContent="space-around"
          >
            <input
              className={styles.upload}
              accept="image/*"
              id="contained-button-file"
              type="file"
              name="picture"
              onChange={evt => this.handlePictureChange(evt)}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload Image
              </Button>
            </label>
          </Box>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={e => this.handleSubmit(e)}
          >
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}

// const mapStateToProps = () => ({});

AddNewAsset.propTypes = {
  addAssetActions: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  addAssetActions: bindActionCreators(AddAssetActionCreator, dispatch)
});

export default connect(mapDispatchToProps)(AddNewAsset);
