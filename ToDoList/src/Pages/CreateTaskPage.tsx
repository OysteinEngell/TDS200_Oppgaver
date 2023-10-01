import {View, Text, StyleSheet} from 'react-native'

const CreateTaskPage: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>New Task</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CreateTaskPage