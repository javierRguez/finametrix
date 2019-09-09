import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import SortIcon from "@material-ui/icons/SwapVert";
import IconButton from "@material-ui/core/IconButton";

const options = [
  { value: "Market Cap", key: "marketCap" },
  { value: "Precio de cierre", key: "closePrice" },
  { value: "Volumen", key: "volume" }
];

export default function SplitButton(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { getSelectedOption } = props;

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen(false);
    getSelectedOption(index);
  }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      <IconButton
        size="small"
        aria-owns={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        ref={anchorRef}
      >
        <SortIcon style={{ color: "white" }} />
      </IconButton>

      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {options.map(option => (
                    <MenuItem
                      key={option.key}
                      selected={option.key === selectedIndex}
                      onClick={event => handleMenuItemClick(event, option.key)}
                    >
                      {option.value}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
