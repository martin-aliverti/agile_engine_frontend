import { useEffect, useState } from "react";
import Transaction from "./components/Transaction";
import TransactionService from "../src/TransactionService";
import { Typography } from "@material-ui/core";

export default () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    TransactionService.getAllTransactions().then(setTransactions);
  }, []);
  return (
    <div>
      {transactions.length
        ? renderTransactions(transactions)
        : renderNoResult()}
    </div>
  );
};

const renderTransactions = (transactions) =>
  transactions.map((transaction) => <Transaction data={transaction} />);

const renderNoResult = () => (
  <Typography>Your transaction history is empty.</Typography>
);
