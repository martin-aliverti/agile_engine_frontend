import Api from "./Api";

const ENDPOINT = "transactions";

export default {
  getAllTransactions: () => Api.get(ENDPOINT),
};
