import React from "react";
import { connect } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import UserCard from "../../components/UserCard";
import styles from "./ListUsers.module.css";
import axios from "../../utils/axiosInterceptor";

// const dummyData = [
//   {
//     id: 1,
//     username: "Karthikeyan",
//     title: "XYZ",
//     joiningDate: "22-09-2019",
//     picture:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
//   },
//   {
//     id: 2,
//     username: "Nikhil",
//     title: "ABC",
//     joiningDate: "23-01-2020",
//     picture:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
//   }
// ];

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("/users").then(response =>
      this.setState({
        data: response.data.data
      })
    );
  }

  render() {
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          All Users
        </Typography>
        {dummyData.map(el => (
          <UserCard data={el} key={el.id} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.authReducer.language
  };
};

export default connect(mapStateToProps)(ListUsers);
