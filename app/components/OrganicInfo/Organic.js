import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import *as Resource from './Resources.json';

class Organic extends Component{
   constructor(props) {
     super(props);
        this.state = {
          store : Resource,
        };
    }
   render() {
     const ResourceList = this.state.store ? this.state.store.resources.map((store, index) =>{
     return(
       <View style={styles.view}>
          <Image resizeMode="contain" style={styles.image} source={{uri:"http://10.90.90.61/aqua/"+store.image}}/>
         <Text style={{fontSize: 11}}>{store.name}</Text>
         <Text style={{fontSize: 9}}>{store.description}</Text>
        <Text style={{fontSize: 9 , color: "#008000"}}>MRP  {store.price}</Text>
        </View>
      );
     })
     : 'getting';
     return(
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         <View style={styles.element}>{ResourceList}</View>
        </ScrollView>
      );
   };
};
    
   
export default Organic;


