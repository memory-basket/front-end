import React, { useEffect } from "react";
import { useState } from "react";
//import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Style,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  align-items: center;
`;
const MainBody = styled.View`
  /* margin: 0; */
  flex: 3;
  width: 100%;
  /* height: 200px; */
  /* align-items: center; */
  /* justify-content: center; */
`;

const Background = styled.ImageBackground`
  flex: 1;
`;

//메인 메시지
// const MsgContainer = styled.View`
//   margin: auto;
//   width: 80%;
//   height: 30%;
//   background-color: #ffec80;
//   align-items: center;
// `;

// const StyledText = styled.Text`
//   font-size: 30px;
//   margin: 20px;
//   //  font-family: "GyeonggiBatangOTF_Regular";
// `;

// const BtnContainer = styled.View`
//   width: 100%;
//   flex: 1;
//   flex-direction: row;
// `;

// const Btn = styled.TouchableOpacity`
//   margin: 0;
//   width: 150px;
//   height: 100px;
//   /* margin: auto; */
//   /* margin-left: "1%"; */
//   background-color: #3c85ff;
//   border-radius: 3px;
//   /* align-items: center; */
//   /* justify-content: space-between; */
// `;

const Question = ({ navigation }) => {
  return (
    <Container>
      <MainBody>
        <Background source={require("../../assets/img/home/home_bg_img.png")}>
          {/* <MsgContainer> */}
          <Image
            style={{
              marginTop: "20%",
              paddingTop: 0,
              width: "80%",
              height: "25%",
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../../assets/img/home/msg_box.png")}
          />

          {/* <StyledText>
              <Text>홍길동 보호자님 </Text>
              <Text>오늘을 같이 기억해요! </Text>
            </StyledText> */}
          {/* </MsgContainer> */}
          <Image
            style={{
              paddingTop: 0,
              width: "90%",
              height: "70%",
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../../assets/img/home/flower1_1.png")}
          />
        </Background>
      </MainBody>

      <View
        style={{
          // width: "100%",
          // height: "100%",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TodaysQuestion")}>
          <Image
            style={{
              marginTop: 0,
              marginLeft: 5,
              marginRight: 5,
              marginBotton: 15,
              width: 180,
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../../assets/img/home/todays_question_btn.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Test")}>
          <Image
            style={{
              marginTop: 0,
              marginLeft: 5,
              marginRight: 5,
              marginBotton: 15,
              width: 180,
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../../assets/img/home/test_result_btn.png")}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Question;
