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
import NumberFormat from 'react-number-format';

import Icon from 'react-native-vector-icons/Feather'

export default function HomeStore({ navigation }) {

  useEffect(() => {
    getData();
  }, [])

  const [search, setSearch] = useState();
  const [dataParceiros, setDataParceiros] = useState('');
  const [dataProdutos, setDataProdutos] = useState('');

  async function getData() {
    await api.get("parceiro").then(res => {
      const dadosParceiros = res.data;
      setDataParceiros(dadosParceiros);
    });

    await api.get("produto").then(res => {
      const dadosProdutos = res.data;
      setDataProdutos(dadosProdutos);
    });
  }

  function filterItems(query) {

    const filtroProdutos = dataProdutos.filter(dataProdutos =>
      dataProdutos.nome.toLowerCase().indexOf(query.toLowerCase()) > -1)

    if (filtroProdutos.length > 1) {
      setDataProdutos(filtroProdutos);
    }

    if (query.length < 1) {
      getData()
    }

    console.log(filtroProdutos);

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
        <TouchableOpacity 
        style={styles.bellIcon}
        onPress={() => navigation.navigate('Pedidos')}
        >
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
          horizontal={true}
          data={dataParceiros}
          keyExtractor={item => item.idParceiro.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardPetShop}>

                <TouchableOpacity
                  onPress={() => navigation.navigate('PetShop', { DadosParceiro: item })}
                >
                  <Image source={{ uri: item.urlImageLogo }} style={styles.imagePetShop} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('PetShop', { DadosParceiro: item })}
                >
                  <Text style={styles.textPetShop}>{item.razaoSocial}</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />

        <Text style={styles.title}>
          Produtos
            </Text>

        <FlatList
          style={styles.scrollViewProdutos}
          horizontal={false}
          data={dataProdutos}
          keyExtractor={item => item.idProduto.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.sessionCardProdutos}>
                <View style={styles.cardProdutos}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Produto', { idProduto: item.idProduto })}
                  >
                    <Image
                      source={{ uri: item.urlImage }}
                      style={styles.imageProduto}
                    />
                  </TouchableOpacity>
                  <View style={styles.textItens}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Produto', { idProduto: item.idProduto })}
                    >
                      <Text style={styles.descProdutos} >{item.nome}</Text>
                    </TouchableOpacity>
                    <Text style={styles.petNameProdutos}>{item.razaoSocial}</Text>
                    <NumberFormat
                      value={item.valor}
                      displayType={'text'}
                      // thousandSeparator={true}
                      prefix={'R$ '}
                      decimalSeparator={','}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      renderText={value => <Text style={styles.valor}>{value}</Text>}
                    />
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