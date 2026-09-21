import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My bank App but better</Text>

      <Link href="/home" asChild>
        <Pressable accessibilityRole="button">
          {({ pressed }) => (
            <View
              style={[
                styles.button,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.buttonText}>Go to Home</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
    backgroundColor: "#F7F9FC",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#172033",
  },
  description: {
    maxWidth: 320,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#526078",
  },
  button: {
    minHeight: 48,
    minWidth: 180,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: "#2563EB",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
