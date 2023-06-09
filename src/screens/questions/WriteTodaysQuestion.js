import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
import styled from "styled-components/native";
import TitleContainer from "../../components/TitleContainer";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff2d1;
`;

const WriteTodaysQuestion = () => {
  return (
    <Container>
      <TitleContainer
        text="오늘의 질문"
        onPressBack={() => navigation.navigate("TodaysQuestion")}
        onPressClose={() => navigation.navigate("TodaysQuestion")}
      />
      <Image
        style={{
          flex: 1,
          resizeMode: "contain",
        }}
        source={require("../../../assets/img/question/question_flower_img.png")}
      />
      <Text>어릴 적 나의 꿈은 무엇인가요?</Text>
      <Text>#1번째 질문 06.02.2023</Text>
      <TouchableOpacity title="눌러서 답변을 입력해주세요.">
        <Text>답변을 입력해주세요.</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default WriteTodaysQuestion;
