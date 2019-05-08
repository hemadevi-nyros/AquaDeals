import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, TextInput} from 'react-native';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import { Avatar, Badge, PricingCard, Input, Button} from 'react-native-elements';
import {getUsers} from '../actions';

class Signin extends Component{
  constructor(props){
    super(props)
    this.state={
      mobile:'',
      password:'',
      numberValidate: true,
      passwordValidate: true,
      loginUser: '',
      name: 'Hema',
      changename: 'Devi'
    }
  }
  validate(text,type){
    var numre =/^\d{10}$/;
    var passre =/^[0-9]+$/;
    if(type=="mobile")
    {
      if(numre.test(text))
      {
        this.setState({
         numberValidate: true
        })
      
      }
      else
      {
        this.setState({
         numberValidate: false
        })
      }
    }
    else if(type=="password")
    {
      if(passre.test(text))
      {
        this.setState({
         passwordValidate: true
        })
      
      }
      else
      {
        this.setState({
         passwordValidate: false
        })
      }
    }
  }
  changeName = (changename) => {
    this.setState({changename: 'Devi'})
  }
  componentDidMount(){
    this.props.dispatch(getUsers());
  }
  componentWillReceiveProps(nextProps){
    console.log("Next Props", nextProps)
    this.setState({loginUser: nextProps.user})
  }
  handlePress = () => {
   this.props.navigation.navigate('Home');
  }
	render() {
    const details = this.state.loginUser;
	   return(
      <View>
        <Text>Enter your mobile number </Text>
        <View style={styles.form_elements}>
         <Image resizeMode="contain" source={require('./images/india.png')} style={styles.icon} />
         <Text style={styles.text}>+91</Text>
         <TextInput 
          placeholder="Enter your mobile number" 
          keyboardType="numeric"
          style={styles.inputtext} 
          onChangeText={(text)=>this.validate(text,'mobile')}/>
        </View>
        { !this.state.numberValidate ? (
          <Text style={styles.errorMessage}>Please Enter valid mobile number</Text>
          ) : null  }
        <TextInput 
          placeholder="Password" 
          secureTextEntry={true}
          style={styles.inputpassword} 
          onChangeText={(text)=>this.validate(text,'password')}/>
          { !this.state.passwordValidate ? (
          <Text style={styles.errorMessage}>Please Enter password in numbers</Text>
          ) : null  }
       <Button
          title="Submit"
          type="outline"
          containerStyle={{marginTop:10, marginBottom: 10}}
          onPress={this.handlePress}
        />
        <Button title="Change name" onPress={this.changeName} />
        <Text>{this.state.name}</Text>
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
    marginRight: 10,
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
   },
   inputpassword:{
    marginTop:10,
    marginLeft:60,
   },
   errorMessage: {
   fontSize: 15,
   color:"red",
   marginLeft: 60
  },
  
});

const mapStateToProps = (state) => {
 return{
   user: state.apidata.user, 
 }
}

export default connect(mapStateToProps)(Signin);