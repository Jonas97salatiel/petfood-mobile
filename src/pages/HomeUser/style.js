import { StyleSheet, Platform } from 'react-native';

import Constants from 'expo-constants';
        
export default StyleSheet.create({

    container:{
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",

        

    },

    imageInputView:{
        width: '100%',
        height: 150,
        marginTop: '5%',
        alignItems: "center",
        justifyContent: 'center',
    },

    imageInput:{

        width: 150,
        height: 150,
        borderRadius: 100
    },

    imageInputButtonView:{

        width: '100%',
        flexDirection:'row',
        justifyContent: 'center',

    },


    imageInputButton:{

        marginTop: 10,
        margin: 10,
        padding: 15,
        backgroundColor: '#F8C733',
        borderRadius:15,

    },

    imageInputText:{

        fontSize: 18,
        color: '#564848',
    },  

    formContainer:{
        backgroundColor: '#fff',
        flex: 5,
        width: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderTopWidth: 3,
        borderColor: '#D3A92C',
        
    },

    tituloForm:{
        width: '100%',
        fontSize: 24,
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center'
 
    },

    styleForm:{
        flexDirection: 'column',
        justifyContent: "flex-end",
        width: '100%',
        marginTop: 10,
        
    },

    textInputLogin:{
        width: '100%',
        height: 60,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
        paddingLeft: 15,
        margin: 0, 

    },

    descPassword:{

        padding: 10,

    },

    textRecuperarSenha:{

        fontSize: 14
    },

    buttonIniciar:{
        backgroundColor: '#564848',
        width: '100%',
        height: 60,
        alignItems: "center",
        justifyContent: 'space-around',

    },

    textButton:{
        color: '#F8C733',
        fontSize: 18,
    }

});
