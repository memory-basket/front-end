import React from 'react';
import { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Button from '../components/Button';
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

const Home = ({ navigation }) => {
  return (
    <Container>
      <StyledText>홍길동님 오늘을 기억해요!</StyledText>
      <Button
        title="오늘의 질문"
        onPress={() => navigation.navigate('Question')}
      />
      <Button
        title="치매 진단"
        onPress={() => navigation.navigate('Test')}
      />
    </Container>
  );
};

export default Home;