import React from "react";

export default ({ type }) => (
  <div
    style={{
      height: 20,
      width: 20,
      borderRadius: 10,
      backgroundColor: getBackgroundColor(type),
    }}
  />
);

const getBackgroundColor = (type) => (type === "credit" ? "green" : "red");
