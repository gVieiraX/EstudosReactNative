import { StatusBar } from 'expo-status-bar';
import { useReducer, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const listener = (state:any,action:any) =>{
  switch(action.type){
    case 'add-new-task':
        return{
          task:[...state.task,{name:action.inputValue ,isDone:false}]
        }
        default:
          break;
  }
}

export default function App() {
  const [state,dispatch] = useReducer(listener,{task:[]})
  const [inputValue,setIputValue] = useState('')

  const handleAddTask = () =>{
      dispatch({type:'add-new-task', inputValue})
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TextInput style={styles.enter} value={inputValue} onChangeText={(text)=>setIputValue(text)}></TextInput>
        <Button title='ADICIONAR TAREFA' onPress={handleAddTask}></Button>
      </View>
      {state.task.map((tasks:any)=><Text>{tasks.name}</Text>)}
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
    width:'50%',
    flexDirection:'row',
    justifyContent:'center'
  },
  enter:{
    borderColor:'black',
    borderWidth:1,
    backgroundColor:'#5450D6',
    width:'80%',
    color:'white'
  }
});
