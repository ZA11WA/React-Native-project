import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Link href="/labs/1" style={styles.button1}>
        <Text style={styles.buttonText}>Go to lab1</Text>
      </Link>
      <Link href="/labs/TemperatureConverter" style={styles.button2}>
        <Text style={styles.buttonText}>Przejdź do zmiany temperatury</Text>
      </Link>
      <Link href="/labs/Wisielec" style={styles.button3}>
        <Text style={styles.buttonText}>Przejdź do Wisielca</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  button1: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  button2: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  button3: {
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default HomePage;
