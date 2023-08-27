import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        placeholder="e.g. John"
        style={styles.input}
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput
        placeholder="e.g. 20"
        style={styles.input}
        onChangeText={(value) => setAge(value)}
        keyboardType="numeric"
      />
      <Text>
        name: {name} age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
