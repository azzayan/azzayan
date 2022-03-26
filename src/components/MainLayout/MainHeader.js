import React, { PropTypes } from "react";
import { AppBar } from "react-toolbox/lib/app_bar";
import { IconButton } from "react-toolbox/lib/button";
import style from "./mainLayout.scss";

const MainHeader = (props) => {
  return (
    <AppBar>
      <IconButton icon="menu" inverse={true} onClick={props.onToggleSideBar} />
      <div className={style.appBarCenterGrow}>{"Welcome!"}</div>
    </AppBar>
  );
};
MainHeader.propTypes = {
  onToggleSideBar: PropTypes.func.isRequired,
};
export default MainHeader;
