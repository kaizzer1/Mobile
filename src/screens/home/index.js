import * as React from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    Image } from 'react-native';

import {styles} from './styledois' 

import Logo from './../../../assets/logo.png' 
import {Card} from '../../components/Card/index'
import Icon from 'react-native-vector-icons/Fontisto'
import List from '../../components/List/index'

export function Home () {
  return (
    <View style={styles.container}>

     <Image source = {Logo} style = {styles.image_perfil}/> 
     <View style={styles.container_cabecalho}>
      <Card nome="GENIUS LAB"> </Card>
      <Text style = {styles.endereco}> Rua XV, 333, Cidade - 12345-678  </Text>
      <View style = {styles.redes_sociais}>
      <Icon name = 'whatsapp' size= {30}/>  
      <Icon name = 'email' size= {30}/>  
       <Icon name = 'world-o' size= {30}/>  
      </View>
      </View>
    

       <View style={styles.card}>
       <Text style={styles.card_titulo}> Nossa Empresa </Text>
     
     <List/> 

     
     
      </View>
       <View style={styles.card}>
      
      <Text style={styles.card_titulo}> SITES | CORREÇÃO DE ERROS | PROJETOS</Text>
      
     
     
     
      </View>
      </View> 
  );
}