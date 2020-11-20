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


});

