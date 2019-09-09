import React, { Component } from "react";
import ListItem from "components/ListComponent/ListItem";
import { connect } from "react-redux";
import getVisibleCryptos from "selectors/cryptos";
import styles from "./ListContent.module.css";

export class ListContent extends Component {
  render() {
    return (
      <div className={styles["list-content-container"]}>
        {this.props.cryptos.map(crypto => (
          <ListItem key={crypto.code} data={crypto}></ListItem>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cryptos: getVisibleCryptos(state.cryptosInfo.cryptos, {
      text: state.filter.text,
      sortBy: state.filter.sortBy
    })
  };
};
export default connect(mapStateToProps)(ListContent);
