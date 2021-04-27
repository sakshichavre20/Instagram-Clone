import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Like = () => {
  return (
    <View style={styles.container}>
      <Text>Like</Text>
    </View>
  );
};

export default Like;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
