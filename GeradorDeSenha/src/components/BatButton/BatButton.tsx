import React, { useState } from 'react';
import {Text, Pressable, View} from 'react-native';
import * as Clipboard from 'expo-clipboard';


import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generationPassword from '../../services/passwordService';

export function BatButton() {
    const [pass, setPass] = useState('')
    const [copyPass, setCopyPass] = useState('')

    function handleGenerationButton(){
        let generateToken = generationPassword
        setPass(generateToken)
        setCopyPass('')
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
        setCopyPass('Senha Copiada!')
    }
  return (
    <>
        <BatTextInput pass={pass}></BatTextInput>
        <Pressable onPress={handleGenerationButton} style={({ pressed }) => [ styles.button,{ opacity: pressed ? 0.6 : 1 }]}>
             <Text style={styles.text}>Gerar Senha</Text>
      </Pressable>

        <Pressable  onPress={handleCopyButton} style={({ pressed }) => [ styles.button,{ opacity: pressed ? 0.6 : 1 }]}>
            <Text style={styles.text}>Copiar</Text>
        </Pressable>
    
        {copyPass ? (
                <Text style={styles.copyPass}>{copyPass}</Text> 
            ) : null}
    </>
  );
}




