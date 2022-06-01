import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



import { Card } from 'react-native-paper';

import {styles} from './styles'

export function Empresa() {
  return (
    <View style={styles.container}>
    <Text style= {styles.paragraph}>
Change code in the editor and watch it change on your phone! Save to get a shareable url. 
      </Text>
      <Card>

    
      </Card> 
      </View>
  );
}