import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import { createStackNavigation } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#121212" barStyle="light-content" />
        <Text style={{ color: "#fff", fontSize: 18 }}></Text>

        <RegisterPage />
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
