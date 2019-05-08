import React, { Component } from 'react';
import { View, ScrollView, Image} from 'react-native';
import styles from './styles';
import { Dimensions } from 'react-native';
import *as Resource from './Rupee.json';

const { width } = Dimensions.get('window');
const height = width * 0.4


class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map(image => (
              <Image style={styles.image} source={image.source} />
            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;    
  }
}

export default class Offer extends Component {
  render() {
    const images = [
      {
        source: {
          uri: 'https://www.aquadeals.in/admin/assets//images/web_imgs/road_0.png',
        },
      },
      {
        source: {
          uri: 'https://www.aquadeals.in/admin/assets//images/web_imgs/road_0.png',
        },
      },
      {
        source: {
          uri: 'https://www.aquadeals.in/admin/assets//images/web_imgs/road_0.png',
        },
      },
      {
        source: {
          uri: 'https://www.aquadeals.in/admin/assets//images/web_imgs/road_0.png',
        },
      },
      
    ];

    return (
      <View style={styles.container}>
        <Carousel images={images} />
      </View>
    );
  }
}