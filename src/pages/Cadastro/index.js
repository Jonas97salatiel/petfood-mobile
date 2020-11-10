import React, { useRef} from 'react';
import { Text , Image, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import * as Yup from 'yup';
import cepPromise from 'cep-promise'
import { cpf } from 'cpf-cnpj-validator'; 
import styles from './style';
import { Form } from '@unform/mobile';
import Icon from 'react-native-vector-icons/FontAwesome'


import Input from '../../components/FormLogin/'
import logo from '../../../assets/logo-petfood.png'

export default function Cadastro({ navigation }){

  const formRef = useRef(null);

  async function handleSubmit(data){

    try {
      
      
      const schema = Yup.object().shape({


        email: Yup.string()
                  .email('Digite um email válido')
                  .required('O e-mail é obrigatório'),

        password: Yup.string()
                    .min(6, 'A senha tem no minimo 6 caracteres')
                    .required('A senha é obrigatória'),
      
      
      });

      await schema.validate(data, {abortEarly: false, });
        console.log(data);

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

  async function consultaCpf(data){

    const cpfInput = await formRef.current.getFieldValue('cpf');

    formRef.current.setFieldError('cpf', ' ')
    
    let validation = cpf.isValid(cpfInput);

    if(!validation){

      formRef.current.setFieldError('cpf', 'Cpf inválido.')

    }


  }


  async function consultaCep(data) {

      try {

        const cepInput = await formRef.current.getFieldValue('cep');

        const cepValue = cepInput.replace(/[^0-9]/g, '')
  
        if (cepValue.length === 8) {
  
          let cepDate = await cepPromise(cepValue).then(result =>{
          
              return result;
            });
  
  
          const {city, neighborhood, state, street} = cepDate;
  
          formRef.current.setData({
  
            rua: street,
            bairro: neighborhood,
            cidade: city,
            uf: state
  
          })
      
      
        }else{
          let cepDif = 8 - cepValue.length;
  
          if(cepDif === 1){
  
            formRef.current.setFieldError('cep', `Falta ${cepDif} digito.`)
          }if(cepDif < 8 && cepDif > 1){
  
            formRef.current.setFieldError('cep', `Faltam ${cepDif} digitos.`)
          }
          
          
        }    

      } catch (error) {
        
        formRef.current.setFieldError('cep', 'Cep inválido.')
      }



}

  return(
    <View style={styles.container}>

      <View style={styles.headerNavigation}>
        <Icon name="angle-left" 
              size={48} 
              color="#564848"
              onPress={() => navigation.navigate('Home')}
        /> 
        
        <Image style={styles.logo} source={logo} />
      </View>
        

      <SafeAreaView style={styles.formContainer}>
      <Text style={styles.tituloForm}>Informe seus dados</Text>
        <ScrollView>

            <Form style={styles.styleForm} ref={formRef} onSubmit={handleSubmit, consultaCep, consultaCpf}>
            
            
              <Input 
                name="username" style={styles.textInputLogin} 
                placeholder="NOME"
                autoCompleteType="name"
                type="name"
              />

              <Input 
                name="cpf" style={styles.textInputLogin} 
                placeholder="CPF"
                type="number"
                onBlur={consultaCpf}
              />
                
              <Input 
                name="email" style={styles.textInputLogin} 
                placeholder="E_MAIL"
                autoCompleteType="email"
                type="email"
              />

              <Input 
                name="password1" style={styles.textInputLogin} 
                placeholder="SENHA"
                autoCompleteType="password"
                type="password"
                secureTextEntry={true}
              />

              <Input 
                name="password" style={styles.textInputLogin} 
                placeholder="CONFIRME SUA SENHA"
                autoCompleteType="password"
                type="password"
                secureTextEntry={true}
              />

              <Text style={styles.descPassword}>Use oito ou mais caracteres com uma combinação de letras, números e símbolos</Text>

              <Input 
                name="phone" style={styles.textInputLogin} 
                placeholder="TELEFONE"
                autoCompleteType="cc-number"
                type="cc-number"
              />


              <Input 
                name="cep" style={styles.textInputLogin} 
                placeholder="CEP"
                autoCompleteType="postal-code"
                type="postal-code"
                maxLength={8}
                onBlur={consultaCep}
              />

              <Input 
                name="rua" style={styles.textInputLogin} 
                placeholder="RUA"
                autoCompleteType="off"
                type="name"
              />

              <Input 
                name="numeroEndereco" style={styles.textInputLogin} 
                placeholder="NÚMERO"
                autoCompleteType="street-address"
                type="street-address"
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
                <Text style={styles.textButton}>INICIAR</Text>
              </TouchableOpacity>

            </Form>
          </ScrollView>
      </SafeAreaView>

    </View>
    

  ) 

};