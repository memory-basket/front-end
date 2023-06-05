import React from 'react';
import { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
//import Button from '../components/Button';
import styled from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  //background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 20px;
`;

const Question = ({ navigation }) => {
  return (
    <Container>
      <StyledText>오늘의 질문 페이지입니다!</StyledText>
      {/* <Button
        title="오늘의 질문"
        //onPress={() => navigation.navigate('EnterName')}
      /> */}
    </Container>
  );
};

export default Question;
