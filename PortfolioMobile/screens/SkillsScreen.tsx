import React from 'react';
import { View,Text,Image} from 'react-native';
import * as Progress from 'react-native-progress';

import { styles } from './SkillsScreenStyle';

import CR7 from '../assets/profile.jpg'

export default function screens() {
  return (
    <View style={styles.container}>
         <Image source={CR7} style={styles.image}></Image>

          <Text style={{fontWeight:'bold', fontSize:22, margin:12}}>Minhas Habilidades</Text>    


      <View style={styles.skill}>
        <Text style={styles.skillText}>React Native</Text>
        <Progress.Bar progress={0.5} width={200} color="#2965f1" />
      </View>

      <View style={styles.skill}>
        <Text style={styles.skillText}>Spring Framework</Text>
        <Progress.Bar progress={0.6} width={200} color="#2965f1" />
      </View>

      <View style={styles.skill}>
        <Text style={styles.skillText}>SQL</Text>
        <Progress.Bar progress={0.8} width={200} color="#2965f1" />
      </View>

      <View style={styles.skill}>
        <Text style={styles.skillText}>Java Script</Text>
        <Progress.Bar progress={0.6} width={200} color="#2965f1" />
      </View>
    </View>
  );
}