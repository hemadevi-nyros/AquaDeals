import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, SearchBar, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class Cart extends Component{
 static propTypes = {
   navigation: PropTypes.object,
 }
 handleBellPress = () =>{
   this.props.navigation.navigate('Cart');
 };
 render() {
 return(
 <TouchableOpacity onPress={this.handleBellPress}>
   <Image
    resizeMode="contain"
    source={require('./images/cart.png')}
    style ={styles.cart}
   />
 </TouchableOpacity>
 );
 }
};
export default withNavigation(Cart);
