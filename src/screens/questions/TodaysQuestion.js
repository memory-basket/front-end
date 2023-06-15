import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TitleContainer from '../../components/TitleContainer';
import { WriteTodaysQuestion } from './WriteTodaysQuestion';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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
  //font-family: "GyeonggiBatangTTF_Regular";
  font-family: 'my-custom-font';
`;

const Answer = styled.Text`
  color: #5e5e5e;
  //font-family: "GyeonggiBatangTTF_Regular";
  font-family: 'my-custom-font';
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
  
  // const [fontsLoaded] = Font.loadAsync({
  //   'my-custom-font': require('./assets/fonts/GyeonggiBatangTTF_Regular.ttf'),
  //   // 'my-second-font' : require('../assets/fonts/SUIT-Regular.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {}, [fontsLoaded]);
  return (
    <Container>
      <TitleContainer
        style={{ backgroundColor: 'blue' }}
        text="오늘의 질문"
        onPressBack={() => navigation.navigate('Question')}
        onPressClose={() => navigation.navigate('Question')}
      />
      <Image
        style={{
          marginTop: '10%',
          marginBottom: '10%',
          height: '20%',
          resizeMode: 'contain',
        }}
        source={require('../../../assets/img/question/question_flower_img.png')}
      />

      <QuestionContainer>
        <Question style={styles.titleText}>
          어릴 적 나의 꿈은 무엇인가요?
        </Question>
        <Answer>#1번째 질문 06.02.2023</Answer>
      </QuestionContainer>
      <MyContainer>
        <Text style={styles.titleText}>홍숙자</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('WriteTodaysQuestion')}
        >
          <Answer>눌러서 답변을 입력해주세요.</Answer>
        </TouchableOpacity>
      </MyContainer>
      <YourContainer>
        <Text style={styles.titleText}>홍길동</Text>
        <Answer>상대방은 아직 답변을 하지 않았어요.</Answer>
        <Text>{text}</Text>
      </YourContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'GyeonggiBatangTTF_Regular',
  },
});

export default TodaysQuestion;
