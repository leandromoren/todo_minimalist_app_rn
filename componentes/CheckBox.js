import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'

const Checkbox = ({
    id,
    title,
    isCompleted,
    isToday,
    dateCalendar
}) => {
    return isToday ?(
        <TouchableOpacity style={isCompleted ? styles.checked : styles.unChecked}>
          {isCompleted && <Entypo name="check" size={16} color="#FAFAFA" />}
        </TouchableOpacity>

    ) : (
        <View style={styles.isToday}/>
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
    },
    isToday: {
        width: 10,
        height: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#262626',
        marginRight: 13,
        marginLeft: 15
    }
})

export default Checkbox;