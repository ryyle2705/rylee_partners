import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlertScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#ffffff00'}
        translucent
      />
      <Text style={{ alignSelf: 'center' }}>Alert</Text>
    </View>
  )
}

export default AlertScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})