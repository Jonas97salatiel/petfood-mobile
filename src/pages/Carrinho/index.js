import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList
} from 'react-native';
import * as Yup from 'yup';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather'
import Input from '../../components/FormLogin/';
import InputMask from '../../components/InputMask';
import { Form } from '@unform/mobile';
import api from '../../services/api'
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Picker } from '@react-native-picker/picker';

export default function Carrinho({ navigation }) {


  var data = useSelector(state => state.carrinhoState.carrinho.produtos);
  var cnpj = useSelector(state => state.carrinhoState.carrinho.cnpj);
  console.log(cnpj);
  var idCliente = useSelector(state => state.userState.userState.id);


  useEffect(() => {

    console.log('atualizando tela')
    caulcarTotal();

    getEndereco();

    getDadosParceiro()


  }, [useSelector(state => state)]);


  const [pickerState, setPickerState] = useState('Credito');
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [dadosParceiro, setDadosParceiro] = useState({});
  const [valorPedido, setvalorPedido] = useState('');


  const [cartao, setCartao] = useState('')
  const [cpf, setCpf] = useState('')
  const [validade, setValidade] = useState('')
  const status = 'Em separação';
  const numeroTransacao = '123';
  const idFormaPagamento = '1';
  const idCuponsDesconto = '1';
  const idParceiro = dadosParceiro[0].idParceiro;



  function caulcarTotal() {
    let result = 0;
    for (let index = 0; index < data.length;) {
      result = result + (data[index].valor * data[index].qtd);
      index++
      console.log(result)
    }

    setvalorPedido(result)

    console.log('Total calculado')
    console.log(result)
    return
  }


  async function getEndereco() {
    await api.get(`enderecos/${idCliente}`).then(res => {
      const dadosUsuario = res.data;
      setDadosUsuario(dadosUsuario);
    });
  }

  async function getDadosParceiro() {
    await api.get(`parceiro/${cnpj}`).then(res => {
      const dadosParceiro = res.data;
      setDadosParceiro(dadosParceiro);
    });
  }

  const formRef = useRef(null);

  async function handleSubmit(dataForm) {

    const { cvv, nometitular } = dataForm

    dataForm.cartao = cartao;
    dataForm.cpf = cpf;
    dataForm.validade = validade;

    try {

      console.log(dataForm);

      formRef.current.setErrors({});

      console.log('Tudo ok!')

      await api.post("pedido", {
        valorPedido,
        status,
        numeroTransacao,
        idCliente,
        idFormaPagamento,
        idCuponsDesconto,
        idParceiro,
        ListaProdutos: data
      });

      // const schema = Yup.object().shape({

      //    cvv: Yup.number().min(3, 'Valor inválido').required('Valor inválido'),
      //   nome: Yup.string().min(7, 'Nome inválido').required('O nome é obrigatório'),
      //   cartao: Yup.number().min(16, 'Valor inválido').required('Número do cartão é obrigatório'),
      //   cpf: Yup.string().min(11, 'CPF inválido').required('Campo cpf é obrigatório'),
      //   validade: Yup.required('O campo é obrigatório')

      // })

      //  schema.validate(data, { abortEarly: false });

    } catch (error) {

      const validationErrors = {};

      if (error instanceof Yup.ValidationError) {
        // Validation failed
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);

        console.log(error);
      }
    }






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
              value={valorPedido}
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
          <Text>Bairro: {dadosUsuario.bairro}, {dadosUsuario.uf}</Text>
          <Text>Rua: {dadosUsuario.rua}</Text>
          <Text>Número: {dadosUsuario.numero}</Text>
          <Text>Complemento: {dadosUsuario.complemento}</Text>

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

            {/*<Input
              name="numerocartao" style={styles.textInputLogincartao}
              placeholder="Número do cartão"
              autoCompleteType="off"
              keyboardType='numeric'
              maxLength={16}
            />*/}

            <InputMask
              type={'credit-card'}
              placeholder="Número do cartão"
              name="cartao"
              keyboardType="numeric"
              style={styles.textInputLogincartao}
              value={cartao}
              onChangeText={text => {
                setCartao(text)
              }}

            />

            <View style={styles.validadeCvv}>

              <InputMask
                type={'datetime'}
                options={{
                  format: 'MM/YY'
                }}
                placeholder="Validade"
                name="validade"
                keyboardType="numeric"
                style={styles.validadeCvvInput}
                value={validade}
                onChangeText={text => {
                  setValidade(text)
                }}
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

            {/*<Input
              name="cpfcnpj" style={styles.textInputLogincartao}
              placeholder="CPF / CNPJ do titular"
              autoCompleteType="off"
              keyboardType='numeric'
              maxLength={16}

            />*/}

            <InputMask
              type="cpf"
              name="cpf"
              keyboardType="numeric"
              style={styles.textInputLogincartao}
              placeholder="CPF / CNPJ do titular"
              value={cpf}
              onChangeText={text => {
                setCpf(text)
              }}

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