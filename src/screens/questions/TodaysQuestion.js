import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";
import TitleContainer from "../../components/TitleContainer";
import Navigation from "../../navigations/index";
import { WriteTodaysQuestion } from "./WriteTodaysQuestion";
import * as Font from "expo-font";
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff2d1;
`;

const QuestionContainer = styled.View`
  flex: 2;
  width: 95%;
`;
const Question = styled.Text`
  font-size: 20;
`;

const Answer = styled.Text`
  color: #5e5e5e;
`;
const MyContainer = styled.View`
  flex: 2;
  width: 95%;
`;

const YourContainer = styled.View`
  flex: 2;
  width: 95%;
`;

const TodaysQuestion = ({ navigation, text }) => {
  const [isReady, setIsReady] = useState(false);
  // const [text, setText] = useState("");

  // const onChangeText = (text) => {
  //   setText(text);
  // };
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          GyeonggiBatangTTF_Regular: require("../../../assets/fonts/GyeonggiBatangTTF_Regular.ttf"),
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

    // return Font.loadAsync({
    //   GyeonggiBatangTTF_Regular: require("../../../assets/fonts/GyeonggiBatangTTF_Regular.ttf"),
    // });
  }

  return (
    <Container>
      <TitleContainer
        style={{ backgroundColor: "blue" }}
        text="오늘의 질문"
        onPressBack={() => navigation.navigate("Question")}
        onPressClose={() => navigation.navigate("Question")}
      />
      <Image
        style={{
          marginTop: "10%",
          marginBottom: "10%",
          height: "20%",
          resizeMode: "contain",
        }}
        source={require("../../../assets/img/question/question_flower_img.png")}
      />

      <QuestionContainer>
        <Question style={styles.titleText}>
          어릴 적 나의 꿈은 무엇인가요?
        </Question>
        <Answer>#1번째 질문 06.02.2023</Answer>
      </QuestionContainer>
      <MyContainer>
        <Text>홍숙자</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("WriteTodaysQuestion")}
        >
          <Answer>눌러서 답변을 입력해주세요.</Answer>
        </TouchableOpacity>
      </MyContainer>
      <YourContainer>
        <Text>홍길동</Text>
        <Answer>상대방은 아직 답변을 하지 않았어요.</Answer>
        <Text>{text}</Text>
      </YourContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "GyeonggiBatangTTF_Regular",
  },
});

export default TodaysQuestion;
