import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from './Card'
import { MaterialIcons } from '@expo/vector-icons';
import Addform from './Addform'
export default function Home({ navigation }) {
    const [review, setreview] = useState([
        { title: 'Chapaak', Rating: '4.2', Content: 'Movie on acid attack Surviver', key: '1' },
        { title: 'Tanaji', Rating: '4.4', Content: 'Movie on Folk Warrior', key: '2' },
        { title: 'Good News', Rating: '4', Content: 'Comedd', key: '3' },
        { title: 'Housefull 4', Rating: '2', Content: 'Dont know what the fuck was that ', key: '4' },

    ])
    const [FORM, SETFORM] = useState(false)
    const Addmovie = (movie) => {
        movie.key = Math.random().toString(),
            setreview((prev) => {
                return [movie, ...prev]
            });
        SETFORM(false)
    }
    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal visible={FORM} animationType='fade'>
                    <View >
                        <MaterialIcons name='close' size={30} onPress={() => SETFORM(false)} style={{ ...styles.iconstyle, color: 'red', marginBottom: 20 }} />
                        <Text style={styles.text}>Add a REVIEW</Text>
                        <Addform Addmovie={Addmovie} />
                    </View>

                </Modal>
            </TouchableWithoutFeedback>
            <MaterialIcons name='add' size={30} onPress={() => SETFORM(true)} style={styles.iconstyle} />
            <FlatList
                data={review}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { navigation.navigate('ReviewDetails', item) }} >
                        <Card><Text style={styles.text}>{item.title}</Text></Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'ivory',
        padding: 20,

    },
    text: {
        color: 'mediumorchid',
        fontSize: 20
    },
    iconstyle: {
        marginTop: 10,
        color: 'yellow',
        padding: 20,
        alignSelf: 'center',
        borderRadius: 2,
        backgroundColor: 'black'
    }
})