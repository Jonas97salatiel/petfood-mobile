import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput
} from 'react-native';
import Routes from '../../routes';
import styles from './style';
import api from '../../services/api'
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/Feather'

export default function PetShop({ navigation, route }) {

  const { bairro,
    cep,
    cidade,
    cnpj,
    complemento,
    idParceiro,
    inscricaoEstadual,
    numero,
    pais,
    razaoSocial,
    rua,
    telefone,
    uf,
    urlImageLogo

  } = route.params.DadosParceiro


  useEffect(() => {
    getData();
  }, [])

  const [search, setSearch] = useState();
  const [dataProdutos, setDataProdutos] = useState('');

  async function getData() {

    await api.get(`produto/parceiro/${idParceiro}`).then(res => {
      const dadosProdutos = res.data;
      setDataProdutos(dadosProdutos);

    });
  }

  function filterItems(query) {

   // const filtroProdutos = dataProdutos.filter(function (dataProdutos) {
   //   return dataProdutos.nome.toLowerCase().indexOf(query.toLowerCase()) > -1;
   // })

    const filtroProdutos = dataProdutos.filter(dataProdutos => 
      dataProdutos.nome.toLowerCase().indexOf(query.toLowerCase()) > -1 )

    if(filtroProdutos.length > 1){
      setDataProdutos(filtroProdutos);
    }
    
    if(query.length < 1){
      getData()
    }

    console.log(filtroProdutos);

  }

return (


  <SafeAreaView style={styles.container}>

    <ScrollView style={styles.scrollView}>
      <View style={styles.sectionPetShop}>

        <Image source={{ uri: urlImageLogo }} style={styles.imagePetShop} />

        <View style={styles.sectionInfoPet}>
          <Text style={styles.titlePetShop}>{razaoSocial}</Text>
          <Text>{cidade}, {uf}</Text>
        </View>
      </View>

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
        <TouchableOpacity
          style={styles.inputSearchIcon}
        >
          <Icon
            name="search"
            size={12}
            color="#564848"
          />
        </TouchableOpacity >
        <TouchableOpacity style={styles.bellIcon}>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Nossos Produtos
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



    </ScrollView>
  </SafeAreaView>


)

};