import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Stack';
import TabNav from './Tab';
import { createStackNavigator } from '@react-navigation/stack';
//import Auth from "./Auth";

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNav.Screen name="Tab" component={TabNav} />
      </StackNav>
    </NavigationContainer>
  );
};

export default Navigation;
