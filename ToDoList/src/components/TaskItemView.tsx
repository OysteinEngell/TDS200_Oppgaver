import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

interface TaskProps {
    task: Task
}

const TaskItemView = ({ task }: TaskProps) => {
    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity/>
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{task.title}</Text>
                    <View style={styles.tagBackground}>
                        <Text style={styles.tags}>{task.tag}</Text>
                    </View>
                </View>
                <Text style={styles.description}>{task.description}</Text>   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderRadius: 20,
        padding: 20,
        marginBottom: 10
    },
    content: {
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
    tagBackground: {
        backgroundColor: 'black',
        borderRadius: 20,
    },
    tags: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
  });

export default TaskItemView