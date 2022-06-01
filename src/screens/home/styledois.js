import * as React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Image } from 'react-native';
    
export const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#F0F8FF',
  padding: 10,

  },
image_perfil: {
  width: 250,
  height:180,
  borderRadius: 1,
 

},
nome: {
fontSize: 4,
fontWeight: 'bold',
marginTop: 20,

},
endereco: {
color:'#2F4F4F',
fontSize: 18,
fontWeight: 'bold',
marginTop: 1,

},
redes_sociais: {
flexDirection: 'row',
justifyContent:"space-between",
marginTop: 10

},
card: {
  width: '100%',
  borderWidth: 2,
  borderColor: '#FFFAFA',
  alignItems: 'center',
  backgroundColor: '#66CDAA',
  borderRadius: 1,
  marginTop: 20
},
card_titulo: {
  color:'#F5F5F5',
  fontSize: 14,
  fontWeight: 'bold',
  alignItems: 'center',

}

}); 