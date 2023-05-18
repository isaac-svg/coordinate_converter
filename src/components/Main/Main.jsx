import React from "react";
import classes from "./main.module.css";
import { useState } from "react";
import proj4 from "proj4";
const Main = () => {
  const [display, setDisplay] = useState([]);
  const [COORD, setCOORD] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState(false);
  const convert = (e) => {
    e.preventDefault();
    // check the type of conversion
    if (type === "WGS to LEIGON") {
      const coords = COORD.trim().split(",");
      console.log(coords);
      const long = coords[0].trim();
      const lat = coords[1].trim();
      console.log(long, lat);
      setDisplay(
        proj4("+proj=utm +zone=30 +ellps=WALLOFFICE +units=m +no_defs", [
          Number(long),
          Number(lat),
        ])
      );

      setResult(true);
    } else {
      const coords = COORD.trim().split(",");
      const long = coords[0].trim();
      const lat = coords[1].trim();
      setDisplay(
        proj4(
          "+proj=utm +zone=30 +ellps=WALLOFFICE +units=m +no_defs",
          "EPSG:4326",
          [Number(long), Number(lat)]
        )
      );

      setResult(true);
    }
  };
  return (
    <div className={classes.main}>
      <div className={classes.mainWrapper}>
        <span className={classes.desc}>
          CONVERT WGS TO LEIGON AND VICE VERSA
        </span>

        <form className={classes.form} onSubmit={convert}>
          <div className={classes.choose}>
            {/* < className={classes.action}> */}

            <div>
              <select
                className={classes.select}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Click to select">Click to select</option>
                <option value="WGS to LEIGON">WGS to LEIGON</option>
                <option value="LEIGON to WGS">LEIGON to WGS</option>
              </select>
            </div>
            <div className={classes.convertWrapper}>
              <button className={classes.convertBtn} type="submit">
                Convert
              </button>
            </div>
          </div>
          <div className={classes.inputControl}>
            <label htmlFor="COORD" className={classes.label}>
              COORDINATES
            </label>
            <input
              required
              value={COORD}
              onChange={(e) => setCOORD(e.target.value)}
              title="comma seppareted coordinates"
              type="text"
              placeholder="e.g -122.305887, 58.9465872"
              id="COORD"
              className={classes.input}
            />
          </div>
        </form>
        {/* result */}
        {result && (
          <div className={classes.resultWrapper}>
            {display.map((num, idx) => (
              <span className={classes.display}>
                {idx == 0 ? (
                  <>
                    LAT:
                    <p>{num}</p> <br />
                  </>
                ) : (
                  <>
                    LONG:
                    <p>{num}</p> <br />
                  </>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
