import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, styles.border]}>

      <View onTouchStart={(event)=>{
        Alert.alert('Começou a clicar, clique iniciado')}}
        onTouchEnd={(event)=>{
        Alert.alert('Começou a clicar, clique finalizado')}}
        onLayout={(event)=>{
          
        }}
          >
             <Text style={[styles.texto, styles.border]}>Olá</Text></View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
