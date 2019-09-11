import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getSelectedCrypto, clearSelectedCrypto } from "actions/cryptoActions";
export class ListItem extends React.Component {
  getNumberBySort() {
    switch (this.props.sortBy) {
      case "marketCap":
        return this.props.data.marketCap.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        });
      case "closePrice":
        return this.props.data.closePrice.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        });
      case "volume":
        return this.props.data.volume.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        });

      default:
        break;
    }
  }
  render() {
    return (
      <Card
        style={
          this.props.data.code === this.props.selectedCode
            ? { margin: "5px", backgroundColor: "#a4b3a7", transition: ".5s" }
            : { margin: "5px" }
        }
      >
        <CardActionArea
          onClick={async () => {
            await this.props.dispatch(clearSelectedCrypto());
            this.props.dispatch(getSelectedCrypto(this.props.data));
          }}
        >
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
                {this.getNumberBySort()}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
export default connect()(ListItem);
