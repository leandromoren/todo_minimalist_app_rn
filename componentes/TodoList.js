import * as React from "react";
import { todosData } from "../data/todos";
import { FlatList, View, Text } from "react-native";

const TodoList = () => {
    return (
        <FlatList
            data={todosData}
            //Por cada item se renderiza un texto con el el texto del item
            renderItem={({item}) => (
                <View>
                    <Text>{item.title}</Text>
                </View>
            )}
            keyExtractor={item => item.id.toString()}
        /> 
    )
}

export default TodoList;