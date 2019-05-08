import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Badge, PricingCard, Button, ButtonGroup, Tooltip} from 'react-native-elements';

class Buttons extends Component{
  constructor(props){
    super(props)
    this.state ={
     selectedIndex: 2
    }
    this.updateIndex=this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex){
    this.setState({selectedIndex})
  }
  render() {
  const buttons = ['Hello', 'World', 'Buttons']
  const {selectedIndex} = this.state
  return(
   <View>
     <Button
       title="Outline button"
       type="outline"
       containerStyle={{marginTop:10, marginBottom: 10}}
     />
     <Button
       title="Login"
       type="clear"
       containerStyle={{marginTop:10, marginBottom: 10}}
       onPress={() => {
       this.props.navigation.navigate('Login');}}
      />
      <Button
        icon={
        <Icon
         name="arrow-right"
         size={15}
         color="white"
         />
         }
         title="Button with icon component"
         containerStyle={{marginTop:10, marginBottom: 10}}
       />
       <Button
         icon={{
           name: "arrow-right",
           size: 15,
          color: "white"
         }}
         title="Button with icon object"
         containerStyle={{marginTop:10, marginBottom: 10}}
       /> 
       <Button
         icon={
         <Icon
           name="arrow-right"
           size={15}
           color="white"
          />
          }
          iconRight
          title="Button with right icon"
          containerStyle={{marginTop:10, marginBottom: 10}}
        />
        <Button
          title="Loading button"
          loading
          containerStyle={{marginTop:10, marginBottom: 10}}
        />
        <ButtonGroup
         onPress={this.updateIndex}
         selectedIndex ={this.selectedIndex}
         buttons={buttons}
         containerStyle={{height:50, marginTop:10, marginBottom:10}}
        />
        <Tooltip popover = {<Text>Info here </Text>}
         containerStyle={{marginTop:40, marginLeft: 50}}
         height={50}
        >
         <Text style={{marginLeft:50}}>Press me </Text>
        </Tooltip>
      </View>
	  );
	};
};
export default withNavigation(Buttons);
