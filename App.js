import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./AppNavigation/Navigation";
import firebaseConfig from "./Config";
import * as firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return <Navigator />;
}
