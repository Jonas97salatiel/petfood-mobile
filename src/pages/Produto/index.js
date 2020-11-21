import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { CLICK_UPDATE_VALUE, CLICK_DOWN_VALUE } from '../../actions/actionsTypes';


export default function Produtos({ route, navigation }) {

  const { idProduto } = route.params;

  const [imageProduto, setImageProduto] = useState('https://petfood.blob.core.windows.net/imagens/produto.png');

  console.log(idProduto);

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
        <Image source={{ uri: imageProduto }} style={styles.imageProduto} />
      </View>

      <View style={styles.sectionInfoProduto} >
        <Text style={styles.titleDescProduto}>
          Ração para cães adultos carne especial dog premium 10kg
          </Text>

        <View style={styles.petshopAndValue} >
          <Text style={styles.titlePetshop}>em PetShop do Jonas</Text>
          <Text style={styles.valueProduct}> R$ 69,90</Text>
        </View>

        <View style={styles.sectionMarca} >
          <Text style={styles.title}>Marca:</Text>
          <Text style={styles.desc}> Special Dog</Text>
        </View>

        <View style={styles.sectionDesc} >
          <Text style={styles.title} >Descrição:</Text>
          <Text style={styles.desc}>Essa ração é boa pra cachorro</Text>
        </View>
      </View>

      <View>
        <View style={styles.quatidadeButton}>
          <TouchableOpacity style={styles.quatidadeButtonMinus}>
            <Icon
              name="minus"
              size={18}
              color="#564848"
            />
          </TouchableOpacity>
          <View style={styles.quatidadeButtonNumber}>
            <Text style={styles.quatidadeButtonNumberText}>1</Text>
          </View>
          <TouchableOpacity style={styles.quatidadeButtonPlus}>
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