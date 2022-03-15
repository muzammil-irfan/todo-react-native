import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

export default function Items(props) {
  return (
    <>
    <TouchableOpacity onPress={()=>{props.pressHandler(props.item)}}>
        <Text style={styles.item}>{props.item}</Text>
    </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:"#10f",
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:20,
        color:'#000'
    }
})