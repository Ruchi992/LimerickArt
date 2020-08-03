import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import { createStackNavigation } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#121212" barStyle="light-content" />
        <Text style={{ color: "#fff", fontSize: 18 }}></Text>

        <Register />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#018786",
    flex: 1,
    alignItems: "center",
    fontSize: 20,
    justifyContent: "center",
  },
});
