import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import TodoList from '../componentes/TodoList';
import { todosData } from '../data/todos';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hideCompletedReducer, setTodosReducer } from '../redux/todosSlice';

const Home = () => {
    const [isHidden, setIsHidden] = React.useState(false);

    const dispatch = useDispatch();
    
    const todos = useSelector((state) => state.todos.todos);

    const navigation = useNavigation();

    React.useEffect(() => {
        const getTodos = async () => {
            try {
                const todos = AsyncStorage.getItem('@Todos');
                if (todos !== null) {
                    dispatch(setTodosReducer(JSON.parse(todos)));
                }
            } catch (error) {
                console.log(error);
            }
        }
    })

    //Oculta o Muestra los TODOS completados
    const handleHidePress = () => {
        // if (isHidden) {
        //     setIsHidden(false);
        //     setLocalData(todos.sort((a, b) => { return a.isCompleted - b.isCompleted; }));
        //     return;
        // }
        // setIsHidden(!isHidden)
        // setLocalData(localData.filter((todo) => !todo.isCompleted));
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
            <TodoList todosData={todos.filter((todo) => todo.isToday)} />
            <Text style={styles.title}>Proximo</Text>
            <TodoList todosData={todos.filter((todo) => !todo.isToday)} />
            <TouchableOpacity onPress={ () => navigation.navigate('Agregar tarea') } style={styles.button}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
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
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 50,
        right: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .5,
        shadowRadius: 5,
        elevation: 5
    },
    plus: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: -8,
        left: 10
    }
})

export default Home;