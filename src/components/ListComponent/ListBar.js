import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./ListBar.module.css";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CustomPopper from "components/CustomPopper/CustomPopper";
import { connect } from "react-redux";
import { filterText } from "actions/filterActions";
import { sortBy } from "actions/filterActions";

export class ListBar extends Component {
  onChange = e => {
    this.props.dispatch(filterText(e.target.value));
  };
  getSelectedOption = value => {
    this.props.dispatch(sortBy(value));
  };
  render() {
    return (
      <AppBar position="relative" className={styles["app-bar-container"]}>
        <Toolbar className={styles["toolbar-content"]}>
          <div className={styles.search}>
            <div className={styles["search-icon"]}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={e => this.onChange(e)}
              type="search"
              classes={{
                root: styles["input-root"],
                input: styles["input-input"]
              }}
            ></InputBase>
          </div>
          <CustomPopper
            getSelectedOption={this.getSelectedOption}
          ></CustomPopper>
        </Toolbar>
      </AppBar>
    );
  }
}

export default connect()(ListBar);
