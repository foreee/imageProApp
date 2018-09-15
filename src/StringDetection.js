import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,NativeModules,TouchableOpacity,ScrollView} from 'react-native';
//import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

//const ImagePicker = NativeModules.ImageCropPicker;
export default class StringDetection extends React.Component {
    static navigationOptions = {
      title: '字符检测',
    };

    pickImage=async()=>{
      console.log('图像接口：',ImagePicker);
      // const params = {
      //   multiple: true,
      //   waitAnimationEnd: false,
      //   compressImageQuality: 0.5,
      //   includeExif: true,
      // };
      // let images = null;
      // try {
      //   images = await ImagePicker.openPicker(params);
      //   console.log(images);
      // }catch(e){
      //   console.log('error:',e);
      // }  
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <ScrollView style={styles.container}>
        <Button
          title="ScanIdentify"
          onPress={() =>
            this.pickImage()
          }
        />
        <TouchableOpacity style={[styles.imgStyle, styles.addViewStyle]} onPress={this.pickImage}>
              <Ionicons name="md-add-circle-outline" size={36} color="#808080" />
        </TouchableOpacity>
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
      width: 75,
      height: 75,
      marginBottom: 10,
      marginRight: 5,
    },
    addViewStyle: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#DBDADA',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });