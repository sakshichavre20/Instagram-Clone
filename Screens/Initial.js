import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";

const Initial = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/e4/8d/9b/e48d9bf3d3226aa0f967b7d55a2ff4c8.jpg",
        }}
        style={styles.back}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeiM3jM9ly3tSe40rBywtAP5iYSgr2ghn0LS1uNIYVwoYNXQCEPwIK6sB7SwWxNxpgw&usqp=CAU",
            }}
            style={styles.imgs}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View style={styles.blogin}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(Login);
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bsignup}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(SignUp);
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Initial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blogin: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    width: 90,
    borderRadius: 20,
    marginTop: 50,
  },
  bsignup: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    width: 90,
    borderRadius: 20,
    marginTop: 50,
  },
  back: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  imgs: {
    height: 53,
    width: 170,
  },
  img: {
    height: 200,
    width: 200,
  },
});
