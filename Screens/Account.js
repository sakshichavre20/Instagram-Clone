import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as firebase from "firebase";
const Account = () => {
  return (
    <View style={styles.container}>
      <Text>account screen</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
