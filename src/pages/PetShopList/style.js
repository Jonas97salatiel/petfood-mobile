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
        margin: 10,
        flexDirection: 'row',

    },
    
    imagePetShop:{
        width: 70,
        height: 70,
        borderRadius: 10

    },

    cardDatePetShop:{
        width: '90%',
        marginLeft: 10,
    },

    textPetShop:{
        marginTop: 5,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',

    },

    addressPetShop:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    addressPetShopText:{

        marginLeft: 5,
    },


});

