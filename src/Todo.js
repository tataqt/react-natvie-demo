import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove }) => {
    const [complete, setComplete] = useState(false);
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setComplete(!complete)}
            onLongPress={() => { onRemove(todo.id) }}
        >
            <View style={[styles.todo, complete && { backgroundColor: '#00ff00' }]}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})