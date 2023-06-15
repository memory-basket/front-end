import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 100%;
  align-items: center;
`;
const MainBody = styled.View`
  /* margin: 0; */
  flex: 3;
  width: 100%;
  /* height: 200px; */
  /* align-items: center; */
  /* justify-content: center; */
`;
const Background = styled.ImageBackground`
  flex: 1;
`;

const Garden = ({ navigation }) => {
  return (
    <Container>
      <MainBody>
        <Background source={require('../../assets/img/garden.png')} />
      </MainBody>
    </Container>

  
    // <View>
    //   <ImageBackground
    //   source={require('../../assets/img/garden.png')}
    //   />
    // </View>
    
  );
};

export default Garden;
