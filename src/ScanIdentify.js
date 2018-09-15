
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';


export default class ScanIdentify extends React.Component {
    static navigationOptions = {
      title: '身份证识别',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="StringDetection"
          onPress={() =>
            navigate('StringDetection', { name: 'StringDetection' })
          }
        />
      );
    }
  }