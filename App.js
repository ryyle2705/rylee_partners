import { StyleSheet, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SplashNavigation } from './Src/Navigation/NavigationHandler'

const App = () => {
  return (
    <NavigationContainer>
      <SplashNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})