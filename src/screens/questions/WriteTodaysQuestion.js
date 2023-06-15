import React, { useState, onChangeText } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import TitleContainer from '../../components/TitleContainer';
import Button from '../../components/Button';

const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff2d1;
`;

const QuestionContainer = styled.View`
  flex: 2;
  width: 95%;
`;
const Question = styled.Text`
  font-size: 20;
`;

const Answer = styled.Text`
  color: #5e5e5e;
`;

const WriteTodaysQuestion = ({ navigation }) => {
  const [text, setText] = useState('');

  const onChangeText = (text) => {
    setText(text);
  };

  const addContent = () => {
    navigation.navigate('TodaysQuestion', { answerText: text });
  };

  return (
    <Container>
      <TitleContainer
        style={{ backgroundColor: 'blue' }}
        text="오늘의 질문"
        onPressBack={() => navigation.navigate('Question')}
        onPressClose={() => navigation.navigate('Question')}
      />
      <Image
        style={{
          marginTop: '10%',
          marginBottom: '10%',
          height: '20%',
          resizeMode: 'contain',
        }}
        source={require('../../../assets/img/question/question_flower_img.png')}
      />

      <QuestionContainer>
        <Question>어릴 적 나의 꿈은 무엇인가요?</Question>
        <Answer>#1번째 질문 06.02.2023 {'\n\n'}</Answer>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="답변을 입력해주세요."
        />
        <TouchableOpacity onPress={addContent}>
          <Text
            style={{fontSize: 24}}
          >제출</Text>
        </TouchableOpacity>
        {/* <Text>{text}</Text> */}
      </QuestionContainer>
    </Container>
  );
};

export default WriteTodaysQuestion;

// import React, { useState, onChangeText } from "react";
// import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
// import styled from "styled-components/native";
// import TitleContainer from "../../components/TitleContainer";

// const Container = styled.View`
//   flex: 1;
//   height: 100%;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff2d1;
// `;

// const QuestionContainer = styled.View`
//   flex: 2;
//   width: 95%;
// `;
// const Question = styled.Text`
//   font-size: 20;
// `;

// const Answer = styled.Text`
//   color: #5e5e5e;
// `;

// const WriteTodaysQuestion = ({ navigation }) => {
//   const [text, setText] = useState("");

//   const onChangeText = (text) => {
//     setText(text);
//   };

//   const addContent = () => {
//     const onChangeText = (text) => {
//       setText(text);
//     };
//     console.log(text);
//   };

//   return (
//     <Container>
//       <TitleContainer
//         style={{ backgroundColor: "blue" }}
//         text="오늘의 질문"
//         onPressBack={() => navigation.navigate("Question")}
//         onPressClose={() => navigation.navigate("Question")}
//       />
//       <Image
//         style={{
//           marginTop: "10%",
//           marginBottom: "10%",
//           height: "20%",
//           resizeMode: "contain",
//         }}
//         source={require("../../../assets/img/question/question_flower_img.png")}
//       />

//       <QuestionContainer>
//         <Question>어릴 적 나의 꿈은 무엇인가요?</Question>
//         <Answer>#1번째 질문 06.02.2023 {"\n\n"}</Answer>
//         <TextInput
//           onChangeText={onChangeText}
//           value={text}
//           placeholder="답변을 입력해주세요."
//         />
//         <TouchableOpacity onPress={addContent}>
//           <Text>제출</Text>
//         </TouchableOpacity>
//         <Text>{text}</Text>
//       </QuestionContainer>
//     </Container>
//   );
// };

// export default WriteTodaysQuestion;
