import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CompanyLogoView from "../Component/CompanyLogoView";
import LoginScreen from "../Component/LoginScreen";
import StartScreen from "../Component/StartScreen";
import AboutPage from "../Component/AboutPage";
import UserSearch from "../Component/UserSearchScreen";

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CompanyLogoView />
        <StartScreen />
        <AboutPage />
        <UserSearch />
        <LoginScreen style={styles.Login} />
        <View style={stayles.RegisterTextCont}>
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
