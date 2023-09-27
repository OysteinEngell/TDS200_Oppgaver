import React from "react";
import {View, ScrollView, StyleSheet} from "react-native"
import TaskItemView from "./TaskItemView";

const TaskListView = ({ tasksArray } : {tasksArray: Task[] }) => {
    return (
        <ScrollView style={styles.list}>
            {tasksArray.map((task) => (
                <TaskItemView key={task.id} task={task}  />  
            ))}
         </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        maxHeight: '80%'
    }
})

export default TaskListView