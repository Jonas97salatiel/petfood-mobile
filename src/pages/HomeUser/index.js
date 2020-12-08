import React, { useState, useRef, useEffect } from 'react';
import { Platform, Button, Text, Image, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import * as Yup from 'yup';
import cepPromise from 'cep-promise';
import { useSelector, useDispatch } from 'react-redux';
import { cpf } from 'cpf-cnpj-validator';
import styles from './style';
import { Form } from '@unform/mobile';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import api from '../../services/api';
import { CLICK_UPDATE_VALUE, CLICK_DOWN_VALUE } from '../../actions/actionsTypes';


import Input from '../../components/FormLogin/';

export default function HomeUser({ navigation }) {

  const [dadosUsuario, setDadosUsuario] = useState([{
    nome: '',
    cpf: '',
    email: '',
    cep: '',
    cidade: '',
    bairro: '',
    uf: '',
    rua: '',
    numero: '',
    complemento: ''
  }]);

  useEffect(() => {

    getDadosCliente();

    
    console.log('teste01')

  }, []);

  var idCliente = useSelector(state => state.userState.userState.id);

  async function getDadosCliente() {
    await api.get(`clientes/${idCliente}`).then(res => {
      const dadosUsuario = res.data[0];
      console.log(dadosUsuario);

      formRef.current.setData({

        nome: dadosUsuario.nome,
        cpf: dadosUsuario.cpf,
        email: dadosUsuario.email,
        cep: dadosUsuario.cep,
        cidade: dadosUsuario.cidade,
        bairro: dadosUsuario.bairro,
        uf: dadosUsuario.uf,
        rua: dadosUsuario.rua,
        numero: dadosUsuario.numero,
        complemento: dadosUsuario.complemento
  
      });

      setDadosUsuario(dadosUsuario);

    });
  }

  

  const [image, setImage] = useState('https://petfood.blob.core.windows.net/imagens/perfil.jpg');
  const [imageBase64Blob, setImagebase64Blob] = useState(null);
  const formRef = useRef(null);

  const pickImageGalery = async () => {
    async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }

      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setImagebase64Blob(result.base64);

    }

  }

  const pickImage = async () => {

    async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }

      }
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setImagebase64Blob(result.base64);

    }
  };


  async function validatePassword() {

    formRef.current.setFieldError('senha1', null)
    let senha = await formRef.current.getFieldValue('senha');
    let senha1 = await formRef.current.getFieldValue('senha1');

    if (senha !== senha1) {
      await formRef.current.setFieldError('senha1', 'A senha está diferente.')
    }

  }

  async function consultaCpf() {

    formRef.current.setFieldError('cpf', null)

    const cpfInput = await formRef.current.getFieldValue('cpf');

    let validation = cpf.isValid(cpfInput);

    if (!validation) {

      formRef.current.setFieldError('cpf', 'Cpf inválido.')

    }

  }


  async function consultaCep() {


    try {

      formRef.current.setFieldError('cep', null)
      const cepInput = await formRef.current.getFieldValue('cep');

      const cepValue = cepInput.replace(/[^0-9]/g, '')

      if (cepValue.length === 8) {

        let cepDate = await cepPromise(cepValue).then(result => {

          return result;
        });

        const { city, neighborhood, state, street } = cepDate;

        const { cep, cpf, email, nome, senha, senha1, phone, complemento } = formRef.current.getData();

        await formRef.current.setData({

          rua: street,
          bairro: neighborhood,
          cidade: city,
          uf: state,
          cep: cep,
          cpf: cpf,
          email: email,
          nome: nome,
          senha: senha,
          senha1: senha1,
          phone: phone,
          complemento: complemento

        })

      } else {
        let cepDif = 8 - cepValue.length;

        if (cepDif === 1) {

          formRef.current.setFieldError('cep', `Falta ${cepDif} digito.`)
        } if (cepDif < 8 && cepDif > 1) {

          formRef.current.setFieldError('cep', `Faltam ${cepDif} digitos.`)
        }

      }

    } catch (error) {

      formRef.current.setFieldError('cep', 'Cep inválido.')
    }

  }

  async function handleSubmit(data) {

    const { bairro,
      cep,
      cidade,
      complemento,
      cpf,
      email,
      nome,
      numero,
      senha,
      senha1,
      phone,
      rua,
      uf } = data;

    const pais = 'Brasil'
    try {

      validatePassword();
      console.log('validando senha');


      consultaCep();
      console.log('validando cep');

      formRef.current.setErrors({});

      // const schema = await Yup.object().shape({

      //  nome: Yup.string()
      //    .required('O campo nome é obrigatório.'),

      // email: Yup.string()
      //   .email('Digite um email válido')
      //   .required('O e-mail é obrigatório'),

      //  senha: Yup.string()
      //    .min(6, 'A senha tem no minimo 6 caracteres')
      //   .required('A senha é obrigatória'),

      // });


      //  await schema.validate(data, { abortEarly: false });
      console.log('Cadastrando usuario')
      await api.post("usuarios", { nome, email, senha, phone });

      let responseUser = await api.get(`usuarios/${email}`);

      const userId = responseUser.data[0].id;

      await api.post("enderecos", { cep, rua, numero, complemento, bairro, cidade, uf, pais, userId })

      console.log('Endereço cadastrado')

      let headeBlobImage = "data:image/jpeg;base64,"

      let imageBase64 = headeBlobImage + imageBase64Blob;

      console.log('Cadastrando cliente')

      const responseCliente = await api.post("clientes", { userId, cpf, nome, imageBase64 });

      console.log(responseCliente.status)

      const response = await api.post("usuariosLogin", { email, senha });

      const responseUserData = response.data;

      dispatch({ type: CLICK_UPDATE_VALUE, userState: responseUserData })

      console.log('Redirecionando para rota home user');

      navigation.navigate('Main');

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
      <ScrollView>

        <View style={styles.imageInputView}>

          {image && <Image source={{ uri: image }} style={styles.imageInput} />}

        </View>

        <View style={styles.imageInputButtonView}>

          <TouchableOpacity style={styles.imageInputButton} onPress={pickImageGalery}>
            <Text style={styles.imageInputText}>Galeria</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageInputButton} onPress={pickImage}>
            <Text style={styles.imageInputText} >Câmera</Text>
          </TouchableOpacity>

        </View>

        <Form style={styles.styleForm} ref={formRef} onSubmit={handleSubmit}>

          <Input
            name="nome" style={styles.textInputLogin}
            placeholder="NOME COMPLETO"
            autoCompleteType="name"
            type="off"
          />

          <Input
            name="cpf" style={styles.textInputLogin}
            placeholder="CPF"
            onBlur={consultaCpf}
            type="off"
            keyboardType="phone-pad"
          />

          <Input
            name="email" style={styles.textInputLogin}
            placeholder="E_MAIL"
            textContentType="emailAddress"
            type="off"
          />

          <Input
            name="cep" style={styles.textInputLogin}
            placeholder="CEP"
            autoCompleteType="postal-code"
            textContentType="postalCode"
            maxLength={8}
            onBlur={consultaCep}
            type="off"
            keyboardType="phone-pad"
          />

          <Input
            name="rua" style={styles.textInputLogin}
            placeholder="RUA"
            autoCompleteType="off"
            textContentType="streetAddressLine1"
            type="off"
          />

          <Input
            name="numero" style={styles.textInputLogin}
            placeholder="NÚMERO"
            autoCompleteType="street-address"
            type="off"
            keyboardType="phone-pad"
          />

          <Input
            name="complemento" style={styles.textInputLogin}
            placeholder="COMPLEMENTO"
            type="off"
          />

          <Input
            name="bairro" style={styles.textInputLogin}
            placeholder="BAIRRO"
            type="off"
          />

          <Input
            name="cidade" style={styles.textInputLogin}
            placeholder="CIDADE"
            type="off"
          />

          <Input
            name="uf" style={styles.textInputLogin}
            placeholder="UF"
            type="off"
          />

          <TouchableOpacity
            onPress={() => formRef.current.submitForm()}
            style={styles.buttonIniciar}
          >
            <Text style={styles.textButton}>Atualizar perfil</Text>
          </TouchableOpacity>

        </Form>
      </ScrollView>
    </View>

  )

};