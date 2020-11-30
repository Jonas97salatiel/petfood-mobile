import { StyleSheet, Platform } from 'react-native';

import Constants from 'expo-constants';
import { ceil } from 'react-native-reanimated';
        
export default StyleSheet.create({

    container:{
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"

    },

    scrollView:{
        width: '100%',
    },

    sectionPetShop:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        height: 100,
        backgroundColor: '#F8C733'

    },

    imagePetShop:{
        margin: 20,
        width: 75,
        height: 75,
        borderRadius: 10

    },


    sectionInfoPet:{
        width: '90%',
        marginTop: 20,

    },

    titlePetShop:{

        fontSize: 26,
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

    title:{
        
        marginTop: 15,
        marginBottom: 15,
        marginLeft: '5%',

        fontSize: 24,
        fontWeight: 'bold',

    },

    scrollViewProdutos:{               

    },

    sessionCardProdutos:{
        flex: 1,
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
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












});
