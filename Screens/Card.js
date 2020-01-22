import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
    return (
        <Text style={styles.body}>
            <Text style={styles.content}>
                {props.children}
            </Text>
        </Text>
    )

}

const styles = StyleSheet.create({
    body: {
        borderRadius: 6,
        backgroundColor: '#FFFACD',
        shadowRadius: 4,
        shadowColor: '#D3D3D3',
        shadowOffset: { width: 1, height: 1 },
        marginHorizontal: 4,
        marginVertical: 6,
        elevation: 5,
        shadowOpacity: .4,
        padding: 20
    },
    content: {
        marginHorizontal: 20,
        marginVertical: 20
    }
})