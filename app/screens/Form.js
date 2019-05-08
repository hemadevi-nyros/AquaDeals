import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground,TextInput} from 'react-native';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Avatar, Badge, PricingCard,Button, Input} from 'react-native-elements';


class Form extends Component{
	render() {
	  return(
     <View style={styles.form_elements}>
       <Image resizeMode="contain" source={require('./images/india.png')} style={styles.icon} />
       <Text style={styles.text}>+91</Text>
       <TextInput placeholder="Enter your mobile number" onChangeText={() => {
            this.props.navigation.navigate('Signin');}} style={styles.inputtext} />
     </View>
	  );

	};
};

const styles = StyleSheet.create({
   
   icon: {
    width:30,
    height: 30,
    marginLeft: 20,
    marginTop: 20,
   },
   text: {
    marginTop: 20,
   },
   form_elements:{
    flexDirection: 'row',
   },
   inputtext:{
    marginLeft: 5,
    marginTop:3,
   }
});


export default withNavigation(Form);