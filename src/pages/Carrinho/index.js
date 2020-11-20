import  React, {useState, useEffect, useRef} from 'react';
import { 
  TouchableOpacity ,
  TouchableHighlight, 
  Image, 
  View, 
  Text, 
  TextInput,
  SafeAreaView,
  Modal,
  ScrollView } from 'react-native';
import styles from './style';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather'
import Input from '../../components/FormLogin/';
import { Form } from '@unform/mobile';

export default function Carrinho({ navigation }){

 const [imageProduto, setImageProduto] = useState('https://petfood.blob.core.windows.net/imagens/produto.png');
 const [selectedValue, setSelectedValue] = useState("");
 const [modalVisibleDinheiro, setModalVisibleDinheiro] = useState(false);
 const [modalVisibleCartao, setModalVisibleCartao] = useState(false);
 const formRef = useRef(null);

  function handleSubmit(data){

  }

  return(
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
            </TouchableOpacity>
          </View>
      </View>

      <SafeAreaView style={styles.containerCarrinho}>
        <ScrollView >
        <View style={styles.sessionCardProdutos}>
            <View style={styles.cardProdutos}>
              <Image source={{ uri: imageProduto }} style={styles.imageProduto}/>
                <Text style={styles.descProdutos} >Ração Bomguy 10KG</Text>
                <Text style={styles.valor}>R$ 69,90</Text>

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
            <View style={styles.cardProdutos}>
              <Image source={{ uri: imageProduto }} style={styles.imageProduto}/>
                <Text style={styles.descProdutos} >Ração Bomguy 10KG</Text>
                <Text style={styles.valor}>R$ 69,90</Text>

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
            <View style={styles.cardProdutos}>
              <Image source={{ uri: imageProduto }} style={styles.imageProduto}/>
                <Text style={styles.descProdutos} >Ração Bomguy 10KG</Text>
                <Text style={styles.valor}>R$ 69,90</Text>

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
          </View>

          <View>
            <Text style={styles.title}>Entregar em:</Text>
              <View>
                <Text>Rua:</Text>
                <Text>Número:</Text>
                <Text>Complemento:</Text>
                <Text>Apto:</Text>
                <Text>Bairro, Cidade DF</Text>
              </View>
          </View>

          <Form style={styles.styleForm} ref={formRef} onSubmit={handleSubmit}>

            <View>
              <Text style={styles.title}>Informação Adicional:</Text>
                  <Input style={styles.textInput} name="Referencia" placeholder="Ponto de referência" />  
            </View>

            <View>
              <Text style={styles.title}>Forma de pagamento:</Text>
                  <Input style={styles.textInputPagamento} name="NumeroDoCartao" placeholder="Número do cartão" />  
                  <Input style={styles.textInputPagamento} name="validade" placeholder="Validade" />
                  <Input style={styles.textInputPagamento} name="CVV" placeholder="CVV" />
                  <Input style={styles.textInputPagamento} name="NomeDoTitular" placeholder="Nome do titular" />
                  <Input style={styles.textInputPagamento} name="cpfCnpj" placeholder="CPF/CNPJ do titular" /> 
            </View>
            

          </Form>


        </ScrollView>
      </SafeAreaView>

      <View style={styles.bottomNavigation}>
         <TouchableOpacity style={styles.bottomIcon}>
         <Icon 
                  name="home" 
                  size={28}
                  color="#564848"
                  onPress={() => navigation.navigate('HomeStore')}
            />
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomIcon}>
         <Icon 
                  name="search" 
                  size={28}
                  color="#564848"
                  onPress={() => navigation.navigate('Petshop')}
          />
         </TouchableOpacity >
         <TouchableOpacity style={styles.bottomIcon}>
         <Icon 
                  name="shopping-cart" 
                  size={28}
                  color="#564848"
                  onPress={() => navigation.navigate('Carrinho')}
            />
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomIcon}>
         <Icon 
                  name="user" 
                  size={28}
                  color="#564848"
                  onPress={() => navigation.navigate('HomeUser')}
          />
         </TouchableOpacity>
       </View>
    </View>
  
  ) 

};