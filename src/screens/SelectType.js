import { React, useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

export default function SelectType({ navigation }) {
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
          source={require("../../assets/img/cloudy2_img.png")}
        />
      </View>

      <View>
        <Text style={styles.text}> 종이꽃</Text>
        <Text style={styles.text2}>: 항상 기억할게요</Text>
        <Text>종이꽃과 함께할 {"\n"} 사용자의 유형을 선택해주세요.</Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const type = 1;
            navigation.navigate("OnboardingPage1");
          }}
        >
          <Text style={{ fontSize: "40px", color: "white" }}>보호자</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const type = 2;
            navigation.navigate("OnboardingPage1");
          }}
        >
          <Text style={styles.btnText}>치매 환자</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEF8",
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
