import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const Todo = ({
    id,
    title,
    isCompleted,
    isToday,
    hour
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    text: {
        fontSize:15,
        fontWeight: '500',
        color:'#737373'
    }
})

export default Todo;