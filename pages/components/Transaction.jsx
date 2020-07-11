import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TransactionDetails from "./TransactionDetails";
import TransactionSummary from "./TransactionSummary";

export default ({ data }) => (
  <Accordion key={`transaction_${data.uuid}`}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <TransactionSummary data={data} />
    </AccordionSummary>
    <AccordionDetails>
      <TransactionDetails data={data} />
    </AccordionDetails>
  </Accordion>
);
