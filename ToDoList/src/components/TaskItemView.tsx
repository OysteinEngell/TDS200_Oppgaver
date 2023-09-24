import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

interface TaskProps {
    task: Task
}

const TaskItemView = ({ task }: TaskProps) => {
    return(
        <View style={styles.container}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.description}>{task.description}</Text>
                <Text style={styles.tags}>{task.tag}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderRadius: 20,
        padding: 20,
        elevation: 2, // Add shadow for a card-like effect
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
    tags: {
        fontSize: 14,
        color: '#fff',
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-start",

    },
  });

export default TaskItemView