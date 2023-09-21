 
import {LinearGradient} from 'expo-linear-gradient'
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput ,Button ,FlatList, Pressable} from 'react-native';


export default function App() {
  const [textTask , setTextTask] =useState("");
  const [tasks ,setTasks] = useState([]);
  function handleText(text){
     setTextTask(text);
  }

  function handleButton(){
    setTasks((currentTask)=> [...currentTask,textTask])
    setTextTask("");
  }

  function deleteItem(index){
      const Updatedtask = tasks.filter((_,i)=> i!== index )
      setTasks(Updatedtask)
  }
  return (
 
      <LinearGradient colors={['#9796F0', '#FBC7D4']} style={styles.container}>
      <View>
        <Text style={styles.header}>
          To-do List 
        </Text>
      </View>
      <View style={styles.textInput}>
      <TextInput
       onChangeText={handleText} value={textTask} placeholder='Enter your task for today:'
       />
      </View>

      <View style={styles.buttonClick}>
        <Button onPress={handleButton} title='Add'></Button>
        </View>
        <View>
          <Text style={styles.List}>
            List of Tasks:
          </Text>
        </View>

        <FlatList 
        data={tasks}
        renderItem={({item , index})=>{
          return(
            <Pressable onPress={()=> deleteItem(index)} android_ripple={{color:'#21046'}}>
            <View key={index} style={styles.taskProperty}>
            <Text style={styles.textContainer}>{item}</Text>
          </View>
          </Pressable>
          )
        }}
        keyExtractor={(item,index)=> {index.toString()}}
        />
      </LinearGradient>
  
 
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#9708CC',
    padding:8,
  },
  
    header:{
    marginTop:50,
    fontSize:30,    
    textAlign:'center'
  },

  textInput:{
    marginTop:40,
    padding:5,
    borderWidth:2,
    borderRadius:15, 
    
  },
  buttonClick:{
    width:50,
    marginTop:10,
  },

  List:{
    fontSize:20,
    marginTop:15
  },


  taskProperty:{
    margin:9,
    padding:8,
    backgroundColor:'#c23fd6',
    borderRadius:10, 
  },
  textContainer:{
    color: 'black'
  }
});
