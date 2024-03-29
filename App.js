import { FlatList, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import Header from "./components/header";
import TodoItem from "./components/todosItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (todoKey) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== todoKey);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, key: Math.random().toString() }];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
