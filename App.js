import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import * as Font from 'expo-font';
import About from './Screens/About';
import Navigator from './Routes/Drawer'
import Card from './Screens/Card'
export default class App extends React.Component {
  state = {
    isLoaded: false,
  }
  componentDidMount() {
    Font.loadAsync({
      'Indie': require('./assets/IndieFlower-Regular.ttf'),
      'Oswald': require('./assets/Oswald-Bold.ttf')
    });
    this.setState({ isLoaded: true });
  }


  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isLoaded ? (
            <Navigator />
          ) : <About />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
});
