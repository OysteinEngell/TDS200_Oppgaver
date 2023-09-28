import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native"
import ListItemComponent from "./ListItemComponent";

const ScrollViewComponent = () => {
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{rowGap: 10}}>
               <ListItemComponent/>
               <ListItemComponent/>
               <ListItemComponent/>
               <ListItemComponent/>
               <ListItemComponent/>
               <ListItemComponent/>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 5, 
        backgroundColor: 'lightgray',
    },
    list: {


    },
    content: {
        fontSize: 30,
        height: 100,
        borderWidth: 1,
    }
})

export default ScrollViewComponent