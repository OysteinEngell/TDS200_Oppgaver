import {View, Text, StyleSheet, TextInput} from 'react-native'
import TaskItemView from '../components/TaskItemView'
import InputView from '../components/InputView'
import { useState } from 'react'
import Picker from 'react-native-picker-select'
import SelectDropdown from 'react-native-select-dropdown'

const CreateTaskPage: React.FC = () => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [tag, setTag] = useState<string>("")
    const [status, setStatus] = useState<boolean>(false)




    const handleTagChange = (value: string) => {
        setTag(value)

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

                <Picker 
                    style={styles.picker}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flex: 0.75,
        backgroundColor: '#fafafa',
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
    picker: {
        backgroundColor: 'white'
    }
})

export default CreateTaskPage