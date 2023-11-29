import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'

const Checkbox = ({
    id,
    title,
    isCompleted,
    isToday,
    hour
}) => {
    return(
        <TouchableOpacity style={isCompleted ? styles.checked : styles.unChecked}>
          {isCompleted && <Entypo name="check" size={16} color="#FAFAFA" />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 5,
        elevation: 5
    },
    unChecked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
        borderColor: '#E8E8E8',
        backgroundColor: '#fff',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 5,
        elevation: 5
    }
})

export default Checkbox;