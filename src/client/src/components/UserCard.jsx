import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import styles from "./UserCard.module.css";

const UserCard = props => {
  const {
    data: { id, first_name, last_name, role, joining_date, picture }
  } = props;
  return (
    <Link to={`/dashboard/users/${id}`}>
      <Card className={styles.card}>
        <div className={styles.details}>
          <CardContent className={styles.content}>
            <Typography component="h5" variant="h5">
              {first_name + " " + last_name}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {role}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {joining_date}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={styles.cover}
          image={picture}
          title={first_name}
        />
      </Card>
    </Link>
  );
};

UserCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    joiningDate: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired
};

export default UserCard;
