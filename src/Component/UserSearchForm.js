import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigation } from "react-navigation";

export default class UserSearch extends React.Component {
  render() {
    return <View style={StyleSheet.container}> Search the user</View>;
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
