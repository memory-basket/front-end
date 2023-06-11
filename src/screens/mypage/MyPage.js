import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components";

const TitleContainer = styled.View`
  width: 100%;
  background-color: #888888;
  align-items: center;
  margin: 5% 0 5% 0;
`;

const Type = styled.Text`
  font-size: 30;
  font-weight: bold;
  /* background-color: red */
`;

const MyPage = () => {
  return (
    <View style={StyleSheet.container}>
      <TitleContainer>
        <Type>환자</Type>
      </TitleContainer>

      <TouchableOpacity>
        <Text>추가하기</Text>
      </TouchableOpacity>
      {/* <View style={Styles.container}> */}
      <Text>마이페이지입니다.</Text>
      {/* </View> */}
    </View>
  );
};

export default MyPage;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});
