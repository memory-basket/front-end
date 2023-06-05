import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
// import { Home, Question, Test, Landing, Login, Extra, SelectType, SignUp, Splash } from '../screens';
import { Home, Question, Test, Landing, SelectType, SignUp, Splash } from '../screens';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: '#ffffff' } }}
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
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="SelectType" component={SelectType} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Splash" component={Splash} />
      {/* <Stack.Screen name="Extra" component={Extra} /> */}

    </Stack.Navigator>
  );
};

export default StackNav;
