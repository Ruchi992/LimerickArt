import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.submitButton}>{this.props.Text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 350,
    height: 60,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
  },
  Button: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingVertical: 16,
    width: 150,
    height: 50,
    marginVertical: 10,
  },
  submitButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
});
