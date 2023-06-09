import React from "react";
import styled from "styled-components/native";
import { ImageBackground, Image, Text } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px 20px 0 20px;
`;
const ButtonContainer = styled.TouchableOpacity`
  margin: 0;
`;

const StyledText = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: 600;
  margin: 5px 20px;
`;
const StyledBtn = styled(Image)`
  width: 340px;
  height: 180px;
  margin: 0;
  padding: 0;
`;
const MyPage = ({ navigation }) => {
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
        <StyledText>환자</StyledText>
        <ButtonContainer onPress={() => navigation.navigate("AddPage")}>
          <StyledBtn
            source={require("../../../assets/img/mypage/add_btn.png")}
            style={{
              padding: 0,
              margin: 0,
              resizeMode: "contain",
            }}
          />
        </ButtonContainer>
      </Container>
    </ImageBackground>
  );
};

export default MyPage;
