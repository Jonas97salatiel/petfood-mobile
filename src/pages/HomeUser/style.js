import { StyleSheet } from 'react-native';

        
export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#F8C733',
        flexDirection: "column",
        alignItems: "center"
    },

    logo:{
        marginTop: '40%',
        marginBottom: '20%',
    },

    textLogin:{
        marginTop: 25,
        marginBottom: 25,
        fontSize: 18,

    },

    buttonLogin:{
        backgroundColor: '#564848',
        width: '60%',
        height: '8%',
        alignItems: "center",
        justifyContent: 'space-around',
        borderRadius:15,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 0,

        elevation: 24,

    },

    textButton:{
        color: '#F8C733',
        fontSize: 18,
        fontFamily: 'RobotoCondensedRegular',
    }

});

