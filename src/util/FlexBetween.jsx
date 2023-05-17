import React from "react";

const FlexBetween = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {children}
    </div>
  );
};

export default FlexBetween;
