import {View, Text, StyleSheet, TextInput} from 'react-native'
import TaskItemView from '../components/TaskItemView'
import InputView from '../components/InputView'
import { useState } from 'react'

const CreateTaskPage: React.FC = () => {

    const [title, setTitle] = useState<string>("")



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
        flex: 5
    }
})

export default CreateTaskPage