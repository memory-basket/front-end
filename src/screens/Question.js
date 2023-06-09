import React from "react";
import { useState } from "react";
//import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from "react-native";
//import Button from '../components/Button';
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 20px;
`;

const MainBody = styled.View`
  flex: 3;
  width: 100%;
  height: 200px;
  // background-color: blue;
  // background-image: url("../../assets/flower1_img.png");
  // background-size: 100%;
`;
const Question = ({ navigation }) => {
  return (
    <Container>
      <MainBody>
        {/* <Image source={require("../../assets/flower1_img.png")} /> */}
        <Text>홍길동 보호자님 오늘을 같이 기억해요!</Text>
      </MainBody>
      <StyledText>오늘의 질문 페이지입니다!</StyledText>

      {/* <Button
        title="오늘의 질문"
        //onPress={() => navigation.navigate('EnterName')}
      /> */}
    </Container>
  );
};

export default Question;
