import { Keyboard, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import colors from '../misc/colors';

function NoteInputModal({ visible }) {
    const handleModalClose = () => {
        Keyboard.dismiss();
    }
    return (
        <>
            <StatusBar hidden />
            <Modal visible={visible} animationType='fade'>
                <View style={styles.container}>
                    <TextInput placeholder='Title' style={[styles.input, styles.title]} />
                    <TextInput multiline placeholder='Note' style={[styles.input, styles.desc]} />
                </View>
                <TouchableWithoutFeedback onPress={handleModalClose}>
                    <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginVertical: 15
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: colors.PRIMARY,
        color: colors.DARK
    },
    title: {
        height: 40,
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 22,
        textTransform: 'capitalize',
    },
    desc: {
        height: 100,
        fontSize: 18
    },
    modalBG: {
        flex: 1,
        zIndex: -1,
    }
})

export default NoteInputModal;