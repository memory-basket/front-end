//유형선택 페이지 버튼 간격 줄여야 함

import React from "react";
import styled from "styled-components/native";
import { Image, ImageBackground } from "react-native";

const Container = styled.View`
  // height: 500px;
  align-items: center;
  justify-content: flex-start;
  margin: 370px 0px 0px 0px;
`;

const StyledBtn = styled(Image)`
  width: 380px;
  height: 220px;
  margin: 0;
  padding: 0;
`;

const ButtonContainer = styled.TouchableOpacity`
  margin: 0;
`;

const SelectType = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/img/auth/select_type_bg_img.png")}
      style={{
        flex: 1,
        width: "100%",
        margin: 0,
      }}
    >
      <Container>
        <ButtonContainer onPress={() => navigation.navigate("OnboardingPage1")}>
          <StyledBtn
            source={require("../../assets/img/auth/type1_btn.png")}
            style={{
              padding: 0,
              margin: 0,
            }}
          />
        </ButtonContainer>

        <ButtonContainer onPress={() => navigation.navigate("OnboardingPage5")}>
          <StyledBtn source={require("../../assets/img/auth/type2_btn.png")} />
        </ButtonContainer>
      </Container>
    </ImageBackground>
  );
};

export default SelectType;
