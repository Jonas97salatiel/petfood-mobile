import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import HomeUser from './pages/HomeUser';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <AppStack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
                <AppStack.Screen name="HomeUser" component={HomeUser} options={{headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}


