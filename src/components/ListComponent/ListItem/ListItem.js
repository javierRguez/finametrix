import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
export class ListItem extends React.Component {
  render() {
    return (
      <Card style={{ margin: "5px" }}>
        <CardActionArea>
          <CardContent
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {this.props.data.image && (
                <Avatar
                  alt="bitcoin"
                  src={require(`assets/${this.props.data.image}`)}
                  style={{ marginRight: "10px" }}
                />
              )}

              <Typography variant="h6" component="h2">
                {this.props.data.name}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                component="p"
                gutterBottom={false}
              >
                ({this.props.data.code})
              </Typography>
            </div>
            <div>
              <Typography
                variant="button"
                color="textSecondary"
                component="p"
                gutterBottom={false}
              >
                {`$${parseInt(this.props.data.closePrice)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} USD`}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
export default connect()(ListItem);
