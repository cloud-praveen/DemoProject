import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from "react-native";
import { useState } from "react";
import GoalList from "./GoalList";
import GoalInput from "./GoalInput";

export default function App() {
  // state
  const [goals, setGoals] = useState([]);

  const[model , setModel]=useState(false)

  // button handler
  const addGoalHandler = (goalText) => {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  };

  // delete items

  const deleteItem = (index) => {
    const newGoals = goals.filter((el, i) => i != index);

    setGoals(newGoals);
  };


  const addGoalBtn = ()=>{
    setModel(true)
  }


  const closeGoalBtn = ()=>{
    setModel(false)
  }

  return (


    <View style={styles.appContainer}>
      <Text style={styles.title}>Goal App</Text>
      <Button title="Add New Goal" color='#5e0acc'  onPress={addGoalBtn}/>
      {model &&  <GoalInput  visible={model} onAddGoal={addGoalHandler} onClose={closeGoalBtn} />}
     
      <View></View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalList
             
                onDelete={() => deleteItem(itemData.index)}
                text={itemData.item}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "900",
  },

  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 4,
  },
});
