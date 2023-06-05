import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Question, Test } from '../screens';

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
      {/* <Stack.Screen name="Intro" component={Intro} /> */}
    </Stack.Navigator>
  );
};

export default StackNav;
