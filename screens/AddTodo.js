import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Switch } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddTodo = () => {
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [isToday, setIsToday] = React.useState(false);
    const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);

    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handleConfirm = () => {
        hideDatePicker();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agregar tarea</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Nombre</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Tarea'
                    placeholderTextColor='#00000030'
                    onChangeText={(text) => { setName(text) }}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Fecha</Text>
                <TouchableOpacity onPress={showDatePicker}>
                    <Text style={styles.textInputDate}>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    value={date}
                    mode="date"
                    isVisible={isDatePickerVisible}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    style={{ width: '100%' }}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Hoy</Text>
                <Switch
                    value={isToday}
                    onValueChange={(value) => { setIsToday(value) }}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white' }}>Listo</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' , color: '#00000060'}}>Si desactivas la opcion de 'Hoy', la tarea sera considerada como proxima.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24
    },
    textInputDate: {
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        width: '100%',
        height: 20
    },
    textInput: {
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        width: '70%',
        height: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    button: {
        marginTop: 30,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        height: 46,
        borderRadius: 11
    }
})

export default AddTodo;