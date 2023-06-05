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
        <View>
          <Text>종이꽃,</Text>
          <Text>: 항상 기억할게요</Text>
        </View>

        <View>
          <Text>종이꽃과 함께할</Text>
          <Text>사용자의 유형을 선택해 주세요.</Text>
        </View>
      </View>

      <TouchableOpacity
      // onPress={() => goToSignUp(appKeys.consumer)}
      // style={styles.typeBtn}
      >
        <Image
          //   style={{
          //     width: 132,
          //     height: 132,
          //     borderRadius: 100,
          //     overflow: 'hidden',
          //     borderWidth: 3,
          //     borderColor: 'blue',}}
          source={require("../../assets/img/flower2_img.png")}
        />
        <Text>보호자</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require("../../assets/img/flower1_img.png")} />
        <Text>보호자</Text>
      </TouchableOpacity>
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
