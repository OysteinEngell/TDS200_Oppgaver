import React from "react";
import {View, StyleSheet, Text} from "react-native"

const ListItemComponent = () => {
    return(
        <View style={styles.container}>
            <View style={styles.section1}>
                <Text>Knapp</Text>
            </View>
            <View style={styles.section2}>
                <Text style={styles.title}>Tittel</Text>
                <Text>Beskrivelse Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi vel provident optio perferendis omnis iusto illo nostrum, eveniet iure eum laboriosam recusandae fugiat, id qui architecto. Corrupti, numquam hic?</Text>
                <Text style={styles.tagContent}>Kategori</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        gap: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'gray',
    },
    section1: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    section2: {
        flex: 5,
        backgroundColor: 'blue',
        alignItems: 'flex-start',

    },
    title: {

        flexShrink: 1,
        fontWeight: '800'

    },
    tagBackground: {

    },
    tagContent: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,

    },


})

export default ListItemComponent