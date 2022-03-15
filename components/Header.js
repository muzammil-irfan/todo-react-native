import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

export default function Header() {
  return (
    <>
    <View style={styles.header}>
        <Text style={styles.title}>
            Todos App
        </Text>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    header:{
        height:50,
        // paddingY: 20,
        justifyContent:"center",
        backgroundColor:"#00f"
    },
    title:{
        textAlign:'center',
        color:"#fff",
        fontSize:20,
        fontWeight:"bolder"
    }
})