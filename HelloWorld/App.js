import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    alert(`Email: ${email} Senha: ${senha}`)
  }

  const image = { uri:"https://miro.medium.com/max/1000/1*UYrZ5wA0AyNdfQXvi0GU3g.png" };

  return (

    <View style={styles.container}>
      <ImageBackground source={image} style={styles.container}>
        <View style={{width: 360, justifyContent: 'center'}}>
      <Text style={{marginHorizontal:20, fontSize: 50, color:'white'}}>Hello World</Text>
      <Text style={{marginHorizontal:85, color: 'white', marginVertical: 30}}> Esse é meu primeiro app </Text>
      </View>
      <Text style={{color: 'white'}}> Email </Text>
       <TextInput
       style={{color: 'white',padding: 10,height: 40, width:200, borderColor: 'white', borderWidth: 1 }}
       onChangeText={text => setEmail(text)}
       value={email}
     /> 
      <Text style={{color: 'white'}}> Senha </Text>
      <TextInput
      style={{ height: 40, width:200, borderColor: 'white', borderWidth: 1, color: 'white', padding: 10}}
      onChangeText={text => setSenha(text) }
      secureTextEntry
      value={senha}
    /> 


    <Button
    onPress={logar}
    title="Login"
    color='black'
    accessibilityLabel="Login"
    />


      <StatusBar style="auto" />
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
