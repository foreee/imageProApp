import {
    createStackNavigator,
  } from 'react-navigation';
  import ScanIdentify from './ScanIdentify';
  import StringDetection from './StringDetection';

  const AppStackNavigator = createStackNavigator({
    ScanIdentify: { screen: ScanIdentify },
    StringDetection: { screen: StringDetection },

  },{
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
        fontSize: 16,
        fontWeight: "normal",
      },
      headerBackTitleStyle: {
        color: 'transparent',
      },
      headerTintColor: 'black',
    },
  }
  );
  
  export default AppStackNavigator;