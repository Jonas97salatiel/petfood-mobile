import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather'
import Input from '../../components/FormLogin/';
import InputMask from '../../components/InputMask';
import { Form } from '@unform/mobile';
import api from '../../services/api'
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Picker } from '@react-native-picker/picker';

export default function Carrinho({  navigation }) {

  const [pickerState, setPickerState] = useState('Credito');

  var data = useSelector(state => state.carrinhoState.carrinho.produtos);

  var result = 0;

  for (let index = 0; index < data.length;) {


    result = result + (data[index].valor * data[index].qtd);

    index++
  }

  console.log(result)

  const formRef = useRef(null);

  function handleSubmit(data) {

    console.log(data)

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
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={styles.sectionProdutos}>
        <ScrollView>
          <Text style={styles.titleProdutos}>Lista de produtos</Text>

          <FlatList
            horizontal={false}
            data={data}
            keyExtractor={item => item.idProduto.toString()}
            renderItem={({ item }) => {
              return (
                <View >
                  <View style={styles.cardProdutos}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Produto', { idProduto: item.idProduto })}
                    >
                    </TouchableOpacity>
                    <View style={styles.textItens}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Produto', { idProduto: item.idProduto })}
                      >
                        <Text style={styles.descProdutos} >{item.nome}</Text>
                      </TouchableOpacity>
                      <View style={styles.valorQuantidade}>
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
                        <Text style={styles.descProdutos} >Qtd: {item.qtd}</Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Produto', { idProduto: item.idProduto })}
                        >
                          <Icon
                            name="trash"
                            size={18}
                            color="#FF1821"
                            onPress={() => navigation.goBack()}
                          />
                        </TouchableOpacity>

                      </View>
                    </View>
                  </View>

                </View>
              )
            }}
          />

          <View style={styles.total}>
            <Text style={styles.totalValue}>Valor Total: </Text>
            <NumberFormat
              value={result}
              displayType={'text'}
              // thousandSeparator={true}
              prefix={'R$ '}
              decimalSeparator={','}
              decimalScale={2}
              fixedDecimalScale={true}
              renderText={value => <Text style={styles.totalValue}>{value}</Text>}
            />
          </View>

          <Text style={styles.titleProdutos}>Entregar em:</Text>
          <Text>Rua:</Text>
          <Text>Número:</Text>
          <Text>Complemento:</Text>
          <Text>Apt:</Text>
          <Text>Bairro: , Brasília DF</Text>

          <Text style={styles.titleProdutos}>Informação Adicional </Text>

          <Form ref={formRef} onSubmit={handleSubmit}>

            <Input
              name="pontoreferencia" style={styles.textInputLogin}
              placeholder="Ponto de referência"
              autoCompleteType="off"
              type="none"

            />

            <Text style={styles.titleProdutos}>Forma de pagamento </Text>

            <Picker
              selectedValue={pickerState}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setPickerState(itemValue)
              }>

              <Picker.Item label="Crédito" value="Crédito" />
              <Picker.Item label="Débito" value="Débito" />
            </Picker>

            <Input
              name="numerocartao" style={styles.textInputLogincartao}
              placeholder="Número do cartão"
              autoCompleteType="off"
              keyboardType='numeric'
              maxLength={16}
            />

            <View style={styles.validadeCvv}>

              <Input
                name="validade" style={styles.validadeCvvInput}
                placeholder="Validade"
                autoCompleteType="off"
                keyboardType='numeric'
                maxLength={4}
                dataDetectorTypes='calendarEvent'

              />

              <Input
                name="cvv" style={styles.validadeCvvInput}
                placeholder="CVV"
                autoCompleteType="off"
                keyboardType='numeric'
                maxLength={3}

              />
            </View>

            <Input
              name="nometitular" style={styles.textInputLogincartao}
              placeholder="Nome do titular"
              autoCompleteType="off"
              keyboardType='default'
              maxLength={60}

            />

            <Input
              name="cpfcnpj" style={styles.textInputLogincartao}
              placeholder="CPF / CNPJ do titular"
              autoCompleteType="off"
              keyboardType='numeric'
              maxLength={16}

            />

            <TouchableOpacity
              onPress={() => formRef.current.submitForm()}
              style={styles.buttonIniciar}
            >
              <Text style={styles.textButton}>FINALIZAR COMPRA</Text>
            </TouchableOpacity>

          </Form>

        </ScrollView>

      </SafeAreaView>





    </View>






  )

};