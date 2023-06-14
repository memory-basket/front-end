import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Stack';
import TabNav from './Tab';
import { createStackNavigator } from '@react-navigation/stack';
//import Auth from "./Auth";

//const Stack = createStackNavigator();

const Navigation = () => {
  return (
    // <NavigationContainer>
    //   <StackNav>
    //     <Stack.screen name="Tab" component={TabNav} />
    //   </StackNav>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="Tab" component={TabNav} />
    //   </Stack.Navigator>
    // </NavigationContainer>

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

// const TabNavigation = () => {
//     return (
//       <NavigationContainer>
//         <TabNav/>
//       </NavigationContainer>
//     );
//   };

//   const AppNavigation = () => {
//     return (
//       <NavigationContainer>
//         <StackNav>
//             <StackNav.Screen name="Stack" component={TabNavigation}/>
//         </StackNav>
//       </NavigationContainer>
//     );
//   };

export default Navigation;
