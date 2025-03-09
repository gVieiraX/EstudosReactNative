import React from 'react';
import { View,Text,Button } from 'react-native';


export default function HomeScreen({navigation}:any) {

  function navToGallery(){
    navigation.navigate('gallery')
  }

  return (
    <View style={{flex:1}}>
         <Text>Home Works</Text>
         <Button
          title="Go To Gallery"
          onPress={navToGallery}
         />
    </View>
  );
}                   