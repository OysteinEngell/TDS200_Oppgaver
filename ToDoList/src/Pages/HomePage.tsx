import {View, Text, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { getAllData, getTasks, storeTask, clearData } from '../modules/storage';
import TaskListView from '../components/TaskListView';


const HomePage: React.FC = () => {

    //Gjøre om til context?
    const [tasksArray, setTaskesArray] = useState<Task[]>([])
  
    //Henter data i asyncStorage og oppdaterer state
    useEffect(()=>{
      const fetch = async () => {
        const tasksInStorage = await getTasks();
        setTaskesArray(tasksInStorage)
      }
      fetch();
    }, [])

    return(
        <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Just Do It</Text>
        <Text>Filter</Text>
      </View>

      <TaskListView tasksArray={tasksArray}/>
      
      <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
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
  })

export default HomePage