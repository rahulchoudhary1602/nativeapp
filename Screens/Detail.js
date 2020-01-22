import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card'
export default function Detail({ navigation }) {
    return (
        <View style={styles.container}>
            <Card>
                <Text style={styles.text1}>{navigation.getParam('title')}   </Text>
                {'\n'}
                <Text style={styles.text2}>{navigation.getParam('Content')} </Text>
                {'\n'}
                <Text style={styles.text2}> Rating : {navigation.getParam('Rating')} </Text>
            </Card>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'mediumorchid',
        padding: 20,

    },
    text1: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'coral'
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})