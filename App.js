import React,{useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const App = () => {
  const [count,setCount]=useState(0);
  
  const handleAdd=()=>{
    setCount(count+1);
  }
  const handleDec=()=>{
    if(count>0){
      setCount(count-1);
    }
   
  }
  const handleReset=()=>{
    setCount(0);
  }

  return (
     <View style={styles.parentcontainer}>
   <Text style={styles.heading}> My CounterApp</Text>

    <View style={styles.container}>
      <Text style={styles.text}> Counter: {count}</Text><br/>
      <TouchableOpacity style={styles.button} onPress={handleAdd} >
      <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleDec} >
      <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={handleReset} >
      <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({

  parentcontainer:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    backgroundColor:"grey",
  },
  heading:{
    fontSize:30,
    color:"white",
    marginTop:20
  },
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    backgroundColor:"grey",
  },
  text:{
    fontSize:30,
    color:"white"
  },
  button:{
    width:100,
    backgroundColor:"green",
    padding:10,
    borderRadius:5,
    marginRight:200
  },
  buttonText:{
    fontSize:15,
    color:'white'
    
  },
  button2:{
    width:100,
    backgroundColor:"red",
    padding:10,
    borderRadius:5,
     marginBottom:200,
    float:"right",
     marginLeft:20,
     marginTop:-40
  
  },
  button3:{
    width:80,
    backgroundColor:"orange",
    padding:10,
    borderRadius:5,
   marginBottom:200,
    float:"right",
     marginLeft:250,
     marginTop:-240
   
  },
  
 
  
});

export default App;
