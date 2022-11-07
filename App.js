
import { StyleSheet, Text, View } from 'react-native';
import Semafaro from './src/components/semafaro/index.js';

export default function App() {
  return (

    <View style={styles.container}>


    <Semafaro></Semafaro>

    </View>

  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#585858',
    alignItems: 'center',
    justifyContent:'center'


  }


})
