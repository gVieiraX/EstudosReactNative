import React from 'react';
import { View,Image,Button,Text, Linking,TouchableOpacity } from 'react-native';

import { styles } from './MainScreenStyle';

import CR7 from '../assets/profile.jpg'

export default function screens({navigation}: any) {

  function navToSkills(){
    navigation.navigate('Skills Screen')
  }

  function linkLinkedin(){
    Linking.openURL('https://www.linkedin.com/in/gabriel-vieirax12/');
  }

  function linkGitHub(){
    Linking.openURL('https://github.com/gVieiraX');
  }

  function linkPortfolio(){
    Linking.openURL('https://portfoliogvieira.netlify.app/#experience');
  }

  return (
    <View style={styles.container}>
         <Image source={CR7} style={styles.image}></Image>

          <Text style={{fontWeight:'bold', fontSize:22, margin:12}}>Gabriel Vieira</Text>

          <TouchableOpacity style={styles.button} onPress={linkLinkedin} activeOpacity={0.7}>
                   <Text style={styles.buttonText}>Linkedin</Text>
            </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={linkGitHub} activeOpacity={0.7}>
                   <Text style={styles.buttonText}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={linkPortfolio} activeOpacity={0.7}>
                   <Text style={styles.buttonText}>Portfolio</Text>
            </TouchableOpacity>       
         
            <TouchableOpacity style={styles.buttonRoute} onPress={navToSkills} activeOpacity={0.7}>
                   <Text style={styles.buttonText}>Visualizar Minhas Skills</Text>
            </TouchableOpacity>
          
    </View>
  );
}