import React from "react";
import FlexBetween from "../../util/FlexBetween";
import classes from "./styles.module.css";
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <FlexBetween>
        <div className={classes.logo}>Logo</div>
        <div className={classes.left}>
          <span>Name</span>
          <span>Dark/light</span>
        </div>
      </FlexBetween>
    </nav>
  );
};

export default Navbar;
