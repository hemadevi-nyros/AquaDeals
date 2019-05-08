import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Image, ImageBackground} from 'react-native';
import styles from './styles';

const Promotion = ({PromotionData}) => (

 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   {
      PromotionData && PromotionData.length > 0 ?
      PromotionData.map((data, index) => {
      return(
        <View style={styles.view}>
          <ImageBackground style={styles.backgroundimage} source={require('./images/road.png')}>
            <Image resizeMode="contain"  source={{uri:data.img}} style={styles.image} />
         </ImageBackground>  
       </View>
      )
      }) : null
    }
 </ScrollView>

);

Promotion.propTypes = {
 PromotionData: PropTypes.object,
};

export default Promotion;


