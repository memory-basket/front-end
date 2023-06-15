import * as React from "react";

import { StyleSheet, Text } from "react-native";
import Button from "../components/Button";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { WebView } from "react-native-webview";
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
      <Button
        title="오늘의 질문"
        onPress={() => navigation.navigate("Question")}
      />
      <Button title="치매 진단" onPress={() => navigation.navigate("Test")} />
      <Button title="MyPage" onPress={() => navigation.navigate("MyPage")} />
      <Button title="Landing" onPress={() => navigation.navigate("Landing")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
      <Text
        style={styles.textstyle}
        onPress={() => {
          WebBrowser.openBrowserAsync("https://www.naver.com");
        }}
      >
        hihi
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
export default Home;
