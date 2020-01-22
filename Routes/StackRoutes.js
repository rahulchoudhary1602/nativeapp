import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/Home'
import Detail from '../Screens/Detail'
import Header from '../Screens/Header'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='GameZone' navigation={navigation} title='MENSXP' />
            }
        }
    },
    ReviewDetails: {
        screen: Detail,
        navigationOptions: {
            headerTitle: () => <Header />
        }
    },
};

// home stack navigator screens
const StackRoutes = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'yellow',
        headerStyle: { backgroundColor: 'black', height: 60 }
    }
});

export default StackRoutes;