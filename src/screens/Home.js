import * as React from "react";

import { StyleSheet } from "react-native";
import Button from "../components/Button";
import styled from "styled-components/native";
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 20px;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <StyledText>홍길동님 오늘을 기억해요!</StyledText>
      <Button title="MyPage" onPress={() => navigation.navigate("MyPage")} />
      <Button title="Landing" onPress={() => navigation.navigate("Landing")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
    </Container>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
export default Home;
