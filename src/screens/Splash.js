import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}> 종이꽃</Text>
        <Text>: 항상 기억할게요</Text>
      </View>
      <View>
        <Image
          style={{
              width: 193,
              height: 87,
              marginLeft: 10,
              resizeMode: "contain"}}
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
    marginLeft: "15%",
    alignItems: "center",
    justifyContent: "center",
  }
  ,
})

    // fontFamily: "Gyenggi",
//   },
//   text2: {
//     fontSize: "24px",
//   },

//});
