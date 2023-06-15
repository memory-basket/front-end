import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QuestionList, Home, MyPage } from "../screens";
import { Image, TouchableOpacity, ImageBackground } from "react-native";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="질문 리스트"
        component={QuestionList}
        options={{
          tabBarIcon: (focused) => (
            <Image
              style={{ resizeMode: "contain", width: 25, height: 25 }}
              source={require("../../assets/img/navigation/list.png")}
            />
          ),
          tabBarActiveTintColor: "#FFB800",
        }}
      />
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: (focused) =>
            focused ? (
              <Image
                style={{ resizeMode: "contain", width: 25, height: 25 }}
                source={require("../../assets/img/navigation/home_icon_selected.png")}
              />
            ) : (
              <Image
                style={{ resizeMode: "contain", width: 25, height: 25 }}
                source={require("../../assets/img/navigation/home.png")}
              />
            ),
          tabBarActiveTintColor: "#3C85FF",
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPage}
        options={{
          tabBarIcon: (focused) => (
            <Image
              // style={{ width: 25, height: 25 }}
              style={{ resizeMode: "contain", width: 25, height: 25 }}
              source={require("../../assets/img/navigation/my_icon.png")}
            />
          ),
          tabBarActiveTintColor: "#FF5370",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
