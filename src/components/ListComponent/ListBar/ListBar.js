import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./ListBar.module.css";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import SortIcon from "@material-ui/icons/SwapVert";
import CustomPopper from "components/CustomPopper/CustomPopper";

export class ListBar extends Component {
  render() {
    return (
      <AppBar position="relative" className={styles["app-bar-container"]}>
        <Toolbar className={styles["toolbar-content"]}>
          <div className={styles.search}>
            <div className={styles["search-icon"]}>
              <SearchIcon />
            </div>
            <InputBase
              type="search"
              classes={{
                root: styles["input-root"],
                input: styles["input-input"]
              }}
            ></InputBase>
          </div>
          <CustomPopper></CustomPopper>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ListBar;
