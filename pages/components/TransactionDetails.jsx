import React from "react";
import { Typography } from "@material-ui/core";

export default ({ data }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Typography>{data.type}</Typography>
    <Typography>{data.uuid}</Typography>
    <Typography>{data.amount}</Typography>
    <Typography>{data.effectiveDate}</Typography>
  </div>
);
