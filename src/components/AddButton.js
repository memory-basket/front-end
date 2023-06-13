import React from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { theme } from "../theme";
import { ThemeProvider } from "styled-components";

const ButtonStyle = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  border-color: ${({ theme }) => theme.buttonBorder};
  align-items: center;
  justify-content: flex-end;
  margin: 0 20px;
  padding: 12px;
  border-radius: 7px;
`;

const Title = styled.Text`
  font-size: 35px;
`;
const AddButton = ({ title, onPress }) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyle onPress={onPress}>
        <Title>{title}</Title>
      </ButtonStyle>
    </ThemeProvider>
  );
};

export default AddButton;
