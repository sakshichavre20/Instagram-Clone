import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import * as firebase from "firebase";
import SignUp from "./SignUp";
import Home from "./Home";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const userSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        {
          props.navigation.replace("Home");
        }
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/44/2f/a6/442fa6b20923ed9411bcdf00060bb365.jpg",
        }}
        style={styles.back}
      >
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.blogin}>
          <TouchableOpacity onPress={userSignin}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, color: "white" }}>
            Dont have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(Home);
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "yellow" }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    height: 40,
    paddingLeft: 5,
    margin: 2,
    backgroundColor: "white",
  },
  blogin: {
    backgroundColor: "yellow",
    width: 90,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 20,
  },
  back: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
