import React from "react";

import {View, StyleSheet, TouchableOpacity} from "react-native"

export default function Luzes(){
    
function MudaCor(){

    alert('seu bobao')


}


return(


<TouchableOpacity style={styles.luz}  onPress={MudaCor} ></TouchableOpacity>


);

}

const styles = StyleSheet.create({
    
    luz:{
    
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#01DF3A'

    }


})

