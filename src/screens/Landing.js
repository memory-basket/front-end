import { React, useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

export default function Landing() {
  return (
    <View style={styles.container}>
      <View>
        <Text> 종이꽃</Text>
        <Text>: 항상 기억할게요</Text>
      </View>

      <View>
        <Image source={require("../../assets/img/flower1_img.png")} />
      </View>

      <Button title="회원가입" />
      <Button title="로그인" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "30%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});
