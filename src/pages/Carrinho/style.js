import { StyleSheet, Platform } from 'react-native';

import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';
        
export default StyleSheet.create({

    container:{
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#FFF',
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

    sectionProdutos:{
        width: '95%',
        flex: 9,

    },

    titleProdutos:{
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    picker:{
        width: '100%',
        height: 60,
        borderRadius: 10,
    },

    flatList:{
        height: 500,
    },

    cardProdutos:{
        height: 60,
        width: '100%',
        borderColor: '#EEE',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10,

    },

    textItens:{
        marginLeft: 10,
        marginTop: 5,

    },

    descProdutos:{
        fontSize: 18,

    },

    total:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    totalValue:{

        fontSize: 18,
        color:'#000'
    },

    valorQuantidade:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97%',
        
    },

    petNameProdutos:{

    },

    valor:{

        fontSize: 18,
        color: '#2EB524',
  
    },

    textInputLogin:{
        width: '100%',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderBottomColor:'#C4C4C4',
        paddingLeft: 15,
        marginBottom: 10,
        borderRadius: 5

    },

    validadeCvv:{

        flexDirection: 'row',
        justifyContent:'space-between'
    },

    validadeCvvInput:{
        width: '45%',
        height: 60,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderBottomColor:'#C4C4C4',
        paddingLeft: 15,
        marginBottom: 10,
    },

    textInputLogincartao:{
        width: '100%',
        height: 60,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderBottomColor:'#C4C4C4',
        paddingLeft: 15,
        marginBottom: 10,
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

