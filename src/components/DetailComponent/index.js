import React from "react";
import CustomChart from "components/CustomChart/CustomChart";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
export class index extends React.Component {
  render() {
    return (
      <div style={{ flex: 1, margin: "5vh 5vw" }}>
        {this.props.selectedCrypto.hasOwnProperty("name") ? (
          <React.Fragment>
            <Typography
              variant="caption"
              color="textSecondary"
              component="p"
              style={{ position: "absolute", top: "20px" }}
            >
              Última actualización {this.props.selectedCrypto.lastUpdate}
            </Typography>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              {this.props.selectedCrypto.name}
            </Typography>

            <CustomChart
              selectedCrypto={this.props.selectedCrypto}
            ></CustomChart>
          </React.Fragment>
        ) : (
          <div style={{ textAlign: "center" }}>
            Seleccione una cryptomoneda para ver su información
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedCrypto: state.cryptosInfo.selectedCrypto
  };
};
export default connect(mapStateToProps)(index);
