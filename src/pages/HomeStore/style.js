import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

        
export default StyleSheet.create({

    container:{

        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        alignItems: 'center'
        
    },

    topView:{     
        flexDirection: 'row',
        alignItems: 'center',   
        justifyContent:'center',
        height: 60,
        width: '100%',
        backgroundColor: '#F8C733',

    },  

    inputSearch:{
        width: '55%',
        height: 40,
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        padding: 10,

    },

    inputSearchIcon:{
        alignItems: 'center',   
        justifyContent:'center',
        backgroundColor: '#EEE',
        width: '10%',
        height: 40,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,

    },

    bellIcon: {
        marginLeft: '7%',
        marginRight: '-10%',

    },

    containerPetShop:{
        flex: 9,
        padding: 10,
        // marginTop: 10,
        width: '100%',
       // borderColor: '#AAA',
       // borderWidth: 1,
       // borderRadius: 25,
    },


    title:{
        
        marginBottom: 5,
        marginTop: 0,
        fontSize: 24,
        fontWeight: 'bold',

    },

    scrollViewPetShop:{
       
        height: 100,

    },

    cardPetShop:{
        margin: 5,
    },
    
    imagePetShop:{
        width: 75,
        height: 75,
        borderRadius: 10

    },

    textPetShop:{
        width: 75,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',

    },

    containerProdutos:{
        width: '90%',
        height: '50%',
        padding: 10,
        borderRadius: 10,
    },

    scrollViewProdutos:{
        
        height: 250,
        
    },

    sessionCardProdutos:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'

    },

    cardProdutos:{
        flex: 1,
        flexDirection: 'row',
        height: 80,
        width: '90%',
        borderColor: '#EEE',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10,

    },

    imageProduto:{
        height: 65,
        width: 65,
        margin: 5,
        borderRadius: 10,
    },

    textItens:{
        marginLeft: 10,
        marginTop: 5,

    },

    descProdutos:{
        fontSize: 18,
        fontWeight: 'bold',

    },

    petNameProdutos:{

    },

    valor:{

        fontSize: 18,
        color: '#2EB524',
  
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

    textInputLogin:{

        width: '95%',
        height: 60,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
        paddingLeft: 15,
        margin: 5, 

    },

    styleForm:{


    },

    centeredView:{
        height: 150,
        width: 150,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },

    textInputTroco:{

        marginTop: 400,
        marginBottom: 400,

    },

    textStyleButton:{

        height: 200,
        right: 200,
        marginTop: 400,
        color: '#000',
        backgroundColor: "#2EB524"

    },

    textStyle:{
        height: 200,
        right: 200,
        color:'#000'
    },


});

