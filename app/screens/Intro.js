import { StyleSheet, Text, View, Button, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import colors from '../misc/colors';
import ButtonIcon from '../components/ButtonIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Intro() {

    const [name, setName] = useState('');

    const handleOnChangeText = name => setName(name);

    const handleNameSubmitted = async () => {
        const user = { capturedName: name };
        await AsyncStorage.setItem('user', JSON.stringify(name));
        // console.log(user)
    }

    // console.log(name)

    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Provide your name to continue</Text>
            <TextInput value={name} onChangeText={handleOnChangeText} placeholder="Enter your name here" style={styles.textinput} />
            {name.trim().length >= 3 ? <ButtonIcon antIconName='arrowright' onPress={handleNameSubmitted} /> : null}
        </View>
    )
};

const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color: colors.GREY,
        width,
        height: 40,
        borderRadius: 6,
        paddingLeft: 6,
        fontSize: 16,
    },
    inputTitle: {
        marginBottom: 5,
        fontSize: 16,
        alignSelf: "flex-start",
        paddingLeft: 25,
        opacity: 0.5,
    }
});

export default Intro;

