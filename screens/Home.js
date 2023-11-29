import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import TodoList from '../componentes/TodoList';
import { todosData } from '../data/todos';

const Home = () => {
    const [localData, setLocalData] = React.useState(
        todosData.sort((a, b) => {
            //Pone los TODOS completados al final de la lista
            return a.isCompleted - b.isCompleted;
        })
    );
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.pic}
            />
            <Text style={styles.title}>Hoy</Text>
            <TodoList todosData={todosData.filter((todo) => todo.isToday)} />

            <Text style={styles.title}>Mañana</Text>
            <TodoList todosData={todosData.filter((todo) => !todo.isToday)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignSelf: 'flex-end'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10
    }
})

export default Home;