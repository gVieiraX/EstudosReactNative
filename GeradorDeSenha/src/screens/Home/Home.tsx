import React from "react";
import { Text,View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { BatLogo } from "../../components/BatLogo/BatLogo";

export default function Home(){
    return(
        <View style={styles.appContainer}>
            
            <View style={styles.logoContainer}>
             <BatLogo/>
            </View>
            <Text>Home Works</Text>
            <StatusBar style="auto" />    
        </View>
    )
}   


  