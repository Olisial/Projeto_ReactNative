import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Inicio</Text>
        </View>
    );
}

function SettingScreen(){
    return (
        <View>
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Configurações</Text>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Inicio" component={HomeScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}