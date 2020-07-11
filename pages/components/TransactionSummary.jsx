import React from "react";
import { Typography } from "@material-ui/core";

export default ({ data }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
    }}
  >
    <Typography>{data.type}</Typography>
    <Typography>{data.amount}</Typography>
  </div>
);
