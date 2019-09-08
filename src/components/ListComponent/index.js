import React from "react";
import ListBar from "./ListBar/ListBar";
import Grid from "@material-ui/core/Grid";
import ListContent from "components/ListComponent/ListContent/ListContent";

export class index extends React.Component {
  render() {
    return (
      <Grid container alignItems="stretch">
        <Grid item xs={12}>
          <ListBar></ListBar>
          <ListContent></ListContent>
        </Grid>
      </Grid>
    );
  }
}
export default index;
