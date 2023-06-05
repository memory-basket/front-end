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
        <Text style={styles.text}> 종이꽃</Text>
        <Text style={styles.text2}>: 항상 기억할게요</Text>
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
          <Text style={{ fontSize: "40px", color: "white" }}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>로그인</Text>
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
