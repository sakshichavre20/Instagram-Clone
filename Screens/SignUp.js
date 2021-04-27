import React, { useState, useEffect } from "react";
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

import Login from "./Login";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);
  const userSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        Alert.alert("Successfully Registerd !");
        {
          props.navigation.replace("Home");
        }
        return authUser.user.updateProfile({
          displayName: username,
        });
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
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <View style={styles.bsignup}>
          <TouchableOpacity onPress={userSignup}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, color: "white" }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(Login);
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "yellow" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 250,
    borderColor: "black",
    borderWidth: 2,
    height: 40,
    paddingLeft: 5,
    margin: 2,
    backgroundColor: "white",
  },
  bsignup: {
    backgroundColor: "yellow",
    width: 90,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 30,
  },
  back: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
