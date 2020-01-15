import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import styles from "./Dashboard.module.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={styles.roundedTopDiv}>
              <h3 className={styles.headingTop}>Total Assets</h3>
              <p className={styles.headingBottom}>123</p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.roundedTopDiv}>
              <h3 className={styles.headingTop}>Available Assets</h3>
              <p className={styles.headingBottom}>123</p>
            </div>
          </Grid>
        </Grid>

        <h3>Recent Activities</h3>

        <Grid item xs={12}>
          <div className={styles.activitiesBox}>
            <h5 className={styles.dateBox}>12/10/2019</h5>
            <p className={styles.activityBox}>Action Type - item</p>
            <p>By Karthikeyan</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.activitiesBox}>
            <h5 className={styles.dateBox}>12/10/2019</h5>
            <p className={styles.activityBox}>Action Type - item</p>
            <p>By Piyush</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.activitiesBox}>
            <h5 className={styles.dateBox}>12/10/2019</h5>
            <p className={styles.activityBox}>Action Type - item</p>
            <p>By Nikhil</p>
          </div>
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
