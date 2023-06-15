import React, { useEffect } from "react";
import { useState } from "react";
import { View, Image, TouchableOpacity, ImageBackground } from "react-native";

import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  align-items: center;
`;
const MainBody = styled.View`
  flex: 3;
  width: 100%;
`;

const Background = styled.ImageBackground`
  flex: 1;
`;

const Test = ({ navigation }) => {
  return (
    <Container>
      <MainBody>
        <Background
          source={require("../../assets/img/test/test_result_img.png")}
        ></Background>
      </MainBody>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => alert("치매안심센터: 1666-0921")}>
          <Image
            style={{
              marginTop: 0,
              marginLeft: 5,
              marginRight: 5,
              //marginBottom: 15,
              width: 180,
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../../assets/img/test/call_center_btn.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("알림을 보냈습니다!")}>
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
            source={require("../../assets/img/test/alarm_btn.png")}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Test;
