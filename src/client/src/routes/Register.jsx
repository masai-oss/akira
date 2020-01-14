import React, { Component } from "react";
import {
  Radio,
  RadioGroup,
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField,
  Button,
  Container,
  Typography
} from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Register.module.css";
import { signupUser } from "../redux/authentication/actions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "nikhil@gmail.com",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      address: "",
      phoneNumber: "",
      picture: "",
      gender: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Send profile picture
    const formData = new FormData();
    const { picture } = this.state;
    formData.append("picture", picture);

    const { password, confirmPassword } = this.state;
    const { signUpUser } = this.props;

    const data = {
      ...this.state,
      action: "sign_up_user",
      invitation_id: "",
      lang: "en"
    };

    // Confirm Password
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      signUpUser(data);
      alert("Form Submitted");
    }
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      address,
      phoneNumber,
      gender
    } = this.state;

    return (
      <div className={styles.body}>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h4" component="h2" className={styles.heading}>
              Register
            </Typography>
            <FormGroup>
              <FormControl>
                <TextField
                  className={styles.textField}
                  variant="outlined"
                  label="Email"
                  name="email"
                  value={email}
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textField}
                  required
                  variant="outlined"
                  onChange={e => this.handleChange(e)}
                  name="firstName"
                  label="First Name"
                  value={firstName}
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textField}
                  required
                  variant="outlined"
                  onChange={e => this.handleChange(e)}
                  name="lastName"
                  label="Last Name"
                  value={lastName}
                />
              </FormControl>
              <FormControl>
                <RadioGroup
                  className={styles.textField}
                  name="gender"
                  onChange={e => this.handleChange(e)}
                  value={gender}
                  row
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="others"
                    control={<Radio color="primary" />}
                    label="Others"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <input
                  accept="image/*"
                  className={styles.uploadPicture}
                  id="profilePicture"
                  name="profilePicture"
                  multiple
                  type="file"
                />
                {/* <label> */}
                <Button
                  className={styles.uploadButton}
                  variant="contained"
                  color="secondary"
                  component="span"
                >
                  Upload Profile Picture
                </Button>
                {/* </label> */}
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textField}
                  required
                  variant="outlined"
                  onChange={e => this.handleChange(e)}
                  name="address"
                  value={address}
                  type="text"
                  label="Address"
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textField}
                  required
                  variant="outlined"
                  onChange={e => this.handleChange(e)}
                  name="phoneNumber"
                  value={phoneNumber}
                  type="number"
                  label="Phone Number"
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textField}
                  required
                  variant="outlined"
                  onChange={e => this.handleChange(e)}
                  name="password"
                  value={password}
                  type="password"
                  label="Password"
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textField}
                  variant="outlined"
                  required
                  onChange={e => this.handleChange(e)}
                  name="confirmPassword"
                  value={confirmPassword}
                  type="password"
                  label="Confirm Password"
                />
              </FormControl>
              <Button type="submit" variant="contained" color="secondary">
                Sign Up
              </Button>
            </FormGroup>
          </form>
        </Container>
      </div>
    );
  }
}

Register.propTypes = {
  signUpUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  signUpUser: data => dispatch(signupUser(data))
});

export default connect(mapDispatchToProps)(Register);
