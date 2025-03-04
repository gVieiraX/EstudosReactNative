import React from 'react';
import { View,Text, Button} from 'react-native';

import { styles } from './FormStyle';

export default function components({ navigation }: any) {
    
    return (
        <View style={styles.container}>
          <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
        </View>
      );
 }