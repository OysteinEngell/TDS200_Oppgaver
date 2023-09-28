import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getAllData, getTasks, storeTask, clearData } from './src/modules/storage';
import { useEffect, useState } from 'react';
import TaskItemView from './src/components/TaskItemView';
import {setSampleData} from './src/modules/initData'
import TaskListView from './src/components/TaskListView';


/*

TODO
[x] Get / set metoder for asyncStorage

[x] Task Interface
[x] TaskItem View component
[1] TaskItem styling

[x] initData module for dummy data

[x] TaskList view component
[x] TaskList styling

[x] Checkbox Component
[x] Is Checked state
[x] Checkbox Callback
[1] Update styles function

[ ] Add Task button
[ ] Add Task button styling

[ ] Task detail View 

[ ] Navigation
[ ] Settings page

[ ] Context



*/




export default function App() {

  const [tasksArray, setTaskesArray] = useState<Task[]>([])
  setSampleData(tasksArray)

  
  useEffect(()=>{
    const fetch = async () => {
      const tasksInStorage = await getTasks();
      setTaskesArray(tasksInStorage)
    }
    fetch();
    
  }, [])

  // console.log("tasks in storage: " + tasksArray.length)

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Just Do It</Text>
        <Text>Filter</Text>
      </View>

      <TaskListView tasksArray={tasksArray}/>

      <View style={styles.nav}>
          <Text>Navbar</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.75,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,

  },
  title: {
    fontWeight: '800',
    fontSize: 20,
  },
  nav: {
    flex: 0.5,
    backgroundColor: 'lightgray',
    width: '100%',
    alignItems: 'center',
    padding: 15,
  }
});
