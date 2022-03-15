import React,{useState} from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/Header';
import Items from './components/Items';
import TodoCreater from './components/TodoCreater';

export default function App() {
  const [data,setData] = useState(['Hel',1,2,3]);
  const pressHandler = (text)=>{
    setData(prevText=>prevText.filter(item=> item!== text) )
  }
  const submitHandler = (text)=>{
    setData(prevText=>[...prevText,text]);
  }
  return (
    <View style={styles.container}> 
      <Header />
      <View style={styles.content}>
        <TodoCreater submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
         data={data}
        //  renderItem={({item})=>(<Items text={item} pressHandler={pressHandler
        // } />)}
        renderItem={({item})=><Items item={item} pressHandler={pressHandler} />}
         />
      </View>
      {/* <TodoCreater /> */}
      </View>
      {/* <View style={styles.header}>
        <Text style={{color:"#fff",textAlign:"center"}}>LOGO</Text>
      </View>
      <Text>Helo</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    // color:"#fff",
    padding:40,

  },
  list:{
    marginTop:20
  }
});
