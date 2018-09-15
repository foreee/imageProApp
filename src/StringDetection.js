import React, {Component} from 'react';
import {Platform,Dimensions, StyleSheet, Text, View,Image,Button,NativeModules,TouchableOpacity,ScrollView,DeviceEventEmitter} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Canvas from 'react-native-canvas';
//import { OCRAD } from './ocrad';
import fs from 'react-native-fs';
//const ImagePicker = NativeModules.ImageCropPicker;
//import ScanView from 'react-native-scanidcard';
import RNTesseractOcr from 'react-native-tesseract-ocr';

const { height, width } = Dimensions.get('window');
export default class StringDetection extends React.Component {
    static navigationOptions = {
      title: '英文字符检测',
    };
    
    state={
      avatarSource: {},
      // torchMode: 'off',
      // cameraType: 'back'
    };
    
  
    scanCallBack(e) {
      console.info(e)
    }

    pickImage=async()=>{
      console.log('图像接口：',ImagePicker);
      let options = {
        title: '选择图片',
        
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri } ;
      
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            avatarSource: source
          });
        }

        let lang='LANG_ENGLISH';
        //'LANG_ENGLISH'| 'LANG_CHINESE_SIMPLIFIED';
        const tessOptions = {
          whitelist: null, 
          blacklist: '1234567890\'!"#$%&/()={}[]+*-_:;<>',
        };
        if(response.path){
        RNTesseractOcr.recognize(response.path, lang, tessOptions)
        .then((result) => {
          this.setState({ ocrResult: result });
          console.log("OCR Result: ", result);
        })
        .catch((err) => {
          console.log("OCR Error: ", err);
        })
        .done();
      }
      });
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <ScrollView style={styles.container}>
        
        <TouchableOpacity style={[styles.imgStyle]} onPress={this.pickImage}>
              <Ionicons name="md-add" size={36} color="#808080" />
        </TouchableOpacity>
        <Image source={this.state.avatarSource} style={styles.addViewStyle} />
        <Text style={[styles.addViewStyle,styles.titleText,{height:250}]}> {this.state.ocrResult} </Text>
        
        <Button
          title="中文字符检测"
          onPress={() =>
            navigate('StringDetection2', { name: 'StringDetection2' })
          }
        />
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10.7,
      backgroundColor: '#f9fafb',
    },
    wrapper: {
      marginBottom: 13,
    },
    wrapper2: {
      marginTop: 10,
    },
    textInput: {
      height: 50,
      paddingLeft: 12.3,
      fontSize: 12,
      textAlign: 'left',
      backgroundColor: 'white',
      borderRadius: 4,
      fontFamily: 'PingFangSC-Regular',
    },
    multitextInput: {
      height: 160,
      paddingLeft: 12.3,
      fontSize: 12,
      textAlign: 'left',
      backgroundColor: 'white',
      borderRadius: 4,
      fontFamily: 'PingFangSC-Regular',
      textAlignVertical: 'top',
    },
    titleText: {
      fontSize: 13,
      color: '#9095A2',
      fontFamily: 'PingFangSC-Regular',
    },
    imgViewWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
    },
    imgStyle: {
      width: width,
      height: 75,
      marginBottom: 10,
      marginRight: 5,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#DBDADA',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addViewStyle: {
      width: width,
      height: 175,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#DBDADA',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });