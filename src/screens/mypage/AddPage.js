import React from "react";
import styled from "styled-components/native";
import { ImageBackground, Image, Text } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 0 20px;
`;
const ButtonContainer = styled.TouchableOpacity`
  margin: 0;
`;

const StyledText = styled.Text`
  //  flex: 1;
  color: black;
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  //  margin: 10px 20px;
`;

const TextContainer = styled.View`
  flex: 1;
  align-items: center;
`;
const StyledBtn = styled(Image)`
  width: 220px;
  height: 220px;
  //background-color: red;
  margin: 50px 0 30px 0;
  padding: 0;
`;
const AddPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/img/mypage/mypage_bg.png")}
      style={{
        flex: 1,
        width: "100%",
        margin: 0,
      }}
    >
      <Container>
        <ButtonContainer onPress={() => navigation.navigate("OnboardingPage1")}>
          <StyledBtn
            source={require("../../../assets/img/mypage/camera_btn.png")}
            style={{
              padding: 0,
              margin: 0,
              resizeMode: "contain",
            }}
          />
        </ButtonContainer>

        <TextContainer>
          <StyledText>카메라로</StyledText>
          <StyledText>그림을 찍어주세요!</StyledText>
        </TextContainer>
      </Container>
    </ImageBackground>
  );
};

export default AddPage;
