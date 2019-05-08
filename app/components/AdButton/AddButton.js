import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import *as Stores from './Stores.json';
import {connect} from 'react-redux';

const AddButton = ({AddButtonData, onPress}) => (
 <View>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     {
       AddButtonData && AddButtonData.length > 0 ?
       AddButtonData.map((data, index) => {
       return(
       <View style={{alignItems: 'center', marginLeft:15, marginRight: 15, marginTop:5}}>
         <TouchableOpacity onPress={onPress}>
           <Image resizeMode="contain"  source={{uri:"https://aqua.deals/admin/assets/images/"+data.img}} style={styles.image} />
         </TouchableOpacity>
         <Text style={{fontSize: 10, paddingTop: 5, color: "#686868"}}>{data.type}</Text>
       </View>
      )
      }) : null
    }
   </ScrollView>
 </View>
);
AddButton.propTypes = {
 AddButtonData: PropTypes.object,
 onPress: PropTypes.func
};
export default AddButton;

