import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api'
import { useSelector } from 'react-redux';

export default function Pedidos({ navigation }) {

useEffect(() => {

  getData();

},[])

  const [dataPedidos, setDataPedidos] = useState();
  const [idClienteTrue, setIdClienteTrue] = useState(null);




  var idCliente = useSelector(state => state.userState.userState.id);

 async function getData() {

    let dadosCliente;

     await api.get(`clientes/${idCliente}`).then(res =>{
      dadosCliente = res.data[0].idCliente;
      console.log(dadosCliente);
      setIdClienteTrue(dadosCliente);
    });

    await api.get(`pedido/cliente/${dadosCliente}`).then(res => {
      const dadosPedidos = res.data;
      setDataPedidos(dadosPedidos);
    });

  }




  return (
    <View style={styles.container}>
      <View style={styles.topViewAling}>
        <View style={styles.topView}>
          <TouchableOpacity style={styles.icon}>
            <Icon
              name="arrow-left"
              size={26}
              color="#564848"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text style={styles.textTop}>Carrinho de compras</Text>
          <TouchableOpacity style={styles.icon}>
            <MaterialCommunityIcons
              name="refresh"
              size={26}
              color="#564848"
              
            />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.sectionPedidos}>

          <FlatList
            horizontal={false}
            data={dataPedidos}
            keyExtractor={item => item.idPedidos.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.listaPedidos}>
                  <Image source={{ uri: item.urlImageLogo }} style={styles.imagePetShop} />
                  <View style={styles.pedidoTextSection}>
                    <Text style={styles.pedidoText}>Pedido: {item.idPedidos}</Text>
                    <Text style={styles.pedidoText}>Status: {item.status}</Text>
                  </View>

                </View>
              )
            }}
          />

      </SafeAreaView>

    </View>

  )

};