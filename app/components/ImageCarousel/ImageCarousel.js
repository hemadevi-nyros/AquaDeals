import React, { Component } from 'react';
import { View, ScrollView, Image} from 'react-native';
import styles from './styles';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6


class Carousel extends Component {
  componentDidMount() {
    const numOfBackground = 4;
    let scrollValue = 0, scrolled = 0;
    setInterval(function () {
        scrolled++;
        if(scrolled < numOfBackground)
            scrollValue = scrollValue + width;
        else{
            scrollValue = 0;
            scrolled = 0
        }
        _scrollView.scrollTo({ x: scrollValue, animated: false })
    }, 3000);
  }
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
            ref={(scrollView) => { _scrollView = scrollView; }}
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

export default class ImageCarousel extends Component {
  render() {
    const images = [
      {
        source: {
          uri: 'https://www.aquadeals.in/admin/assets//images/ad_imgs/ad_imgs_web/20190329170309473175.png',
        },
      },
      {
        source: {
          uri: 'https://www.aquadeals.in/admin/assets//images/ad_imgs/ad_imgs_web/20190329172038793714.png',
        },
      },
      {
        source: {
          uri: 'https://www.aquadeals.in/admin/assets//images/ad_imgs/ad_imgs_web/20190329170824917607.png',
        },
      },
      {
        source: {
          uri: 'https://www.aquadeals.in/admin/assets//images/ad_imgs/ad_imgs_web/20190329164455192399.png',
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

