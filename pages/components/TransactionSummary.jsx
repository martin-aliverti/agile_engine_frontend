import React from "react";
import { Typography } from "@material-ui/core";
import TransactionTypeIndicator from "./TransactionTypeIndicator";

export default ({ data }) => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <TransactionTypeIndicator type={data.type} />
    <Typography style={{ marginLeft: 10 }}>{data.type}</Typography>
    <Typography style={{ marginLeft: 10 }}>{data.amount}</Typography>
  </div>
);
