import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Stack';
import TabNav from './Tab';

const Navigation = () => {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>        
    );
};

export default Navigation;