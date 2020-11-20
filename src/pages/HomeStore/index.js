import  React, {useState} from 'react';

import { TouchableOpacity , 
         Image, 
         View, 
         Text, 
         TextInput,
         SafeAreaView,
         ScrollView  } from 'react-native';
import styles from './style';

import Icon from 'react-native-vector-icons/Feather'

export default function HomeStore({ navigation }){

  const [logoPetShop, setLogoPetShop] = useState('https://petfood.blob.core.windows.net/imagens/icon.png');
  const [imageProduto, setImageProduto] = useState('https://petfood.blob.core.windows.net/imagens/produto.png');

  return(
    <View style={styles.container}>
        <View style={styles.topView}>
          <TextInput style={styles.inputSearch}>
          
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
            <ScrollView style={styles.scrollViewPetShop} horizontal={true}>
              <View style={styles.cardPetShop}>
                <Image source={{ uri: logoPetShop }} style={styles.imagePetShop}/>
                <Text style={styles.textPetShop}>Pet Shop do fulano</Text>
              </View>
              <View style={styles.cardPetShop}>
                <Image source={{ uri: logoPetShop }} style={styles.imagePetShop}/>
                <Text style={styles.textPetShop}>Pet Shop do fulano</Text>
              </View>
              <View style={styles.cardPetShop}>
                <Image source={{ uri: logoPetShop }} style={styles.imagePetShop}/>
                <Text style={styles.textPetShop}>Pet Shop do fulano</Text>
              </View>
              <View style={styles.cardPetShop}>
                <Image source={{ uri: logoPetShop }} style={styles.imagePetShop}/>
                <Text style={styles.textPetShop}>Pet Shop do fulano</Text>
              </View>
              <View style={styles.cardPetShop}>
                <Image source={{ uri: logoPetShop }} style={styles.imagePetShop}/>
                <Text style={styles.textPetShop}>Pet Shop do fulano</Text>
              </View>

            </ScrollView>

            <Text style={styles.title}>
              Produtos
            </Text>
         <ScrollView style={styles.scrollViewProdutos}>
          <View style={styles.sessionCardProdutos}>
            <View style={styles.cardProdutos}>
              <Image source={{ uri: imageProduto }} style={styles.imageProduto}/>
              <View style={styles.textItens}>
                <Text style={styles.descProdutos} >Ração Bomguy 10KG</Text>
                <Text style={styles.petNameProdutos}>Nome do Pet</Text>
                <Text style={styles.valor}>R$ 69,90</Text>
              </View>
            </View>
          </View>

          <View style={styles.sessionCardProdutos}>
            <View style={styles.cardProdutos}>
              <Image source={{ uri: imageProduto }} style={styles.imageProduto}/>
              <View style={styles.textItens}>
                <Text style={styles.descProdutos} >Ração Bomguy 10KG</Text>
                <Text style={styles.petNameProdutos}>Nome do Pet</Text>
                <Text style={styles.valor}>R$ 69,90</Text>
              </View>
            </View>
          </View>

          <View style={styles.sessionCardProdutos}>
            <View style={styles.cardProdutos}>
              <Image source={{ uri: imageProduto }} style={styles.imageProduto}/>
              <View style={styles.textItens}>
                <Text style={styles.descProdutos} >Ração Bomguy 10KG</Text>
                <Text style={styles.petNameProdutos}>Nome do Pet</Text>
                <Text style={styles.valor}>R$ 69,90</Text>
              </View>
            </View>
          </View>
          <View style={styles.sessionCardProdutos}>
            <View style={styles.cardProdutos}>
              <Image source={{ uri: imageProduto }} style={styles.imageProduto}/>
              <View style={styles.textItens}>
                <Text style={styles.descProdutos} >Ração Bomguy 10KG</Text>
                <Text style={styles.petNameProdutos}>Nome do Pet</Text>
                <Text style={styles.valor}>R$ 69,90</Text>
              </View>
            </View>
          </View>
          <View style={styles.sessionCardProdutos}>
            <View style={styles.cardProdutos}>
              <Image source={{ uri: imageProduto }} style={styles.imageProduto}/>
              <View style={styles.textItens}>
                <Text style={styles.descProdutos} >Ração Bomguy 10KG</Text>
                <Text style={styles.petNameProdutos}>Nome do Pet</Text>
                <Text style={styles.valor}>R$ 69,90</Text>
              </View>
            </View>
          </View>
         </ScrollView>
       </SafeAreaView>       
      </View>
      
  
  ) 

};