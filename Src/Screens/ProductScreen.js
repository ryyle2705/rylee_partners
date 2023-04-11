import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductScreen = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#ffffff00'}
                translucent
            />
            <Text style={{ alignSelf: 'center' }}>Products</Text>
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
})