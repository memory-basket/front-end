import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./Stack";
//import TabNav from "./Tab";
//import Auth from "./Auth";

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default Navigation;
