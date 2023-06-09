//이름 받는 페이지입니다.

import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

const Login = () => {
  return (
    <Container>
      <StyledText>Signin</StyledText>
    </Container>
  );
};

export default Login;
