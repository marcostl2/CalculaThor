import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

import styles from './styles.js'

const Logo = require('./assets/icon.png')

const calc =require('./src/calc')

import { useFonts } from '@use-expo/font';

export default function App() {

  const [response, setResponse] = useState('0')
  const [answer,setAnswer]=useState(false)

  let [fontsLoaded] = useFonts({
    'Open-Sans': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if(fontsLoaded){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Calcula
            <Text style={[styles.title,{fontWeight:'100', fontFamily:'OpenSans-SemiBold'}]}>Thor</Text>
          </Text>
          <Image source={Logo} style={styles.logo}/>
        </View>
        
  
        <Text style={styles.response}>{response}</Text>
  
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={()=>calc.backspace(response,setResponse,answer,setAnswer)} style={styles.deleteButtonContainer}>
            {/* <Text style={[styles.buttonText, styles.deleteButton]}>DEL</Text> */}
            <MaterialIcons name="backspace" style={[styles.buttonText, styles.deleteButton]}/>
          </TouchableOpacity>
  
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>setResponse('0')} style={styles.button}>
              <Text style={[styles.buttonText,styles.opButton]}>C</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.buttonText,styles.opButton]}>( )</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.buttonText,styles.opButton]}>%</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('/',response,setResponse)} style={styles.button}>
              <Text style={[styles.buttonText,styles.opButton]}>/</Text>
            </TouchableOpacity>
  
          </View>
  
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>calc.handleKey('7',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('8',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('9',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('*',response,setResponse)} style={styles.button}>
              <Text style={[styles.buttonText,styles.opButton]}>*</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>calc.handleKey('4',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('5',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('6',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('-',response,setResponse)} style={styles.button}>
              <Text style={[styles.buttonText,styles.opButton]}>-</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>calc.handleKey('1',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('2',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('3',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('+',response,setResponse)} style={styles.button}>
              <Text style={[styles.buttonText,styles.opButton]}>+</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>calc.handleKey('.',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.handleKey('0',response,setResponse)} style={styles.button}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+/-</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>calc.expression(response,setResponse,answer,setAnswer)} style={styles.button}>
              <Text style={[styles.buttonText,styles.delButton]}>=</Text>
            </TouchableOpacity>
          </View>
  
        </View>
      </View>
    );
  }else{
    return(<View></View>)
  }

  
}

