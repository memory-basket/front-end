import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QuestionList, Home, MyPage } from "../screens";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={QuestionList} />
      <Tab.Screen name="My" component={MyPage} />
    </Tab.Navigator>
  );
};

export default TabNav;
