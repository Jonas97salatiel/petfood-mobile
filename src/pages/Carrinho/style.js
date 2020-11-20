import { StyleSheet, Platform } from 'react-native';

import Constants from 'expo-constants';
        
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
        paddingLeft: 10,
        width: 30,
        height: 30,
    },

    textTop:{
        fontSize: 18,
        color: '#564848',
        fontWeight: 'bold',
    },

    containerCarrinho:{

        flex: 9,
        marginTop: 10,
        backgroundColor: '#FFF',
        width: '95%',

    },

    
    sessionCardProdutos:{
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },

    cardProdutos:{
        flex: 1,
        flexDirection: 'row',
        height: 65,
        width: '100%',
        borderColor: '#EEE',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 10,
        

    },

    imageProduto:{
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 10,
        
    },

    textItens:{
        marginLeft: 5,
        marginTop: 5,

    },

    descProdutos:{
        fontSize: 12,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
        width: '40%',
    },

    
    valor:{

        fontSize: 12,
        paddingTop: 20,
        paddingBottom: 20,
        color: '#2EB524',
        width: '20%',

    },

    quatidadeButton:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,

    },

    quatidadeButtonPlus:{
        padding: 4,
        width: 25,
        borderWidth: 1,
        borderColor: '#CCC',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    quatidadeButtonMinus:{
        padding: 4,
        width: 25,
        borderWidth: 1,
        borderColor: '#CCC',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    quatidadeButtonNumber:{
        padding: 4,
        borderWidth: 1,
        borderColor: '#CCC'
    },

    quatidadeButtonNumberText:{

    },

    textInput:{
        width: '100%',
        height: 60,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
        paddingLeft: 15,
        margin: 5,

    },


    bottomNavigation:{
        width: '100%',
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderColor: '#AAA',
        borderTopWidth: 1,
        
    },  

    bottomIcon:{
        // backgroundColor: '#000',
        padding: 6,
        marginTop: 4,

    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width: '90%',
        height: '50%',  
        margin: 2,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },

      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18
      },

      textInputPagamento:{

        width: '100%',
        height: 60,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
        paddingLeft: 15,
        margin: 5, 

      },


});

