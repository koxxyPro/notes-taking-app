import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import colors from '../misc/colors'
import SearchBar from '../components/SearchBar'
import ButtonIcon from '../components/ButtonIcon'
import NoteInputModal from '../components/NoteInputModal'

const NoteScreen = ({ person }) => {

    const [greet, setGreet] = useState('');

    const findGreetingTime = () => {
        const hrs = new Date().getHours();
        if (hrs === 0 && hrs < 12) {
            return setGreet("Morning");
        };
        if (hrs >= 12 && hrs < 17) {
            return setGreet("Afternoon");
        }
        setGreet("Evening");
    }

    useEffect(() => {
        findGreetingTime();
    }, [])

    return (
        <>
            <StatusBar style='auto' backgroundColor={colors.LIGHT} />
            <View style={styles.container}>
                <Text style={styles.header}>{`Good ${greet} ${person.name}`}</Text>
                <SearchBar containerStyle={{ marginVertical: 10 }} />
            </View>
            <View style={[StyleSheet.absoluteFill, styles.emptyHeaderContaier]}>
                <Text style={styles.emptyHeader}>Add Notes</Text>
                <ButtonIcon antIconName='plus' style={styles.addBtn} />
            </View>
            <NoteInputModal visible={true} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    header: {
        marginTop: 40,
        fontSize: 22,
        fontWeight: 'bold'
    },
    emptyHeader: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        opacity: 0.2
    },
    emptyHeaderContaier: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1
    },
    addBtn: {
        position: 'absolute',
        right: 20,
        bottom: 50
    }
})

export default NoteScreen;