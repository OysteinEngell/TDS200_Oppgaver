import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getAllData, getTasks, setTask, clearData } from './src/modules/storage';
import { useEffect, useState } from 'react';
import TaskItemView from './src/components/TaskItemView';
import {setSampleData} from './src/modules/initData'


/*

TODO
[x] Get / set metoder for asyncStorage

[x] Task Interface
[x] TaskItem View component
[ ] TaskItem styling

[ ] initData module for dummy data

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



  clearData('Tasks')


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
      <Text>To Do list main</Text>

      {tasksArray.map((task) => (
        <TaskItemView key={task.id} task={task}  />  
      ))}
      
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
