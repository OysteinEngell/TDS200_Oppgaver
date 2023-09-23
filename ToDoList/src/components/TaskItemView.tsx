import React from "react";
import {View, Text} from 'react-native'

interface TaskProps {
    task: Task
}

const TaskItemView = ({ task }: TaskProps) => {
    return(
        <View>
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
            <Text>{task.tag}</Text>
        </View>
    )
}

export default TaskItemView