import * as React from "react";
import { Text,Button, View, TouchableOpacity, StyleSheet, TextInput, Switch } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
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

    const handleConfirm = (date) => {
        hideDatePicker();
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Agregar tarea</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Nombre</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Tarea'
                    placeholderTextColor='#00000030'
                    onChangeText={(text) => {setName(text)}}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Hora</Text>
                <TouchableOpacity onPress={showDatePicker}>
                    <Text style={styles.textInput}>{date.toLocaleTimeString()}</Text>
                </TouchableOpacity>
                <DateTimePickerModal 
                    value={date}
                    is24Hour={true}
                    isVisible={isDatePickerVisible}
                    mode='time'
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    style={{width: '80%'}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 30
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
        lineHeight: 24,
    },
    textInput: {
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        width: '70%',
        height: 20
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30,
    }
})

export default AddTodo;