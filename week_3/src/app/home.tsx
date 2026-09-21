import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const [automaticDeposits, setAutomaticDeposits] = useState(false);

  const showMobileDepositMessage = () => {
    Alert.alert(
      "Mobile deposit",
      "Mobile check deposit is coming soon in this demo.",
    );
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heading}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.title}>Your accounts</Text>
      </View>

      <View style={styles.accounts}>
        <Link href="/checkings" asChild>
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.accountCard,
              pressed && styles.cardPressed,
            ]}
          >
            <View style={styles.accountHeader}>
              <Text style={styles.accountName}>Everyday Checking</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
            <Text style={styles.balance}>$1,264.56</Text>
            <Text style={styles.accountMeta}>Available balance · •••• 4821</Text>
          </Pressable>
        </Link>

        <Link href="/savings" asChild>
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.accountCard,
              pressed && styles.cardPressed,
            ]}
          >
            <View style={styles.accountHeader}>
              <Text style={styles.accountName}>High-Yield Savings</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
            <Text style={styles.balance}>$58,734.56</Text>
            <Text style={styles.accountMeta}>Available balance · •••• 7390</Text>
          </Pressable>
        </Link>
      </View>

      <View>
        <Text style={styles.sectionTitle}>Manage money</Text>
        <View style={styles.optionsCard}>
          <View style={styles.optionRow}>
            <View style={styles.optionCopy}>
              <Text style={styles.optionTitle}>Automatic deposits</Text>
              <Text style={styles.optionDescription}>
                Send each recurring deposit to checking
              </Text>
            </View>
            <Switch
              accessibilityLabel="Automatic deposits into checking"
              value={automaticDeposits}
              onValueChange={setAutomaticDeposits}
              trackColor={{ false: "#AAB4C3", true: "#77A4F8" }}
              thumbColor={automaticDeposits ? "#2563EB" : "#FFFFFF"}
            />
          </View>

          <View style={styles.divider} />

          <Pressable
            accessibilityRole="link"
            onPress={showMobileDepositMessage}
            style={({ pressed }) => [
              styles.optionRow,
              pressed && styles.optionPressed,
            ]}
          >
            <View style={styles.optionCopy}>
              <Text style={styles.optionTitle}>Mobile deposit</Text>
              <Text style={styles.optionDescription}>
                Deposit a check with your camera
              </Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
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
  container: {
    gap: 28,
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    gap: 4,
  },
  greeting: {
    fontSize: 15,
    color: "#65738B",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#172033",
  },
  accounts: {
    gap: 14,
  },
  accountCard: {
    gap: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E1E7F0",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },
  cardPressed: {
    opacity: 0.72,
  },
  accountHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accountName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#526078",
  },
  balance: {
    fontSize: 28,
    fontWeight: "700",
    color: "#172033",
  },
  accountMeta: {
    fontSize: 13,
    color: "#65738B",
  },
  chevron: {
    fontSize: 28,
    lineHeight: 28,
    color: "#2563EB",
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "700",
    color: "#172033",
  },
  optionsCard: {
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  optionRow: {
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: 16,
  },
  optionCopy: {
    flex: 1,
    gap: 4,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#172033",
  },
  optionDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: "#65738B",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 16,
    backgroundColor: "#DCE3ED",
  },
  optionPressed: {
    backgroundColor: "#F0F4F9",
  },
});
