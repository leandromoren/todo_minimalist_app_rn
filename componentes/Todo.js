import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./CheckBox";

const Todo = ({
    id,
    title,
    isCompleted,
    isToday,
    dateCalendar
}) => {
    return (
        <View style={styles.container}>
            <Checkbox
                id={id}
                title={title}
                isCompleted={isCompleted}
                isToday={isToday}
                dateCalendar={dateCalendar}
            />
            <View>
                <Text style={ 
                    isCompleted 
                    ? [styles.text, {textDecorationLine: 'line-through', color: '#73737360'}] 
                    : styles.text 
                    }>{title}</Text>
                <Text style={
                    isCompleted
                    ? [styles.time, {textDecorationLine: 'line-through', color: '#73737360'}]
                    : styles.time
                    }>{dateCalendar}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },
    time: {
        fontSize: 13,
        fontWeight: '500',
        color: '#a3a3a3'
    }
})

export default Todo;