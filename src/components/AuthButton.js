import React from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const ButtonStyle = styled.TouchableOpacity`
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: flex-end;
  margin: 0 20px;
  padding: 12px;
  border-radius: 7px;
`;

const Title = styled.Text`
  font-size: 35px;
`;
const AuthButton = ({ title, onPress }) => {
  return (
    <ButtonStyle onPress={onPress}>
      <Title>{title}</Title>
    </ButtonStyle>
  );
};

export default AuthButton;
