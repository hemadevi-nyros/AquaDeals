import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import {View, Text, Image, StyleSheet,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {Rating, PricingCard, Input} from 'react-native-elements';
import Form from './Form';

class Cart extends Component{
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
 backgroundimage: {
 width:360,
 height:400,
 },
 text: {
 fontSize: 13,
 marginBottom: 5,
 marginLeft: 10,
 },
 form_elements:{
 flexDirection: 'row',
 }
});
export default withNavigation(Cart);
