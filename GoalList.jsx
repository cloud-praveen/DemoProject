import { StyleSheet, View , Text , Pressable } from "react-native";
const GoalList = (props) => {
  return (
 <View style={styles.goalItem} >

    <Pressable  onPress={props.onDelete}  style={({pressed})=> pressed && styles.pressedItem}>
    <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
   </View>

   
  );
};



const styles =StyleSheet.create({
    goalItem:{
      marginTop:15,
        borderRadius:5,
        backgroundColor:'blue',
      },
    
      goalText:{
        color:'white',
        margin:8,
        padding:6,
      },

      pressedItem:{
        opacity:0.5,

      }
})



export default GoalList;