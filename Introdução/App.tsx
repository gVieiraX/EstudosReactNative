import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import SymbolOn from './assets/pictures/symbol-on.png';
import SymbolOff from './assets/pictures/symbol-off.png';

export default function App() {
  const [isActive,setisActive] = useState(false)

  function handleSymbol(){
    setisActive((oldValue:boolean)=>{
      return !oldValue
    }) 
    console.log(isActive)
  }

  return (
   /** <View style={styles.container}>
      <Text style={{color: 'blue',
        backgroundColor:'',
        fontSize:40
        }}>
        Hello World!</Text>
      <View >
        <Text style={{color:'green'}}>Olá mundão</Text>
        <Text style={styles2.titleStyle}>TESTE STYLES2</Text>
      </View>
      <StatusBar style="dark" />
    </View>*/
    <View style={isActive ? styles.containerOn : styles.containeOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={isActive ? SymbolOn : SymbolOff}/>
      </TouchableOpacity>
    </View>
  ); 
}

const styles2 = StyleSheet.create({
  titleStyle:{
    fontSize:20,
    color:'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containeOff:{
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  }
});