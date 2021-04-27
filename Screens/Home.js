import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Post from "./Post";
import { db } from "../Config";
const Home = () => {
  const [posts, setPosts] = useState([]);

  //useEffect

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Image
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeiM3jM9ly3tSe40rBywtAP5iYSgr2ghn0LS1uNIYVwoYNXQCEPwIK6sB7SwWxNxpgw&usqp=CAU",
          }}
          style={styles.headerimg}
        />
      </View>
      <ScrollView>
        {posts.map(({ id, post }) => (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            uri={post.uri}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "black",
  },
  headerimg: {
    width: 130,
    height: 39,
  },
  header: {
    width: "100%",
    backgroundColor: "black",
    height: 60,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#191919",
  },
});
