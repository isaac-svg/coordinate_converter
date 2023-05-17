import React from "react";
import classes from "./main.module.css";
import { useState } from "react";
const Main = () => {
  const [WGS, setWGS] = useState("");
  const [LEGION, setLEIGON] = useState("");
  const [COORD, setCOORD] = useState("");
  const convert = () => {};
  return (
    <div className={classes.main}>
      <div className={classes.mainWrapper}>
        <span className={classes.desc}>
          CONVERT WGS TO LEIGON AND VICE VERSA
        </span>
        <div>
          <label htmlFor="data" className={classes.upload}>
            Upload a csv file
          </label>
          <input type="file" name="data" id="data" accept=".csv" hidden />
        </div>
        <form className={classes.form}>
          <div className={classes.inputControl}>
            <label htmlFor="WGS" className={classes.label}>
              WGS
            </label>
            <input
              type="text"
              placeholder="WGS..."
              id="WGS"
              className={classes.input}
            />
          </div>
          <div className={classes.inputControl}>
            <label htmlFor="LEG" className={classes.label}>
              LEIGON
            </label>
            <input
              type="text"
              placeholder="LEIGON..."
              id="LEG"
              className={classes.input}
            />
          </div>
          <div className={classes.inputControl}>
            <label htmlFor="COORD" className={classes.label}>
              COORDINATES
            </label>
            <input
              type="text"
              placeholder="e.g -122.305887, 58.9465872"
              id="COORD"
              className={classes.input}
            />
          </div>
        </form>
        {/* convert and upload */}

        <div className={classes.convertWrapper}>
          <button className={classes.convertBtn}>Convert</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
