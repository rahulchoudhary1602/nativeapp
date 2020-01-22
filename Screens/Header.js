import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.Header}>
            <Entypo name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View >
                <Text style={styles.HeaderText}> {title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        flexDirection: "row",
        textAlign: 'center',
        justifyContent: "center"

    },
    HeaderText: {
        fontWeight: "bold",
        color: 'yellow',
        fontSize: 20,
        position: 'absolute',
        left: 30
    },
    icon: {
        position: 'relative',
        color: 'white',
        left: 12,
        backgroundColor: 'grey',
    }
})