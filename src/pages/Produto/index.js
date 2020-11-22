import React, { useState, useEffect } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { CLICK_UPDATE_VALUE, CLICK_DOWN_VALUE } from '../../actions/actionsTypes';
import api from '../../services/api'
import NumberFormat from 'react-number-format';


export default function Produtos({ route, navigation }) {

  const [qtdProduto, setQtdProduto] = useState(0);
  
  const [dataProdutos, setDataprodutos] = useState({
    cnpj: " ",
    created_at: " ",
    descricaoMarca: " ",
    descricaoProduto: " ",
    idCategoria: 0,
    idEspecie: 0,
    idMarca: 0,
    idParceiro: 0,
    idProduto: 0,
    inscricaoEstadual: " ",
    nome: " ",
    peso: 0,
    quantidade: 0,
    razaoSocial: " ",
    status: " ",
    telefone: " ",
    unidadeMedida: " ",
    updated_at: " ",
    urlImage: "https://petfood.blob.core.windows.net/imagens/produto.png",
    urlImageLogo: "https://petfood.blob.core.windows.net/imagens/icon.png",
    userId: 0,
    valor: 0,

  });

  const { idProduto } = route.params;

  useEffect(() => {
    getDataProduto();
    
  }, [])

   async function getDataProduto() {
    await api.get(`produto/${idProduto}`).then(res => {
      const dadosProduto = res.data;
      setDataprodutos(dadosProduto[0]);
    });
  }

  function somaQtdProduto(){

    setQtdProduto(qtdProduto + 1);

  }

  function subtrairQtdProduto(){
    if(qtdProduto <= 0){
      return 
    }
    setQtdProduto(qtdProduto - 1);
    
  }

  console.log(dataProdutos);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>

        <Icon
          style={styles.iconNavigation}
          name="angle-left"
          size={48}
          color="#564848"
          onPress={() => navigation.goBack()}
        />

        <MaterialCommunityIcons
          style={styles.iconNavigation}
          name="basket"
          size={40}
          color="#564848"
          onPress={() => navigation.navigate('Carrinho')}
        />
      </View>

      <View style={styles.sectionImage} >
      <Image source={{ uri: dataProdutos.urlImage }} style={styles.imageProduto} />
      </View>

      <View style={styles.sectionInfoProduto} >
      <Text style={styles.titleDescProduto}>{dataProdutos.nome}</Text>

        <View style={styles.petshopAndValue} >
        <Text style={styles.titlePetshop}>{dataProdutos.razaoSocial}</Text>
        {/*<Text style={styles.valueProduct}> {dataProdutos.valor}</Text>*/}
        <NumberFormat
            value={dataProdutos.valor}
            displayType={'text'}
            // thousandSeparator={true}
            prefix={'R$ '}
            decimalSeparator={','}
            decimalScale={2}
            fixedDecimalScale={true}
            renderText={value => <Text style={styles.valueProduct}>{value}</Text>}
          />
        </View>

        <View style={styles.sectionMarca} >
          <Text style={styles.title}>Marca: </Text>
          <Text style={styles.desc}>{dataProdutos.descricaoMarca}</Text>
        </View>

        <View style={styles.sectionDesc} >
          <Text style={styles.title} >Descrição:</Text>
          <Text style={styles.desc}>{dataProdutos.descricaoProduto}</Text>
        </View>
      </View>

      <View style={styles.sectionQuatidadeButton}>
        <View style={styles.quatidadeButton}>
          <TouchableOpacity 
          style={styles.quatidadeButtonMinus}
          onPress={subtrairQtdProduto}
          
          >
            <Icon
              name="minus"
              size={18}
              color="#564848"
            />
          </TouchableOpacity>
          <View style={styles.quatidadeButtonNumber}>
          <Text style={styles.quatidadeButtonNumberText}>{qtdProduto}</Text>
          </View>
          <TouchableOpacity 
          style={styles.quatidadeButtonPlus}
          onPress={somaQtdProduto}
          >
            <Icon
              name="plus"
              size={18}
              color="#564848"
            />
          </TouchableOpacity >
        </View>
      </View>


      <View style={styles.sectionAddButon}>
        <View style={styles.addButon}>
          <TouchableOpacity>
            <Icon
              name="plus"
              size={26}
              color="#564848" />
          </TouchableOpacity>
          <Text style={styles.addButonText}>ADICIONAR AO CARRINHO</Text>
        </View>
      </View>

    </View>



  )

};