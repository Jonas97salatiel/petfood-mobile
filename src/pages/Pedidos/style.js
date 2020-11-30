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

    topViewAling:{
        
        flex: 1,
        justifyContent:'center',
        width: '100%',
        backgroundColor: '#F8C733',

    },

    topView:{     
        
        justifyContent:'space-between',
        flexDirection: 'row',
    },

    title:{
        
        marginBottom: 10,
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',

    },

    icon: {

        width: 30,
        height: 30,
    },

    textTop:{
        fontSize: 18,
        color: '#564848',
        fontWeight: 'bold',
    },

    sectionPedidos:{
        flex: 8,
        width: '100%',
        backgroundColor: '#FFF'
    },

    listaPedidos: {

        flexDirection: 'row',
       width: '100%',
       backgroundColor: '#EEF1F5',
       marginTop: 5,
       marginBottom: 5,


    },

    imagePetShop:{

        width: 45,
        height: 45,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 10,

    },

    pedidoTextSection:{
        marginLeft: 10,

    },

    pedidoText:{
        fontSize: 18,
    }





});
