import React from "react";

import {View, StyleSheet} from "react-native"
import Luzes from "../Luzes";

export default function Semafaro(){

    return(

        <View style={styles.container}>
            <Luzes ></Luzes>
            <Luzes></Luzes>
            <Luzes></Luzes>
        </View>


    )
}


const styles = StyleSheet.create({

    container: {


        width: 150,
        height: 400,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent:'space-evenly'
    
    
      }


})