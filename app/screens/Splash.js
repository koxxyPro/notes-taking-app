import { Button, Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../misc/colors'
import Intro from './Intro';
import ButtonIcon from '../components/ButtonIcon';
const loginImage = require("../screens/afro-500x500.jpg")

function Splash() {

    const handleOnPress = () => {
        return (
            <View>
                <Intro />
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 30, color: '#555' }}>NOTES TAKING APP</Text>
            <Image source={loginImage} style={{ width: 200, height: 200 }} />
            <Pressable onPress={() => console.log("button pressed")}>
                <Text style={styles.getStartedButton}>Get Started</Text>
            </Pressable>
        </View>
    );
}

const buttonWidth = Dimensions.get('window').width - 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    getStartedButton: {
        backgroundColor: colors.PRIMARY,
        color: colors.LIGHT,
        padding: 10,
        fontSize: 18,
        borderRadius: 5,
        marginTop: 20,
        elevation: 5,
    }
})

export default Splash;