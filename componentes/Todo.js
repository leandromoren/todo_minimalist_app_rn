import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./CheckBox";

const Todo = ({
    id,
    title,
    isCompleted,
    isToday,
    hour
}) => {
    return (
        <View style={styles.container}>
            <Checkbox
                id={id}
                title={title}
                isCompleted={isCompleted}
                isToday={isToday}
                hour={hour}
            />
            <View>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.time}>{hour}</Text>
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