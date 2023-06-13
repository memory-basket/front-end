import React from "react";
import styled from "styled-components/native";
import AuthButton from "../components/AuthButton";

import { KAKAO_AUTH_URL } from "../components/OAuth";
import { Image, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import KaKaoLogin from "./KaKaoLogin";

const Container = styled.View`
  flex: 1;
  //justify-content: center;
  align-items: center;
  padding: 630px 20px 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

const StyledBtn = styled.Image`
  width: 370px;
  height: 60px;
  margin-bottom: 10px;
`;

const SignUp = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/img/auth/signup_bg_img.png")}
      style={{
        flex: 1,
        width: "100%",
        margin: 0,
      }}
    >
      <Container>
        <TouchableOpacity>
          <StyledBtn
            source={require("../../assets/img/auth/kakao_login_btn.png")}
          />
        </TouchableOpacity>

        <AuthButton
          // style={{ flex: 1 }}
          title="전화번호로 시작하기"
          onPress={() => navigation.navigate("SelectType")}
        />
      </Container>
    </ImageBackground>
  );
};

export default SignUp;
