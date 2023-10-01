import {View, Text, StyleSheet} from 'react-native'

const SettingsPage: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>Settings</Text>
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

export default SettingsPage