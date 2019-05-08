import React from 'react';
import { Dimensions } from 'react-native';
import Navigator from './config/routes';
import { createDrawerNavigator } from 'react-navigation';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import SideMenu from './Menu/SideMenu';
import store from './config/store';


const Drawernav = createDrawerNavigator({
  Item1: {
      screen: Navigator,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 100,  
});


EStyleSheet.build({
  $lightGray: '#DCDCDC',
});



export default () => <Provider store={store}><Drawernav /></Provider>;
