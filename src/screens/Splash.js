import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import styled from "styled-components/native";

const Textbox = styled.View`
  flex: 1;
  justify-content: center;
  background-color: "red";
`;
export default function QuestionList() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          GyeonggiBatangTTF_Regular: require("../../assets/fonts/GyeonggiBatangTTF_Regular.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const getFonts = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);
  if (!isReady) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Textbox>
        <Text style={[styles.titleText, { fontSize: 45 }]}> 종이꽃</Text>
        <Text style={styles.titleText}>: 항상 기억할게요</Text>
      </Textbox>
      <View>
        <Image
          style={{
            backgroundColor: "white",
            marginTop: "60%",
            marginLeft: "35%",
            alignSelf: "center",
            height: "60%",
            resizeMode: "contain",
          }}
          source={require("../../assets/img/flower1_img.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    // backgroundColor: "red",
  },
  titleText: {
    fontFamily: "GyeonggiBatangTTF_Regular",
  },
});
