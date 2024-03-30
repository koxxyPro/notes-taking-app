import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ containerStyle }) => {

    return (
        <View style={[styles.container, { ...containerStyle }]}>
            <TextInput style={styles.seachBar} placeholder='Search here' />
        </View>
    )
}

const styles = StyleSheet.create({
    seachBar: {
        borderWidth: 0.5,
        fontSize: 17,
        borderRadius: 40,
        height: 40,
        paddingLeft: 10,
        borderColor: colors.PRIMARY
    }, container: {}
});

export default SearchBar