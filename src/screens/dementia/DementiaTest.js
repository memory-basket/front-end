//basic react native setting
import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';

const questionList = [
  '1. 당신은 기억력에 문제가 있습니까?',
  '2. 당신의 기억력은 10년 전에 비해 저하되었습니까?',
  '3. 당신은 기억력이 동년의 다른 사람들에 비해 나쁘다고 생각합니까?',
  '4. 당신은 기억력이 저하로 일상생활에 불편을 느끼십니까?',
  '5. 당신은 최근에 일어난 일을 기억하는 것이 어렵습니까?',
  '6. 당신은 며칠 전에 나눈 대화 내용을 기억하는 것이 어렵습니까?',
  '7. 당신은 며칠 전에 한 약속을 기억하기 어렵습니까?',
  '8. 당신은 친한 사람의 이름을 기억하기 어렵습니까?',
  '9. 당신은 물건 둔 곳을 기억하기 어렵습니까?',
  '10. 당신은 이전에 비해 물건을 자주 잃어버립니까?',
  '11. 당신은 집 근처에서 길을 잃은 적이 있습니까?',
  '12. 당신은 가게에서 사려고 하는 두세 가지 물건의 이름을 기억하기 어렵습니까?',
  '13. 당신은 가스불이나 전깃불 끄는 것을 기억하기 어렵습니까?',
  '14. 당신은 자주 사용하는 전화번호(자신 혹은 자녀의 집)를 기억하기 어렵습니까?',
];
var questionNum = 0;

const DementiaTest = ({ navigation }) => {
  const [questionNum, setQuestionNum] = useState(0); // [state변수, state변수를 바꿔주는 함수
  const [text, setText] = useState({
    message: questionList[questionNum],
  });

  const onChangeText = () => {
    if (questionNum == questionList.length - 1) {
      console.log('result');
      navigation.navigate('Result');
      return;
    }

    var nextNum = questionNum + 1;

    setText({
      message: questionList[nextNum],
    });
    console.log(text.message);
    console.log(questionNum);
    console.log(nextNum);

    setQuestionNum(nextNum);
  };

  return (
    <Container>
      <View
        style={{
          //width: "100%",
          //height: "100%",
          //flex: 1,
          flexDirection: 'column',
        }}
      >
        <Image
              style={{
                marginTop: 0,
                marginLeft: 0.5,
                marginRight: 0.5,
                marginBottom: 5,
                width: 380,
                height: 210,
                resizeMode: 'contain',
              }}
              source={require('../../../assets/img/dementia/title.png')}/>
              
        <Button title={text.message} style={{marginTop: 10, padding: 10, marginLeft: 5, marginRight: 5}}/>

        <View
          style={{
            //width: "100%",
            //height: "100%",
            //flex: 1,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            //  onPress={backgroundcolor = 'red'}
          >
            <Image
              style={{
                marginTop: 50,
                marginLeft: 0.5,
                marginRight: 0.5,
                marginBottom: 5,
                width: 200,
                height: 120,
                resizeMode: 'contain',
              }}
              source={require('../../../assets/img/dementia/yes.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                marginTop: 50,
                marginLeft: 0.5,
                marginRight: 0.5,
                marginBottom: 5,
                width: 200,
                height: 120,
                resizeMode: 'contain',
              }}
              source={require('../../../assets/img/dementia/no.png')}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => onChangeText()}>
          <Image
            style={{
              marginTop: 100,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 15,
              width: 320,
              height: 210,
              resizeMode: 'contain',
              //alignContent: 'center',
                alignSelf: 'center',
              justifyContent: 'center',
            }}
            source={require('../../../assets/img/dementia/next.png')}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  align-items: center;
`;

// const styles = StyleSheet.create({
//     // container: {
//     //   flex: 1,
//     //   alignItems: 'center',
//     //   justifyContent: 'center',
//     // },

//     Button: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 5,
//       height: 40,
//       backgroundColor: 'rgba(0, 0, 0, 0)',
//     },
//   });

export default DementiaTest;
