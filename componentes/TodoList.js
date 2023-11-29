import * as React from "react";
import { todosData } from "../data/todos";
import { FlatList } from "react-native";
import Todo from "./Todo";

const TodoList = () => {
    return (
        <FlatList
            data={todosData}
            //Por cada item se renderiza un texto con el el texto del item
            renderItem={({item}) => (
                //Spread operator para recibir todos los parametros
                <Todo
                   {...item}
                />
            )}
            keyExtractor={item => item.id.toString()}
        /> 
    )
}

export default TodoList;