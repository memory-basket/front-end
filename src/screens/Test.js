import React from "react";
import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import TitleContainer from "../components/TitleContainer";

const Container = styled.View`
  /* flex: 1; */
  /* align-items: center;*/
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin: 20px;
`;

const Title = styled.Text`
  justify-content: center;
  /* flex: 1; */
`;

const Test = ({ navigation }) => {
  return (
    <>
      <TitleContainer
        text="치매 진단 결과"
        onPressBack={() => navigation.navigate("Home")}
        onPressClose={() => navigation.navigate("Home")}
      />
      <Container></Container>
      <StyledText>
        <Title>
          <>
            <Text>홍길동님 검사 결과</Text>
          </>
        </Title>

        <Text>
          아직 진단을 하지 않았어요!
          <Text>
            <Text style={{ color: "blue" }}>치매 진단 검사</Text>를
            시행해주세요!
          </Text>
        </Text>
      </StyledText>

      <TouchableOpacity
        style={{ color: "blue" }}
        onPress={() => alert("hi")}
        pressRetentionOffset={{ bottom: 10, top: 10, left: 10, right: 10 }}
      >
        <Text>치매진단 시작하기</Text>
        <Image alt="치매 진단 시작하기" />
      </TouchableOpacity>
    </>
  );
};

export default Test;
