import { AccountScreen } from "../components/account-screen";
import { savingsTransactions } from "../data/mock-accounts";

export default function Savings() {
  return (
    <AccountScreen
      accountName="High-Yield Savings"
      accountNumber="7390"
      balance={58734.56}
      transactions={savingsTransactions}
    />
  );
}
