import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
`;

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 150,
        resizeMode: "contain",
      }}
      source={require("../../assets/img/home/todays_question_btn.png")}
    ></TouchableOpacity>
  );
};

export default Button;
