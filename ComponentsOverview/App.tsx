import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text, View ,Image, TextInput,Button,ScrollView,Switch} from 'react-native';
import React,{useState} from 'react';
import MeninoNey from './assets/MeninoNey.png'

export default function App() {
  const [usuario, setUsuario] = useState('A')
  const [ligado, setLigado] = useState(false)

  function handleSwitch(){
    setLigado(!ligado)
  }

  return (
    
    <View style={[styles.container, {backgroundColor:'pink'}]}>
      
       <View onTouchStart={(event)=>{
        Alert.alert('Começou a clicar, clique iniciado')}}
        onTouchEnd={(event)=>{
        Alert.alert('Começou a clicar, clique finalizado')}}
        onLayout={(event)=>{}}>
                </View>

           
          <Switch 
          value={ligado}
          onValueChange={handleSwitch}
          
          ></Switch>
          
          <Image source={MeninoNey} style={{height:150, width:250,display: ligado ? "flex" : "none"   }}></Image>
          
          <TextInput 
          style={styles.input}
          onChange={(text)=>setUsuario(text.nativeEvent.text)}
          keyboardType="default"
          placeholder='Digite seu nome'
          value={usuario}
              />
              <Button 
              title='clique aqui'
              onPress={()=>{Alert.alert('valor atual',usuario)}}
              ></Button>

             <Text style={[styles.texto, styles.border]}>Olá</Text>

             <Text selectable={true} onPress={()=>{console.log("Pressionado")}} 
                              onLongPress={()=>{console.log("Pressionando longamente")}}
        >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
          <Text>
            <Text>Texto</Text>
            <Text>Concatenado</Text>
          </Text>
          
          <View>
            <Text>Olá</Text>
            <Text>Mundo</Text>
          </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input:{
    height:40,
    margin:12,
    borderWidth:5,
    padding:15,
    width:200,
  },
  border:{
    borderColor:"red",
    borderWidth:5
  },
  texto:{
    fontSize:20,
    fontWeight:"bold",
    backgroundColor:"blue",
    color:"white",
    padding:20
  }
});
