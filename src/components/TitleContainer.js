import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  
`;

const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
`;

const Button = styled.View`
  /* width: 20;
  height: 20; */
`;

const TitleContainer = ({ text, onPressBack, onPressClose }) => {
  return (
    <>
      <Container style={{ marginTop: 40 }}/>
      <Container>
        <Button>
          <TouchableOpacity
            onPress={onPressBack}
            pressRetentionOffset={{ bottom: 10, top: 10, left: 10, right: 10 }}
          >
            <Image
              source={require("../../assets/img/back_btn.png")}
              alt="뒤로 가기"
            />
          </TouchableOpacity>
        </Button>
        <Text>{text}</Text>

        <Button>
          <TouchableOpacity
            onPress={onPressClose}
            pressRetentionOffset={{ bottom: 10, top: 10, left: 10, right: 10 }}
          >
            <Image
              source={require("../../assets/img/close_btn.png")}
              alt="닫기"
            />
          </TouchableOpacity>
        </Button>
      </Container>
    </>
  );
};

TitleContainer.defaultProps = {
  text: "page-name",
  onPressBack: () => alert("back"),
  onPressClose: () => alert("close"),
};

export default TitleContainer;
