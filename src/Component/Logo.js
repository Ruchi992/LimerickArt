import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 60, height: 70 }}
          source={require("../Images/Logo.jpg")}
        />
        <Text style={styles.container}>Welcome to my App</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
