import React from 'react';
import { View, Image,Button, TouchableOpacity} from 'react-native';

import { styles } from './HomeStyle';

import BatSinal from '../../assets/BatSinal.png'

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={BatSinal} style={{resizeMode:'contain', height:160}} />
      
      <TouchableOpacity style={{
      backgroundColor: 'black',
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 15
    }}>
        <Button title='Activate BatSignal' color={"white"} onPress={() => navigation.navigate('Form')}/>
      </TouchableOpacity>
    </View>
  );
} 