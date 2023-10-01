import React from "react";
import {View, ScrollView, StyleSheet} from "react-native"
import TaskItemView from "./TaskItemView";

const TaskListView = ({ tasksArray } : {tasksArray: Task[] }) => {
    return (
        <View style={styles.list}>
            <ScrollView contentContainerStyle={{rowGap: 10}}>
                {tasksArray.map((task) => (
                    <TaskItemView key={task.id} task={task}  />  
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 5,
        paddingHorizontal: 10,
    }
})

export default TaskListView