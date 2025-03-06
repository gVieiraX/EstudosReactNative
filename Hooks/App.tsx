import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
 const[count,setCount] = useState(0)

 const incrementCount = () =>{
  setCount((prevState)=>prevState + 1)
 }

 const decrementCount = () =>{
  setCount((prevState)=>prevState - 1)
 }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>{count}</Text>

      <View style={styles.inline}>
        <Button title='Adicionar' color="white" onPress={incrementCount}></Button>
        <Button title='Remover' color="white" onPress={decrementCount}></Button>
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
  inline:{
    width:"50%",
    flexDirection:'row',  
    justifyContent:'center',
    backgroundColor:'#240ff4'
    }
});
