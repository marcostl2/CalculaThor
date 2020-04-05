import React from 'react'
import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center'
    },
    header:{
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 20,
        alignItems:'center'
    },
    logo:{
        width: 100,
        height: 100
    },  
    title:{
        fontSize: 40,
        fontFamily:'Open-Sans',
    },
    buttonsContainer:{
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    row:{
        width:'100%',
        flexDirection:'row'
    },
    response:{
        marginTop: 20,
        width: '100%',
        paddingTop: 80,
        paddingBottom: 10,
        fontSize: 40,
        textAlign:'right',
        paddingRight:10,
        color:'#4C241D'
    },
    button:{
        width:'25%',
    },
    buttonText:{
        fontFamily:'Open-Sans',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize: 35,
        height:80,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor:'#E2D4DA'
    },
    deleteButtonContainer:{
        width:'100%',
    },
    deleteButton:{
        textAlign:'right',
        textAlignVertical:'center',
        paddingRight: 10,
        height: 65,
        color:'#4C241D'
    },
    opButton:{
        backgroundColor:'#F2DACC',
        color:'#4C241D'
    },
    delButton:{
        backgroundColor:'#6B4F5B',
        color:'whitesmoke'
    }
})