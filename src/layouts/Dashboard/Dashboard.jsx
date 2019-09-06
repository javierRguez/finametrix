import React from "react";
import ListComponent from "components/ListComponent";
import DetailComponent from "components/DetailComponent";
import styles from "./Dashboard.module.css";
import Grid from "@material-ui/core/Grid";
class Dashboard extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidUpdate(e) {}
  render() {
    return (
      <React.Fragment>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          className={styles["dashboard-container"]}
        >
          <Grid item xs={3} className={styles["list-component-container"]}>
            <ListComponent></ListComponent>
          </Grid>
          <Grid item xs={9} className={styles["detail-component-container"]}>
            <DetailComponent></DetailComponent>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Dashboard;
