import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./Components/header";
import TodoItem from "./Components/TodoItem";
import AddtoDo from "./Components/addtoDo";

export default function App() {
  const [todo, setTodo] = useState([]);

  const deleteHandler = key => {
    setTodo(prevToDo => {
      return prevToDo.filter(todo => todo.key != key);
    });
  };

  const pressHandler = text => {
    if (text.length > 3) {
      setTodo(prevToDo => {
        return [...prevToDo, { text: text, key: Math.random().toString() }];
      });
    } else {
      Alert.alert("OOPS", "To-Dos must be over 3 characters long", [
        { text: "Understood" }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* {Header} */}
        <Header />
        <View style={styles.content}>
          {/* {To Do Form} */}
          <AddtoDo pressHandler={pressHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
