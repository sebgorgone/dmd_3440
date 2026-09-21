import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function HeaderLink({
  href,
  label,
}: {
  href: "/home" | "/checkings" | "/savings";
  label: string;
}) {
  return (
    <Link href={href} asChild>
      <Pressable
        accessibilityRole="button"
        style={({ pressed }) => [styles.link, pressed && styles.linkPressed]}
      >
        <Text style={styles.linkText}>{label}</Text>
      </Pressable>
    </Link>
  );
}

function AccountLinks() {
  return (
    <View style={styles.container}>
      <HeaderLink href="/home" label="Home" />
      <HeaderLink href="/savings" label="Savings" />
      <HeaderLink href="/checkings" label="Checking" />
    </View>
  );
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Better bank app" }} />
      <Stack.Screen
        name="home"
        options={{
          title: "My account",
          headerRight: AccountLinks,
        }}
      />

      <Stack.Screen
        name="checkings"
        options={{
          title: "Checkings",
          headerRight: AccountLinks,
        }}
      />

      <Stack.Screen
        name="savings"
        options={{
          title: "Savings",
          headerRight: AccountLinks,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  link: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
  },
  linkPressed: {
    backgroundColor: "#E1E7F0",
  },
  linkText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2563EB",
  },
});
