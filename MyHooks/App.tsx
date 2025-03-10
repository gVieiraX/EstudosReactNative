import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let quantity: number = 12
  
  const addNumber = ()=>{
    quantity = quantity + 1;
    console.log(quantity)
  }

  const removeNumber = ()=>{
    quantity = quantity - 1;
    console.log(quantity)
  }


  return (
    <View style={styles.container} >
      <View style={styles.buttonRow}>
        <Button title='+' onPress={addNumber}/>
        <Text style={styles.textLabel}>{quantity}</Text>
        <StatusBar style="auto" />
        <Button title='-' onPress={removeNumber}/>
      </View>
   
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
  textLabel:{
    fontSize:22
  },
  buttonRow:{
    flexDirection:'row',
    padding:20
  }
});
