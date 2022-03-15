import React, { useState } from "react";
import { TextInput,View,StyleSheet,Button } from "react-native";

export default function TodoCreater(props) {
  const [text, setText] = useState("");
  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          placeholder="new todo..."
          onChangeText={(value) => setText(value)}
          value={text}
        />
        <Button
          title="add todo"
          color="#00f"
          onPress={() => { props.submitHandler(text); setText('');}}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,

    }
});


