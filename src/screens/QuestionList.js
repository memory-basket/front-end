import React from 'react';
import styled from 'styled-components/native';
import TitleContainer from '../components/TitleContainer';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.background}; */
  padding: 20px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
  },
});

const QuestionList = ({ navigation }) => {
  return (
    <>
      <TitleContainer
        //give margintop 20 to the title
        // style={{ marginTop: 50 }}
        
        text="질문 리스트"
        onPressBack={() => navigation.navigate('Home')}
        onPressClose={() => navigation.navigate('Home')}
      />
      
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/question/question_list_bg.png')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      ></ImageBackground>
      {/* give margin 100 */}
      <Text style={{ marginTop: 100, fontSize: 20, color: '#ffffff' }}/>
      <Button style={styles.button} title="오늘의 질문" onPress={() => navigation.navigate('Question')}/>
      {/* make a transparent button */}
      
    </View>
    </>
  );
};

export default QuestionList;


