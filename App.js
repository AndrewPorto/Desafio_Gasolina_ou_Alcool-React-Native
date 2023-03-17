import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';




export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [gasolina, setGasolina] = useState('')
  const [alcool, setAlcool] = useState('')
  const [resultado, setResultado] = useState("");

 
  function verificarMelhorOpcao() {
    const relacao = alcool / gasolina;
    if (relacao < 0.7) {
      return "Álcool";
    } else {
      return "Gasolina";
    } 
  }

  const resultadoCalculado = verificarMelhorOpcao(alcool, gasolina)

   function calcularResultado(){
    if(alcool === '' || gasolina === ''){
      alert('Por favor, preencha todos os campos')
    }else {
      setResultado(resultadoCalculado);
      setModalVisible(true)
    }
   }
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false}/>
      <Image 
      source={require('./src/assets/logo.png')}
      style={styles.img}
      />
      <Text style={styles.h1}>Qual a melhor opção?</Text>
      <View style={styles.inputView}>
        <Text style={styles.text}>Álcool (preço por litro)</Text>
        <TextInput 
        value={alcool}
        onChangeText={ (texto) => setAlcool(texto) }
        style={styles.input}
        keyboardType='numeric'
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.text}>Gasolina (preço por litro)</Text>
        <TextInput 
        value={gasolina}
        onChangeText={ (texto) => setGasolina(texto) }
        style={styles.input}
        keyboardType='numeric'
        />
      </View>
      <TouchableOpacity style={styles.areaBtn} onPress={calcularResultado}>
        <Text style={styles.btnText}>Calcular</Text>    
           
      </TouchableOpacity>
      <Modal transparent={false} animationType="slide" visible={modalVisible}>
      <View style={styles.containerModal}>
            <Image 
            source={require('./src/assets/logo.png')}
            style={styles.imgModal}
            />
            <Text style={styles.result}>Compensa usar {resultado}</Text>
            <View style={styles.viewPrecos}>
                <Text style={styles.h2}>Com os preços:</Text>
                <Text style={styles.text}>Alcool: {alcool}</Text>
                <Text style={styles.text}>Gasolina: {gasolina}</Text>
            </View>
            <TouchableOpacity style={styles.btnAreaModal} onPress={() => setModalVisible(false)}>
                <Text style={styles.btnTextModal}>Calcular novamente</Text>
            </TouchableOpacity>
        </View>
       
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -15
  },
  h1:{
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 45
  },
  inputView:{
    width: '80%',
    marginBottom: 20
  },
  text:{
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    paddingLeft: 10,
   
    fontSize: 20
  },
  areaBtn:{
    width: '80%',
    backgroundColor: '#eb4434',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: -5
  },
  btnText:{
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  result: {
    color: '#32e158',
    fontWeight: 'bold',
    fontSize: 25 
},
viewPrecos:{
    alignItems: 'center',
},
h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20
},
text:{
    color: '#FFF',
    marginTop: 5
},
btnAreaModal: {
    marginTop: 20,
    borderWidth: 2,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#eb4434'
},
btnTextModal:{
    color: '#eb4434',
    fontWeight: 'bold',
    
},
containerModal:{
  flex: 1,
        alignItems: 'center',
        backgroundColor: '#151515',
},imgModal: {
  marginTop: 100,
  marginBottom: 25
},

});

