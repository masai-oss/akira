import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  TextField,
  Button,
  Container,
  Typography
} from "@material-ui/core";
import styles from "./Login.module.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.body}>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h4" component="h2" className={styles.heading}>
              Login
            </Typography>
            <FormGroup>
              <FormControl>
                <TextField
                  className={styles.margin}
                  type="email"
                  onChange={e => this.handleChange(e)}
                  required
                  variant="outlined"
                  label="Email"
                  id="email"
                  value={email}
                />
              </FormControl>
              <FormControl>
                <TextField
                  type="password"
                  onChange={e => this.handleChange(e)}
                  required
                  variant="outlined"
                  label="password"
                  id="password"
                  value={password}
                />
              </FormControl>
            </FormGroup>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={styles.submit}
            >
              Submit
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;
