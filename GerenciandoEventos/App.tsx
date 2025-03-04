import { StatusBar } from 'expo-status-bar';
import { GestureResponderEvent, StyleSheet, Text, View,TextInput } from 'react-native';
import {HelloCR7} from '../GerenciandoEventos/actions'
import React from 'react';

export default function App() {

  async function handlerHelloWorld() {
      console.log("Hello World and Hello Handler Function!")
  }

  async function handlerPress(id: number){
    console.log("Função", id)
  }

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  
  return (
    <View style={styles.container}>
       <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="default"
        />  
         <Text 
      style={{fontSize:25}} 
      onPress={()=>{console.log("1 - Estou sendo precionado")}}
      onPressIn={()=>{console.log("2 -Pres In Acionado")}}
      onLongPress={()=>{console.log("Long Prss  Acionado")}}
      onTextLayout={()=>{console.log("Texo no layout")}}


      >Componente Principal</Text>

      <Text 
      style={{fontSize:25}} 
      onPress={()=>{console.log("1 - Estou sendo precionado")}}
      onPressOut={()=>{console.log("Press Out")}}
      >Press out </Text>
      {/* <Text onPress={()=>{console.log("Inline")}}>Inline</Text>
      <Text onPress={handlerHelloWorld}>Handler Function</Text>
      <Text onPress={()=> handlerPress(1)}>Como Parâmeto</Text>
      <Text onPress={HelloCR7}>Hello CR7 </Text> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
