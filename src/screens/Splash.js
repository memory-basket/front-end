import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

export default function Splash() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}> 종이꽃</Text>
        <Text style={styles.text2}>: 항상 기억할게요</Text>
      </View>
      <View>
        <Image
          style={{
            width: 164,
            height: 246,
            marginTop: "80%",
            marginLeft: "40%",
            // marginBottom: "15%",
            resizeMode: "contain",
          }}
          // style={styles.image}
          source={require("../../assets/img/flower1_img.png")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "30%",
    marginLeft: "15%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: "32px",
    lineHeight: "60%",
    // fontFamily: "Gyenggi",
  },
  text2: {
    fontSize: "24px",
  },
  image: {
    width: "100px",
    height: "100px",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
});
