import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, SearchBar, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class Notification extends Component{
 static propTypes = {
   navigation: PropTypes.object,
 }
 handleBellPress = () =>{
   this.props.navigation.navigate('Notifications');
 };
render() {
return(
 <TouchableOpacity 
  onPress={this.handleBellPress}>
  <Image
   resizeMode="contain"
   source={require('./images/bell.png')}
   style ={styles.bell}
  />
 </TouchableOpacity>
);
}
};
export default withNavigation(Notification);
