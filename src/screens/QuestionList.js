import React from 'react';
import styled from 'styled-components/native';
import TitleContainer from '../components/TitleContainer';
import { StyleSheet, Text, View, Image } from "react-native";


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

const QuestionList = ({navigation}) => {
  return (
    <Container>
      {/* <StyledText>질문 리스트</StyledText> */}
      <TitleContainer
        text="질문 리스트"
        onPressBack={() => navigation.navigate('Home')}
        onPressClose={() => navigation.navigate('Home')}
      />
      <View>
        <Image
          style={{
            // backgroundColor: "white",
            // marginTop: "60%",
            // marginLeft: "35%",
            // alignSelf: "center",
            height: "100%",
            resizeMode: "contain",
          }}
          source={require("../../assets/img/question/question_list_bg.png")}
        />
      </View>
    </Container>
  );
};

export default QuestionList;
