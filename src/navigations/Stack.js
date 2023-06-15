import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Question,
  Test,
  Landing,
  SelectType,
  SignUp,
  Login,
  TodaysQuestion,
  WriteTodaysQuestion,
  OnboardingPage1,
  OnboardingPage2,
  OnboardingPage3,
  OnboardingPage4,
  OnboardingPage5,
  OnboardingPage6,
  OnboardingPage7,
  OnboardingPage8,
  MyPage,
  QuestionList,
  AddPage,
} from "../screens";
import TabNav from "./Tab";
const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNav"
      screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}
      options={{ headerShown: false }}
    >
      {/* <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}
    > */}
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* Questions = 오늘의 질문, Test = 치매 진단, Result = 치매 진단 결과 */}
      <Stack.Screen
        name="Question"
        component={Question}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Result" component={Result} /> */}
      {/* 필요하신 페이지들입니다 */}
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="SelectType"
        component={SelectType}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TodaysQuestion" component={TodaysQuestion} />
      <Stack.Screen
        name="WriteTodaysQuestion"
        component={WriteTodaysQuestion}
      />
      <Stack.Screen
        name="OnboardingPage1"
        component={OnboardingPage1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingPage2"
        component={OnboardingPage2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingPage3"
        component={OnboardingPage3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingPage4"
        component={OnboardingPage4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingPage5"
        component={OnboardingPage5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingPage6"
        component={OnboardingPage6}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingPage7"
        component={OnboardingPage7}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingPage8"
        component={OnboardingPage8}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="QuestionList" component={QuestionList} />
      <Stack.Screen name="AddPage" component={AddPage} />
    </Stack.Navigator>
  );
};

export default StackNav;
