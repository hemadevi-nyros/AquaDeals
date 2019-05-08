import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, SearchBar, TouchableOpacity, Image } from 'react-native';
import Notification from './Notification';
import Cart from './Cart';
import Menu from './Menu';
import styles from './styles';

class Header extends Component{
   constructor(props) {
   super(props);
   this.state = {
     text: '',
    };
   };
 render() {
 return(
 <View style={styles.view}>
  <View style={styles.menu}>
   <Menu />
  </View>
  <View style={styles.header}>
   <TextInput
   placeholder="Search for brands and products"
   {...this.props}
   editable = {true}
   style={styles.input}
   />
 </View>
  <View>
    <Image
     resizeMode="contain"
     source={require('./images/search.png')}
     style ={styles.icon}
    /> 
  </View>
  <View>
    <Notification />
  </View>
  <View>
    <Cart />
  </View>      
</View>
);
};
};
export default Header;
