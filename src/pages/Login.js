import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../Component/Logo";
import Form from "../Component/Form";
import Home from "../Component/Home";
import About from "../Component/About";
import UserSearch from "../Component/UserSearch";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Home />
        <About />
        <UserSearch />
        <Form style={styles.Login} />
        <View style={styles.RegisterTextCont}>
          <Text> Can't loging need to register </Text>
          <Text style={styles.RegisterButton}>Register Now</Text>
        </View>
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
  RegisterTextCont: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  RegisterButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});
