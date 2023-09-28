import React from "react";
import {View, StyleSheet, Text} from "react-native"

const TestComponent1 = () => {
    return(
        <View style={styles.container}>
            <Text>TestComponent1 Container</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default TestComponent1