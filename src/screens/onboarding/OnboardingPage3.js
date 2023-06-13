import React from "react";
import styled from "styled-components/native";
import NextButton from "../../components/NextButton";
import { ImageBackground } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 725px 20px 0 20px;
`;

const OnboardingPage3 = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/img/auth/onboarding1_3.png")}
      style={{
        flex: 1,
        width: "100%",
        margin: 0,
      }}
    >
      <Container>
        <NextButton
          title="다음으로"
          onPress={() => navigation.navigate("OnboardingPage4")}
        />
      </Container>
    </ImageBackground>
  );
};

export default OnboardingPage3;
