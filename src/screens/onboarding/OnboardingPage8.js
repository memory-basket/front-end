import React from "react";
import styled from "styled-components/native";
import NextButton from "../../components/NextButton";
import { ImageBackground } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 725px 20px 0 20px;
`;

const OnboardingPage8 = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/img/auth/onboarding2_4.png")}
      style={{
        flex: 1,
        width: "100%",
        margin: 0,
      }}
    >
      <Container>
        <NextButton
          title="시작하기"
          onPress={() => navigation.navigate("Question")}
        />
      </Container>
    </ImageBackground>
  );
};

export default OnboardingPage8;
