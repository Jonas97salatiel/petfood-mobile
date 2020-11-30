import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './style';

export default function FimPedido({ navigation }) {


  return (
    <View style={styles.container}>
      <Text style={styles.textFim} >Pedido finalizado com sucesso!</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeStore')}
      >
        <Text style={styles.textFim}>Voltar para o home</Text>
      </TouchableOpacity>
    </View>

  )

};