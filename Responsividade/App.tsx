import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return <View style={{height:300,width:100, backgroundColor:'red', }}></View>
}

function CaixaBlue(){
  return <View style={{height:300,width:100, backgroundColor:'blue', flexBasis:100,flexGrow:50 }}></View>
}

function CaixaGreen(){
  return <View style={{height:300,width:100, backgroundColor:'green',borderWidth:5,borderColor:'blaCK',flexShrink:50 }}></View>
}

export default function App() {
  return (
          <View style={styles.container}>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      <CaixaGreen></CaixaGreen>
      <StatusBar style="auto" />
         </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'flex-start',
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth:6,
    borderColor:'green',
    backgroundColor: '#fff',
  },
});
