import React, { useState, useEffect } from 'react';

import {
  TouchableOpacity,
  Image,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList
} from 'react-native';
import styles from './style';
import api from '../../services/api'

import Icon from 'react-native-vector-icons/Feather'

export default function PetShopList({ navigation }) {

  useEffect(() => {

    getData();

  }, [])

  const [search, setSearch] = useState('');
  const [dataParceiro, setDataParceiro] = useState('');

  async function getData() {
    await api.get("parceiro").then(res => {
      const dadosParceiros = res.data;
      setDataParceiro(dadosParceiros);
    });

  }

  function filterItems(query) {

    // const filtroProdutos = dataProdutos.filter(function (dataProdutos) {
    //   return dataProdutos.nome.toLowerCase().indexOf(query.toLowerCase()) > -1;
    // })

    const filtroParcerios = dataParceiro.filter(dataParceiro =>
      dataParceiro.razaoSocial.toLowerCase().indexOf(query.toLowerCase()) > -1)

    if (filtroParcerios.length > 1) {
      setDataParceiro(filtroParcerios);
    }

    if (query.length < 1) {
      getData()
    }

    console.log(filtroParcerios);

  }


  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TextInput
          style={styles.inputSearch}
          value={search}
          onChangeText={text => {
            setSearch(text), 
            filterItems(text)
          }}

          >

        </TextInput>
        <TouchableOpacity style={styles.inputSearchIcon}>
          <Icon
            name="search"
            size={12}
            color="#564848"
          />
        </TouchableOpacity >
        <TouchableOpacity style={styles.bellIcon}>
          <Icon
            name="bell"
            size={26}
            color="#564848"
          />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.containerPetShop}>
        <Text style={styles.title}>
          Pet Shops
        </Text>
        <FlatList
          style={styles.scrollViewPetShop}
          horizontal={false}
          data={dataParceiro}
          keyExtractor={item => item.idParceiro.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardPetShop}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PetShop', { DadosParceiro: item })}
                >
                  <Image source={{ uri: item.urlImageLogo }} style={styles.imagePetShop} />
                </TouchableOpacity>
                <View style={styles.cardDatePetShop}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PetShop', { DadosParceiro: item })}
                  >
                    <Text style={styles.textPetShop}>{item.razaoSocial}</Text>
                  </TouchableOpacity>
                  <View style={styles.addressPetShop}>
                    <Icon
                      name="map-pin"
                      size={12}
                      color="#564848"
                    />
                    <Text style={styles.addressPetShopText}>{item.bairro}, {item.uf}</Text>
                  </View>
                </View>
              </View>
            )
          }}
        />


      </SafeAreaView>
    </View>


  )

};