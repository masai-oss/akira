import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import styles from "./DeleteCategory.module.css";
import axios from "../../utils/axiosInterceptor";
import { deleteCategory } from "../../redux/categories/actions";

class DeleteCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      availableCategories: []
    };
  }

  componentDidMount() {
    axios
      .get("/categories")
      .then(res => this.setState({ availableCategories: res }));
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = () => {
    const { deleteCurrentCategory } = this.props;
    const { category } = this.state;
    deleteCurrentCategory({ category_id: category });
  };

  render() {
    const { category, availableCategories } = this.state;
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Delete Category
        </Typography>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.submit}
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </Container>
    );
  }
}

DeleteCategory.propTypes = {
  deleteCurrentCategory: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteCurrentCategory: payload => dispatch(deleteCategory(payload))
});

export default connect(null, mapDispatchToProps)(DeleteCategory);
