import React from 'react';
import { TouchableOpacity , Image, View, Text} from 'react-native';
import styles from './style';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from '../../../assets/logo-petfood.png'

export default function HomeUser({ navigation }){

  const [loaded] = useFonts({
    RobotoCondensedRegular: require('../../../assets/fonts/RobotoCondensed-Regular.ttf'),
    });

    if (!loaded) {
      return null;
    }

  return(
    <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
            <Text style={ styles.textLogin }>Home do usuario</Text>
      </View>
  
  ) 

};