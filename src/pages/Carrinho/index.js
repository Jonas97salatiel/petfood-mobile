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
import NumberFormat from 'react-number-format';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import {
  CLICK_UPDATE_VALUE,
  NEW_VALUE,
  CLICK_DOWN_VALUE
} from '../../actions/actionsTypes';

export default function Carrinho({ navigation }) {

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  
  if(date < 10){
    date = `0${date}`
  }

  console.log(date);
 
  const currentDate = `${year}-${month}-${date}`;

  var dataProdutos = '0';

  dataProdutos = useSelector(state => state.carrinhoState.carrinho.produtos);
  var cnpj = useSelector(state => state.carrinhoState.carrinho.cnpj);
  var idCliente = useSelector(state => state.userState.userState.id);
  const dispatch = useDispatch();

  useEffect(() => {

    console.log('atualizando tela')
    caulcarTotal();
    getDadosCliente();
    getDadosParceiro()


  }, [useSelector(state => state)]);


  const [pickerState, setPickerState] = useState('Credito');
  const [dadosUsuario, setDadosUsuario] = useState([ {bairro:'', uf:'',rua:'',numero:'', complemento:'' }]);
  const [dadosParceiro, setDadosParceiro] = useState([{
    idParceiro: '0'
  }]);
  const [valorPedido, setvalorPedido] = useState('');



  const [cartao, setCartao] = useState('')
  const [cpf, setCpf] = useState('')
  const [validade, setValidade] = useState('')
  const status = 'Aguardando envio';
  const numeroTransacao = '123';
  const idFormaPagamento = '1';
  const idCuponsDesconto = '1';
  const idParceiro = dadosParceiro[0].idParceiro;

  var carrinho = {
    nome: '',
    idProduto: '',
    valor: 0,
    qtd: 0
  }

  function caulcarTotal() {
    let result = 0;
    for (let index = 0; index < dataProdutos.length;) {
      result = result + (dataProdutos[index].valor * dataProdutos[index].qtd);
      index++
      console.log(result)
    }

    setvalorPedido(result)

    console.log('Total calculado')
    console.log(result)
    return
  }


  async function getDadosCliente() {
    await api.get(`clientes/${idCliente}`).then(res => {
      const dadosUsuario = res.data;
      console.log(dadosUsuario);
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

    var valorPedidoCents = valorPedido * 100;
    var varCartao = cartao.replace(/\s/g, '');
    var validadeExprt = validade.replace(/[^\w\.@-]/g, '')
    var email = dadosUsuario[0].email;
    var telefone = dadosUsuario[0].telefone;
    var nomeUsuario = dadosUsuario[0].nome;
    var uf = dadosUsuario[0].uf;
    var cidade = dadosUsuario[0].cidade;
    var bairro = dadosUsuario[0].bairro;
    var rua = dadosUsuario[0].rua;
    var numeroRua = dadosUsuario[0].numero;
    var cep = dadosUsuario[0].cep;


    var nomeParceiro = dadosParceiro[0].razaoSocial;
    var ufParceiro = dadosParceiro[0].uf;
    var cidadeParceiro = dadosParceiro[0].cidade;
    var bairroParceiro = dadosParceiro[0].bairro;
    var ruaParceiro = dadosParceiro[0].rua;
    var numeroRuaParceiro = dadosParceiro[0].numero;
    var cepParceiro = dadosParceiro[0].cep;
    
    console.log(dadosUsuario[0].cpf);

    try {

      formRef.current.setErrors({});

      console.log('Tudo ok!')

      const response =  await api.post("pedido", {
        //  **Dados do cliente** 
        valorPedidoCents: valorPedidoCents,
        varCartao: varCartao,
        cvv: cvv,
        validadeExprt: validadeExprt,
        nometitular: nometitular,
        idCliente: idCliente,    
        status: status,
        numeroTransacao: numeroTransacao,
        email: email,
        telefone: telefone,
        cpf: cpf,
        nomeUsuario: nomeUsuario,
        uf: uf,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numeroRua: numeroRua,
        cep: cep,
          //  **Dados do Parceiro** 
        nomeParceiro: nomeParceiro,
        currentDate: currentDate,
        ufParceiro: ufParceiro,
        cidadeParceiro: cidadeParceiro,
        bairroParceiro: bairroParceiro,
        ruaParceiro: ruaParceiro,    
        numeroRuaParceiro: numeroRuaParceiro,
        cepParceiro: cepParceiro,
        idFormaPagamento: idFormaPagamento,
        idCuponsDesconto: idCuponsDesconto,
        idParceiro: idParceiro,
        ListaProdutos: dataProdutos
        }).then(function(response){
          console.log(response);
        }).catch(function(error){
          console.log(error);
        })
        ;

        navigation.navigate('FimPedido');
        
        // dispatch({ type: NEW_VALUE, carrinho: carrinho })

        




      // const schema = Yup.object().shape({

      //    cvv: Yup.number().min(3, 'Valor inválido').required('Valor inválido'),
      //   nome: Yup.string().min(7, 'Nome inválido').required('O nome é obrigatório'),
      //   cartao: Yup.number().min(16, 'Valor inválido').required('Número do cartão é obrigatório'),
      //   cpf: Yup.string().min(11, 'CPF inválido').required('Campo cpf é obrigatório'),
      //   validade: Yup.required('O campo é obrigatório')

      // })

      //  schema.validate(data, { abortEarly: false });

    } catch (error) {
      console.log(error)
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
            data={dataProdutos}
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
          <Text>Bairro: {dadosUsuario[0].bairro}, {dadosUsuario[0].uf}</Text>
          <Text>Rua: {dadosUsuario[0].rua}</Text>
          <Text>Número: {dadosUsuario[0].numero}</Text>
          <Text>Complemento: {dadosUsuario[0].complemento}</Text>

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