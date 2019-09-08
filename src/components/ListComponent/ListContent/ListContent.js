import React, { Component } from "react";
import ListItem from "components/ListComponent/ListItem/ListItem";
import { connect } from "react-redux";

export class ListContent extends Component {
  prueba = el => {
    console.log(el);
  };
  render() {
    return (
      <div>
        {this.props.cryptosInfo.ordenateList.map(crypto => (
          <ListItem key={crypto.code} data={crypto}></ListItem>
        ))}
        {this.prueba(this.props)}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
export default connect(mapStateToProps)(ListContent);
