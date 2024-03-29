import { Button, Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../misc/colors'
import Intro from './Intro';
import ButtonIcon from '../components/ButtonIcon';

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
            {/* <Image source={require('')} /> */}
            {/* <View style={styles.buttonStyle}>
                <Button title='Get Started' color={colors.PRIMARY} onPress={handleOnPress} />
            </View> */}
            <Text style={styles.getStartedButton}>Get Started</Text>
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
        padding: 15,
        fontSize: 18,
        borderRadius: 5,
    }
    // buttonStyle: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'flex-end',
    //     marginBottom: 100,
    // }
})

export default Splash;