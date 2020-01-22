import { createStackNavigator } from 'react-navigation-stack';
import About from '../Screens/About'
import Header from '../Screens/Header'
import React from 'react'
const screens = {
    Home: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='MENSXP' navigation={navigation} />
            }
        },
    },
};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'yellow',
        headerStyle: { backgroundColor: 'black', height: 60 }
    }
})

export default AboutStack;