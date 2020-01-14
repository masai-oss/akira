import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box
} from "@material-ui/core";
import styles from "./AddCategory.module.css";
import { addCategory } from "../../redux/categories/actions";

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = () => {
    const { addNewCategory } = this.props;
    const { category } = this.state;
    addNewCategory({ category_name: category });
  };

  render() {
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Add Category
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          p={1}
          m={1}
          justifyContent="center"
        >
          <TextField
            id="outlined-required"
            label="Category"
            name="category"
            onChange={evt => this.handleChange(evt)}
            variant="outlined"
            required
            fullWidth
            className={styles.inputField}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Add Category
          </Button>
        </Box>
      </Container>
    );
  }
}

AddCategory.propTypes = {
  addNewCategory: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addNewCategory: payload => dispatch(addCategory(payload))
});

export default connect(null, mapDispatchToProps)(AddCategory);
