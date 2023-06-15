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

const Result = ({ navigation }) => {
  return (
    <Container>
      <MainBody>
        <Background
          source={require("../../../assets/img/dementia/result.png")}
        ></Background>
      </MainBody>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => alert("다시 하시겠습니까?")}>
          <Image
            style={{
            //   marginTop: 0,
            //   marginLeft: 5,
            //   marginRight: 5,
              //marginBottom: 15,
              width: 320,
              height: "100%",
              alignContent: "center",
              justifyContent: "center",
              resizeMode: "contain",
            }}
            source={require("../../../assets/img/dementia/button.png")}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Result;
