import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { Home, Question, Test, Landing, Login, Extra, SelectType, SignUp, Splash } from '../screens';
import {
  Home,
  Question,
  Test,
  Landing,
  SelectType,
  SignUp,
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
} from "../screens";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* Questions = 오늘의 질문, Test = 치매 진단, Result = 치매 진단 결과 */}
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Test" component={Test} />
      {/* <Stack.Screen name="Result" component={Result} /> */}
      {/* 필요하신 페이지들입니다 */}
      <Stack.Screen name="Landing" component={Landing} />
      {/*<Stack.Screen name="Login" component={Login} />*/}
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
      {/* <Stack.Screen name="Extra" component={Extra} /> */}
    </Stack.Navigator>
  );
};

export default StackNav;
