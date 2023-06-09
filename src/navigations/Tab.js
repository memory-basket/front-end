import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List, Main, My } from '../screens';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator initialRouteName="Main">
        <Tab.Screen name="List" component={List}/>
        <Tab.Screen name="Main" component={Main}/>
        <Tab.Screen name="My" component={My}/>
    </Tab.Navigator>
  );
};

export default TabNav;
