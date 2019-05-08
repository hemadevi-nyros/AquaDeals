import React, {Component} from 'react';
import PropTypes from 'prop-types';
import IOSIcon from "react-native-vector-icons/Ionicons";
import {View, Text, TextInput, SearchBar, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class Menu extends Component{
render() {
return(
<TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
  <IOSIcon name="ios-menu" size={30} />
</TouchableOpacity>
);
}
};
export default withNavigation(Menu);
