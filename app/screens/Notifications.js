import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import Form from './Form';
import { Avatar, Badge, PricingCard,Button, Input} from 'react-native-elements';

class Notifications extends Component{
render() {
return(
 <View>
	 <ImageBackground resizeMode="contain" source={{uri:'https://www.aquadeals.in/admin/assets//images/web_imgs/login_bg.png'}} style={styles.backgroundimage}>
	   <TouchableOpacity onPress={() => {
       this.props.navigation.navigate('Home');}}>
	  	 <Image
        resizeMode="contain"
        source={require('./images/home.png')}
        style = {styles.home}
       />
     </TouchableOpacity>
    </ImageBackground>
    <Text style={styles.text}>SIGN IN OR REGISTER</Text>
    <Form />
 </View> 
);
};
};

const styles = StyleSheet.create({
 background:{
  height: 400,
  width: 360,
  backgroundColor:"#FF7F50",
 },
 cart:{
  marginTop:50,
  marginLeft:100,
  alignItems:"center", 
  justifyContent:"center",
  width: 150,
  height: 150,
 },
 home:{
  marginLeft: 310,
  marginTop: 50,
  marginRight: 0,
  width:30,
  height: 30,
 },
 avatar: {
  marginLeft: 10,
 },
 element:{
  alignItems: 'center',
  justifyContent: 'center',
  marginTop:50,
  marginBottom: 50,
 },
 backgroundimage: {
  width:360,
  height:400,
 },
 text: {
  fontSize: 13,
  marginBottom: 5,
  marginLeft:20,
 },
 icon: {
  width:30,
  height: 30,
  marginLeft: 20,
 },
 form_elements:{
  flexDirection: 'row',
 },
});
export default withNavigation(Notifications);
