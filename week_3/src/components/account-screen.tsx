import { ScrollView, StyleSheet, Text, View } from "react-native";

export type Transaction = {
  id: string;
  merchant: string;
  date: string;
  category: string;
  amount: number;
};

type AccountScreenProps = {
  accountName: string;
  accountNumber: string;
  balance: number;
  transactions: Transaction[];
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function AccountScreen({
  accountName,
  accountNumber,
  balance,
  transactions,
}: AccountScreenProps) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.balanceCard}>
        <Text style={styles.eyebrow}>{accountName}</Text>
        <Text style={styles.balance}>{currencyFormatter.format(balance)}</Text>
        <Text style={styles.accountNumber}>Available balance •••• {accountNumber}</Text>
      </View>

      <View>
        <Text style={styles.sectionTitle}>Recent activity</Text>
        <View style={styles.transactionList}>
          {transactions.map((transaction, index) => {
            const isDeposit = transaction.amount > 0;

            return (
              <View
                key={transaction.id}
                style={[
                  styles.transaction,
                  index < transactions.length - 1 && styles.transactionBorder,
                ]}
              >
                <View style={styles.transactionDetails}>
                  <Text style={styles.merchant}>{transaction.merchant}</Text>
                  <Text style={styles.metadata}>
                    {transaction.date} · {transaction.category}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.amount,
                    isDeposit ? styles.deposit : styles.withdrawal,
                  ]}
                >
                  {isDeposit ? "+" : ""}
                  {currencyFormatter.format(transaction.amount)}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },
  content: {
    gap: 28,
    padding: 20,
    paddingBottom: 40,
  },
  balanceCard: {
    gap: 8,
    padding: 24,
    borderRadius: 20,
    backgroundColor: "#172033",
  },
  eyebrow: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: "#C8D3E8",
  },
  balance: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  accountNumber: {
    fontSize: 14,
    color: "#C8D3E8",
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "700",
    color: "#172033",
  },
  transactionList: {
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  transaction: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  transactionBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#DCE3ED",
  },
  transactionDetails: {
    flex: 1,
    gap: 4,
  },
  merchant: {
    fontSize: 16,
    fontWeight: "600",
    color: "#172033",
  },
  metadata: {
    fontSize: 13,
    color: "#65738B",
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
  },
  deposit: {
    color: "#16805C",
  },
  withdrawal: {
    color: "#172033",
  },
});
