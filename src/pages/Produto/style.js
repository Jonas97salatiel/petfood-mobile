import { StyleSheet, Platform } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"

    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
        textAlign: "center"
    },


    topView: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        width: '100%',
        backgroundColor: '#F8C733',

    },

    iconNavigation: {
        padding: 10,
    },

    sectionImage: {

        flex: 3,
        justifyContent: 'center',

    },

    imageProduto: {
        height: 200,
        width: 200,
        borderRadius: 10,

    },

    sectionInfoProduto: {
        flex: 2,
        width: '90%',

    },

    titleDescProduto: {

        fontSize: 18,
        fontWeight: 'bold',
    },

    petshopAndValue: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    titlePetshop: {

        fontSize: 18,
        marginTop: 10,
    },

    valueProduct: {

        fontSize: 24,
        marginTop: 10,
        fontWeight: 'bold',

    },

    sectionMarca: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',

    },

    sectionDesc: {

        marginTop: 10
    },

    title: {

        fontSize: 18,
        fontWeight: 'bold',

    },

    desc: {
        fontSize: 18,
    },

    sectionQuatidadeButton: {
        flex: 1,
        justifyContent: 'center',
    },

    quatidadeButton: {
        flexDirection: 'row',
        marginBottom: 15,

    },

    quatidadeButtonPlus: {
        alignItems: 'center',
        padding: 10,
        width: 50,
        borderWidth: 1,
        borderColor: '#CCC',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    quatidadeButtonMinus: {
        alignItems: 'center',
        padding: 10,
        width: 50,
        borderWidth: 1,
        borderColor: '#CCC',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    quatidadeButtonNumber: {
        alignItems: 'center',
        padding: 10,
        width: 50,
        borderWidth: 1,
        borderColor: '#CCC'
    },

    quatidadeButtonNumberText: {

    },

    sectionAddButon: {

        justifyContent: 'center',
        height: 60,
        width: '100%',
        backgroundColor: '#F8C733',
    },

    addButon: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    addButonText: {
        marginLeft: 10,
    }


});
