import React from "react";

import classes from "./banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.imgWrapper}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbwLF9Gx9p2leGxeZqnFGbBzI1QVivJ8vZg&usqp=CAU"
          alt=""
          className={classes.image}
        />
      </div>
    </div>
  );
};

export default Banner;
