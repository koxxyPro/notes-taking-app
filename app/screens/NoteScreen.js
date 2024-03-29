import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import colors from '../misc/colors'

const NoteScreen = ({ person }) => {

    const [greet, setGreet] = useState('Evening');

    return (
        <>
            <StatusBar style='auto' backgroundColor={colors.LIGHT} />
            <View>
                <Text style={styles.header}>{`Good ${greet} ${person.name}`}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        fontSize: 23,
        fontWeight: 'bold'
    }
})

export default NoteScreen;