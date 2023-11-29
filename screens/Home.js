import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import TodoList from '../componentes/TodoList';
import { todosData } from '../data/todos';

const Home = () => {
    const [isHidden, setIsHidden] = React.useState(false);
    const [localData, setLocalData] = React.useState(
        todosData.sort((a, b) => {
            //Pone los TODOS completados al final de la lista
            return a.isCompleted - b.isCompleted;
        }
        )
    );
    const handleHidePress = () => {
        if (isHidden) {
            setIsHidden(false);
            setLocalData(todosData.sort((a, b) => { return a.isCompleted - b.isCompleted; }));
            return;
        }

        setIsHidden(!isHidden)
        setLocalData(localData.filter((todo) => !todo.isCompleted));
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.pic}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.title}>Hoy</Text>
                <TouchableOpacity onPress={handleHidePress}>
                    <Text style={{ color: '#3478f6' }}>{isHidden ? "Ver completados" : "Ocultar completados"}</Text>
                </TouchableOpacity>
            </View>
            <TodoList todosData={localData.filter((todo) => todo.isToday)} />

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