import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text> 종이꽃</Text>
      <Text>: 항상 기억할게요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
