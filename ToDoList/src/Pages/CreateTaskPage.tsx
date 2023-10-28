import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import TaskItemView from '../components/TaskItemView'
import InputView from '../components/InputView'
import { useState } from 'react'
import Picker from 'react-native-picker-select'
import { useTaskContext } from '../providers/TaskContextProvider'
import SelectDropdown from 'react-native-select-dropdown'

const CreateTaskPage: React.FC = () => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [tag, setTag] = useState<string>("")
    const [status, setStatus] = useState<boolean>(false)

    const {addTask} = useTaskContext()

    const handleTagChange = (value: string) => {
        setTag(value)
    }

    const handleSaveButtonPressed = () => {
        const newTask: Task = {
            title: title,
            id: 0, //hente lengde av array
            description: description,
            tag: tag,
            completed: false
        }

        if(newTask.title === ''){
            alert("Missing title")
        }else{
            if(newTask.tag === ''){
                newTask.tag = 'General'
            }

            addTask(newTask)
        }
    }


    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Task</Text>
            </View>

            <View style={styles.form}>
                <InputView 
                    typeOfValue={'default'} 
                    placeholder={'What do you want to do?'} 
                    textChange={
                    (newTitle) => {
                        setTitle(newTitle)
                    }
                    }                    
                />
                <InputView 
                    typeOfValue={'default'} 
                    placeholder={'How will you do it?'} 
                    textChange={
                    (newTitle) => {
                        setTitle(newTitle)
                    }
                    }                    
                />

                <View style={styles.picker}>
                    <Picker 
                        onValueChange={handleTagChange}
                        value={tag}
                        items={[
                            { label: 'Work', value: 'Work' },
                            { label: 'School', value: 'School' },
                            { label: 'Personal', value: 'Personal' },
                            { label: 'Health', value: 'Health' },
                            { label: 'Shopping', value: 'Shopping' },
                        ]}
                    />
                </View>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSaveButtonPressed}
                
                >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flex: 0.75,
        backgroundColor: '#fcfc6c',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    title: {
        fontWeight: '800',
        fontSize: 20,
    },
    form: {
        flex: 5,
        paddingHorizontal: 15,
        paddingTop: 10,
        gap: 10
    },
    button: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fcfc6c',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    picker: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
    }

})

export default CreateTaskPage