import { React, useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>안녕하세요,</Text>
        <Text>기억바구니와 함께</Text>
        <Text>소중한 기억을 오래 기억해요.</Text>
      </View>

      <View>
        <Image source={require("../../assets/img/flower1_img.png")} />
      </View>

      <Button title="카카오로 간편 시작" />
      <Button title="전화번호로 시작하기" />
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
