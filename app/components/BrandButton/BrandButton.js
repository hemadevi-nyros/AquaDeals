import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const BrandButton = ({BrandButtonData}) => (
 <View>
 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   {
      BrandButtonData && BrandButtonData.length > 0 ?
      BrandButtonData.map((data, index) => {
      return(
        <View style={styles.element}>
         <Image resizeMode="contain"  source={{uri:"https://aqua.deals/admin/assets/images/"+data.img}} style={styles.image} />
       </View>
      )
      }) : null
    }
 </ScrollView>
 </View>
);

BrandButton.propTypes = {
 BrandButtonData: PropTypes.object,
};

export default BrandButton;
