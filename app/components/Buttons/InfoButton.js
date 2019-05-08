import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import *as Information from './Info.json';

class InfoButton extends Component{
 constructor(props) {
  super(props);
  this.state = {
    data : Information,
  };
 }
 render() {
  const InfoList = this.state.data ? this.state.data.infos.map((data, index) =>{
  return(
   <View style={styles.view}>
    <TouchableOpacity>
      <Image resizeMode="contain" style={styles.image} source={{uri:data.image}}/>
    </TouchableOpacity>
    <Text style={{fontSize: 9}}>{data.name}</Text>
   </View>
  );
  })
  : 'getting';
  return(
   <View style={styles.element}>{InfoList}</View>     
  );
  };  
};
export default InfoButton;
