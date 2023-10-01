import React, { useState } from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import CheckboxView from "./CheckboxView";

interface TaskProps {
    task: Task
}



const TaskItemView = ({ task }: TaskProps) => {

const [isChecked, setIsChecked] = useState(false);

const toggleCheckbox = () => {
    setIsChecked(!isChecked)

    task.completed = isChecked //Gjør ingenting enda -> lag metode for å lagre data
}


    return(
        <View style={styles[isChecked ? 'containerTrue' : 'containerFalse']}>
            <View style={styles.buttonSection}>
                <CheckboxView checked={isChecked} onToggle={toggleCheckbox}></CheckboxView>
            </View>
            
            <View style={styles.contentSection}>
                    <Text style={styles[isChecked ? 'titleTrue' : 'titleFalse']}>{task.title}</Text>
                    <Text style={styles.description}>{task.description}</Text>   
                    <Text style={styles.tags}>{task.tag}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFalse: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fcfc6c',
        borderRadius: 10,
        padding: 15,
        gap: 10,
    },
    containerTrue: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#aeae58',
        borderRadius: 10,
        padding: 15,
        gap: 10,
    },
    buttonSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentSection: {
        flex: 5,
        alignItems: "flex-start"
    },
    titleFalse: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleTrue: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    tags: {
        fontSize: 12,
        fontWeight: '600',
        color: '#fafafa',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15,
        backgroundColor: 'black',
        overflow: 'hidden'
    },
  });

export default TaskItemView