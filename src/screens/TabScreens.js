import React from "react";
import styled from "styled-components/native";
import MyPage from "./mypage/MyPage";

const Container = styled.View`
  flex: 1;
  //background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

export const List = () => {
  return (
    <Container>
      <StyledText>List</StyledText>
    </Container>
  );
};

export const Main = () => {
  return (
    <Container>
      <StyledText>Main</StyledText>
    </Container>
  );
};

export const My = () => {
  return (
    <Container>
      <StyledText>My</StyledText>
    </Container>
  );
};
