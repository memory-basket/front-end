import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const questions = [
  "질문 1",
  "질문 2",
  "질문 3",
  // 추가 질문들...
];

const DementiaLogic = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      // 진단이 완료된 경우 결과 페이지로 이동하거나 결과를 계산하는 로직을 추가할 수 있습니다.
      // 예를 들어, 다음과 같이 진단 결과를 계산하고 결과 페이지로 이동하는 로직을 추가할 수 있습니다.
      const diagnosisResult = calculateDiagnosisResult(newAnswers);
      // 결과 페이지로 이동하거나 결과를 출력하는 로직을 추가합니다.
      console.log("Diagnosis Result:", diagnosisResult);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateDiagnosisResult = (answers) => {
    // 답변을 기반으로 진단 결과를 계산하는 로직을 작성합니다.
    // 여기서는 단순히 답변들의 합계를 반환하는 예시를 들었습니다.
    const sum = answers.reduce((total, answer) => total + answer, 0);
    return sum;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{questions[currentQuestion]}</Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="예" onPress={() => handleAnswer(1)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="아니오" onPress={() => handleAnswer(0)} />
      </View>
    </View>
  );
};

export default DementiaLogic;
