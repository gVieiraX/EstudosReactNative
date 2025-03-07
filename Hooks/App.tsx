import React, {useState,useEffect,useReducer} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';


const reducer = (
  state:{counter:number},
  action:{type:string; }) =>{
  switch(action.type){
    case 'increment':
      return{
        counter: state.counter + 1
      }
      case 'decrement':
        return{
          counter: state.counter -1
        }
      default:
        return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer,{counter:0})

  const[count,setCount] = useState(0)



//  useEffect(()=>{
//   if(count <= 0){
//     Alert.alert("Carrinho","Seu carrinho está vazio")
//     console.log("Carrinho  Vazio")
//   }else{
//     console.log( count + " items no carrinho.")
//   } 
//  },[count])

 const incrementCount = () =>{
  // setCount((prevState)=>prevState + 1)
  dispatch({type:'increment'})
  }

 const decrementCount = () =>{
  // if(count > 0){
  // setCount((prevState)=>prevState - 1 )
  // }
  dispatch({type:'decrement'})

 }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>{state.counter}</Text>

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
