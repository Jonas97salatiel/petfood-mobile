import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './pages/Home';
import HomeStore from './pages/HomeStore';
import HomeUser from './pages/HomeUser';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Produto from './pages/Produto';
import PetShop from './pages/PetShop';
import PetShopList from './pages/PetShopList';
import Carrinho from './pages/Carrinho';
import Pedidos from './pages/Pedidos';
import FimPedido from './pages/FimPedido';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeStore"
            tabBarOptions={{
                activeTintColor: '#564848',
            }}
        >
            <Tab.Screen
                name="HomeStore"
                component={HomeStore}
                options={{
                    tabBarLabel: 'Loja',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="PetShopList"
                component={PetShopList}
                options={{
                    tabBarLabel: 'Loja',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="store" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Carrinho"
                component={Carrinho}
                options={{
                    tabBarLabel: 'Cesta',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="basket" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="HomeUser"
                component={HomeUser}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const AppStack = createStackNavigator();

export default function Routes() {

    const isLoggedIn = useSelector(state => state.userState.userState.auth);

    return (
        <NavigationContainer>
            <AppStack.Navigator>

                {isLoggedIn ? (
                    <>
                        <AppStack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
                        <AppStack.Screen name="Produto" component={Produto} options={{ headerShown: false }} />
                        <AppStack.Screen name="PetShop" component={PetShop} options={{ headerShown: false }} />
                        <AppStack.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }} />
                        <AppStack.Screen name="FimPedido" component={FimPedido} options={{ headerShown: false }} />
                    </>
                ) : (

                        <>
                            <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                            <AppStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                            <AppStack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
                        </>
                    )}

            </AppStack.Navigator>
        </NavigationContainer>
    )
}


