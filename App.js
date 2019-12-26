import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./Components/header";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "Buy Milk", key: "1" },
    { text: "Pay Car Note", key: "2" },
    { text: "Pack Up Belongings", key: "3" }
  ]);
  return (
    <View style={styles.container}>
      {/* {Header} */}
      <Header />
      <View style={styles.content}>
        {/* {To Do Form} */}
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
