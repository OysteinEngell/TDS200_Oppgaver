import {View, Text, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useTaskContext } from '../providers/TaskContextProvider'
import TaskListView from '../components/TaskListView';


const HomePage: React.FC = () => {

    const {taskArray} = useTaskContext()

    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>Just Do It</Text>
          <Text>Filter</Text>
        </View>

        <TaskListView tasksArray={taskArray}/>

        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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