import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import BatSinal from '../../assets/BatSinal.png';
import { styles } from './FormStyle';

export default function FormComponent({ navigation }: any) {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <Image source={BatSinal} style={styles.image} />

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            autoCapitalize="words"
            returnKeyType="next"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Digite seu telefone"
            keyboardType="phone-pad"
            returnKeyType="next"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua localização"
            autoCapitalize="sentences"
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Campo para alguma informação adicional"
            editable
            multiline
            numberOfLines={4}
            maxLength={100}
          />

          <TouchableOpacity style={styles.button} onPress={() => alert('Formulário enviado!')}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
