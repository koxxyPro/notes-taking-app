import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import colors from '../misc/colors'


const ButtonIcon = ({ antIconName, size, color, style, onPress }) => {

    return <AntDesign name={antIconName} size={size || 24} color={color || colors.LIGHT} style={[styles.icon, { ...style }]} onPress={onPress} />
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.DARKORANGE,
        padding: 15,
        marginTop: 15,
        borderRadius: 50,
        elevation: 5,
    }
})

export default ButtonIcon
