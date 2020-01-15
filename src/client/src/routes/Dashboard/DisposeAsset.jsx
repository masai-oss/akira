import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import styles from "./DisposeAsset.module.css";

const availableAssets = [
  {
    id: 1,
    serialNumber: "SM-G920I",
    brand: "Samsung",
    model: "Galaxy S6",
    category: "Electronics",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
  },
  {
    id: 2,
    serialNumber: "SM-G920I",
    brand: "Samsung",
    model: "Galaxy S6",
    category: "Electronics",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
  }
];

class DisposeAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }

  render() {
    const { category } = this.state;
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Dispose Asset
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Assets"
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
          {availableAssets.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.model}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.submit}
        >
          Submit
        </Button>
      </Container>
    );
  }
}

export default connect()(DisposeAsset);
