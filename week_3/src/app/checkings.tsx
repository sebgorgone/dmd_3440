import { AccountScreen } from "../components/account-screen";
import { checkingTransactions } from "../data/mock-accounts";

export default function Checkings() {
  return (
    <AccountScreen
      accountName="Everyday Checking"
      accountNumber="4821"
      balance={1264.56}
      transactions={checkingTransactions}
    />
  );
}
