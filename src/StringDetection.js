import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';


export default class StringDetection extends React.Component {
    static navigationOptions = {
      title: 'StringDetection',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="ScanIdentify"
          onPress={() =>
            navigate('ScanIdentify', { name: 'ScanIdentify' })
          }
        />
      );
    }
  }