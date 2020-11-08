import React from 'react';
import { TouchableOpacity , Image, View, Text} from 'react-native';
import styles from './style';
import {useFonts} from 'expo-font';

import logo from '../../../assets/logo-petfood.png'

export default function Home(){

  const [loaded] = useFonts({
    RobotoCondensedRegular: require('../../../assets/fonts/RobotoCondensed-Regular.ttf'),
    });

    if (!loaded) {
      return null;
    }

  return(
    <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
            <Text style={ styles.textLogin }>Sou novo aqui!</Text>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.textButton}>CADASTRE-SE</Text>
            </TouchableOpacity>
            <Text style={styles.textLogin}>Já tenho cadastro ;)</Text>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.textButton}>LOGAR</Text>
            </TouchableOpacity>
      </View>
  
  ) 

};