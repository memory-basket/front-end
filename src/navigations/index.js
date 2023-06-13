import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Stack';
import TabNav from './Tab';
//import Auth from "./Auth";

const Navigation = () => {
  return (
    // <NavigationContainer>
    //   <StackNav>
    //     <Stack.screen name="Tab" component={TabNav} />
    //   </StackNav>
    // </NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNav} />
    </Stack.Navigator>
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
