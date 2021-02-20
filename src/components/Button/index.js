import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = (props, { onPress }) => {
    return (
        <TouchableOpacity style={style.btn} onPress={onPress}>
            <Text style={style.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const style = StyleSheet.create({
    text: {
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center'
    },
    btn: {
        top: 30,
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: '#337091',
        borderRadius: 25,
        backgroundColor: '#337091',
        justifyContent: 'center',
    }
})
