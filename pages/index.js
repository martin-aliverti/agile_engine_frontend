import { useEffect, useState } from "react";
import Transaction from "./components/Transaction";

export default () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    setTransactions([
      { uuid: "lalala", amount: 10, type: "credit", effectiveDate: "adate" },
      { uuid: "lalala", amount: 10, type: "credit", effectiveDate: "adate" },
      { uuid: "lalala", amount: 10, type: "credit", effectiveDate: "adate" },
      { uuid: "lalala", amount: 10, type: "credit", effectiveDate: "adate" },
    ]);
  }, []);
  return <div>{transactions.length && renderTransactions(transactions)}</div>;
};

const renderTransactions = (transactions) =>
  transactions.map((transaction) => <Transaction data={transaction} />);
