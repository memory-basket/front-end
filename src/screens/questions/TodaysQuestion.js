import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import TitleContainer from "../../components/TitleContainer";
import Navigation from "../../navigations/index";
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff2d1;
`;

const TodaysQuestion = ({ navigation }) => {
  return (
    <Container>
      <TitleContainer
        text="오늘의 질문"
        onPressBack={() => navigation.navigate("Question")}
        onPressClose={() => navigation.navigate("Question")}
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
      <Text>홍숙자</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("WriteTodaysQuestion")}
        title="눌러서 답변을 입력해주세요."
      >
        <Text>눌러서 답변을 입력해주세요.</Text>
      </TouchableOpacity>
      <Text>홍길동</Text>
      <Text>상대방은 아직 답변을 하지 않았어요.</Text>
    </Container>
  );
};

export default TodaysQuestion;
