import { StyleSheet, Platform } from 'react-native';

import Constants from 'expo-constants';
        
export default StyleSheet.create({

    container:{
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#F8C733',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"

    },

    iconNavigation:{
        width: '100%',
        alignItems: "flex-start",
        paddingLeft: 15,
    },

    logo:{
        marginTop: '40%',
        marginBottom: '20%',
        
    },

    styleForm:{
      
        width: '100%',
    },

    textInputLogin:{
        width: '100%',
        height: 60,
        backgroundColor: '#F8C733',
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderBottomColor: '#564848',
        paddingLeft: 15,
        marginBottom: 10,

    },

    buttonRecuperarSenha:{

        marginTop: '8%',
        marginBottom: '8%',
        marginLeft: '30%'

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

