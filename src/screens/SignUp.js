import { React, useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 125,
            height: 87,
            marginTop: 10,
            marginLeft: "65%",
            resizeMode: "contain",
          }}
          source={require("../../assets/img/cloudy_img.png")}
        />
      </View>

      <View>
        <Text style={styles.text2}>안녕하세요,</Text>
        <Text style={styles.text2}>기억바구니와 함께</Text>
        <Text style={styles.text2}>소중한 기억을 오래 기억해요.</Text>
      </View>

      <View>
        <Image
          //구름
          style={{
            width: 193,
            height: 87,
            marginLeft: 10,
            resizeMode: "contain",
          }}
          source={require("../../assets/img/cloud_img.png")}
        />
      </View>

      <View>
        <Image
          //꽃
          style={{
            width: 164,
            height: 246,
            marginLeft: "50%",
            // marginBottom: "15%",
            resizeMode: "contain",
          }}
          source={require("../../assets/img/flower1_img.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>카카오로 간편 시작</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>전화번호로 시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2D1",
    // alignItems: "center",
    // justifyContent: "center",
  },

  text: {
    //종이꽃 스타일
    marginTop: "10%",
    marginLeft: 12,
    fontSize: "32px",
    lineHeight: "60%",
    // fontFamily: "Gyenggi",
  },
  text2: {
    marginLeft: 12,
    fontSize: "24px",
  },

  buttonContainer: {
    alignItems: "center",
  },

  button: {
    width: "90%",
    height: 75,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "#FFCF53",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontSize: "40px",
  },
});
