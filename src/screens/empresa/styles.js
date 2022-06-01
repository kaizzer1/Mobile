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
  backgroundColor: '',
  padding: 10,

  },
image_perfil: {
  width: 150,
  height:170,
  borderRadius: 1,
 

},
nome: {
fontSize: 20,
fontWeight: 'bold',
marginTop: 20,

},
endereco: {
color:'#2F4F4F',
fontSize: 15,
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
  borderColor: '#5F9EA0',
  alignItems: 'center',
  backgroundColor: '#FFFFF0',
  borderRadius: 20,
  marginTop: 30
},
card_titulo: {
  color:'#483D8B',
  fontSize: 11,
  fontWeight: 'bold',
  

}
}); 