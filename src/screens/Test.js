import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import TopButton from "../components/TopButton";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 20px;
`;

const Title = styled.Text`
  align-items: center;
`;

const Test = ({ navigation }) => {
  return (
    <>
      <Container>
        <TopButton
          text="치매 진단 결과"
          onPressBack={() => navigation.navigate("Home")}
          onPressClose={() => navigation.navigate("Home")}
        />
      </Container>
      <StyledText>치매 진단 페이지입니다!</StyledText>
    </>
  );
};

export default Test;
