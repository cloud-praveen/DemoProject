import { View , TextInput ,  Button, StyleSheet ,Modal } from "react-native";

import { useState } from "react";
const GoalInput = (props) => {
    const [goalText , setGoalText]=useState('')

      // input handler
  const goalInputHandler =(text)=>{
    setGoalText(text)

  }

  const addGoalHandler=()=>{
    props.onAddGoal(goalText);
    props.onClose();

  }


  return (

    <Modal visible={props.visible} animationType="slide">
 <View style={styles.inputContainer}>
    <TextInput style={styles.textInput} placeholder='Type your Goal' onChangeText={goalInputHandler}/>

    <View  style={styles.btnContainer}>
        <View style={styles.button}>
        <Button  onPress={addGoalHandler} title='Add Goal'/>

        </View>

        <View style={styles.button}>
        <Button  onPress={props.onClose} title='Cancel'/>
        </View>
   
   
    </View>
   
        </View>
    </Modal>
   
  );
};



const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:"#cccccc",
        paddingBottom:24,
        flex:1,
        padding:16,

        },
      textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'100%',
        padding:5
      },

      btnContainer:{
flexDirection:"row",
marginTop:16,

      },

      button:{
width:100,
marginHorizontal:8,

      }
})
export default GoalInput;