/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button,Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator } from 'react-navigation';
import ScanIdentify from './src/ScanIdentify';
import StringDetection from './src/StringDetection';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    
    'Shake or press menu button for dev menu',
});

type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const RootStack = createStackNavigator(
  {
    ScanIdentify: ScanIdentify,
    StringDetection: StringDetection,
  },
  {
    initialRouteName: 'ScanIdentify',
    navigationOptions: {
      headerRight: <View />,
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#BBBBBB',
      },
      headerTitleStyle: {
        color: 'black',
        textAlign: 'center',
        flex: 1,
        
        fontWeight: "normal",
      },
      headerBackTitleStyle: {
        color: 'transparent',
      },
      headerTintColor: 'black',
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}