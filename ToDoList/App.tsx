import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getAllData, getTasks, storeTask, clearData } from './src/modules/storage';
import { useEffect, useState } from 'react';
import TaskItemView from './src/components/TaskItemView';
import {setSampleData} from './src/modules/initData'


/*

TODO
[x] Get / set metoder for asyncStorage

[x] Task Interface
[x] TaskItem View component
[?] TaskItem styling

[x] initData module for dummy data

[ ] TaskList view component
[ ] TaskList styling

[ ] Add Task button
[ ] Add Task button styling

[ ] Task detail View 

[ ] Navigation
[ ] Settings page

[ ] Context



*/




export default function App() {



  const [tasksArray, setTaskesArray] = useState<Task[]>([])

  useEffect(()=>{
    const fetch = async () => {
      const tasksInStorage = await getTasks();
      setTaskesArray(tasksInStorage)
    }
    fetch();
  }, [])

  return (
    <View style={styles.container}>

      <View style={{marginTop: 75, marginBottom: 20}}>
        <Text>Header</Text>
      </View>

      <ScrollView style={styles.list}>

      {tasksArray.map((task) => (
        <TaskItemView key={task.id} task={task}  />  
      ))}
      </ScrollView>


      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 10,




  }
});
