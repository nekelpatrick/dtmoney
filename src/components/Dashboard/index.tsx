import { Summary } from "../Summary";
import { TransactionsTrable } from "../TransactionsTable";
import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTrable />
    </Container>
  );
};
