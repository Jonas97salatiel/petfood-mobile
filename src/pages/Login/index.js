import React, { useRef, useEffect } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import styles from './style';
import { Form } from '@unform/mobile';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';
import { CLICK_UPDATE_VALUE,  CLICK_DOWN_VALUE} from '../../actions/actionsTypes';

import Input from '../../components/FormLogin/'
import logo from '../../../assets/logo-petfood.png'

export default function Login({ navigation }) {

   
  const dispatch = useDispatch();
  const userReducer = useSelector(state => state.userState.userState ); 

  const formRef = useRef(null);

  async function handleSubmit(dataForm) {

    const { email, senha } = dataForm;

    try {

      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um email válido').required('O e-mail é obrigatório'),
        senha: Yup.string().min(6, 'A senha tem no minimo 6 caracteres').required('A senha é obrigatória'),
      });

      await schema.validate(dataForm, { abortEarly: false, });

      const response = await api.post("usuariosLogin", { email, senha });

      const responseUser = response.data;
      
      dispatch({type: CLICK_UPDATE_VALUE, userState: responseUser })

      await schema.validate(dataForm, { abortEarly: false, });

     console.log(userReducer);

     navigation.navigate('Main');


    } catch (error) {

      const validationErrors = {};

      if (error instanceof Yup.ValidationError) {
        // Validation failed

        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }

    }

  }



  return (
    <View style={styles.container}>

      <View style={styles.iconNavigation}>
        <Icon name="angle-left"
          size={48}
          color="#564848"
          onPress={() => navigation.navigate('Home')}
        >
        </Icon>
      </View>
      <Image style={styles.logo} source={logo} />



      <Form style={styles.styleForm} ref={formRef} onSubmit={handleSubmit}>

        <Input
          name="email" style={styles.textInputLogin}
          placeholder="E_MAIL"
          autoCompleteType="email"
          type="email"

        />

        <Input
          name="senha" style={styles.textInputLogin}
          placeholder="SENHA"
          autoCompleteType="password"
          type="password"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.buttonRecuperarSenha}>
          <Text style={styles.textRecuperarSenha}>Qual a senha mesmo ? Deu branco.</Text>
        </TouchableOpacity>

        <TouchableOpacity

          onPress={() => formRef.current.submitForm()
          }
          style={styles.buttonIniciar}
        >
          <Text style={styles.textButton}>INICIAR</Text>
        </TouchableOpacity>

      </Form>

    </View>

  )

};