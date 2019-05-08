import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './styles';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.box}>
          <Image
           resizeMode="contain"
           source={require('./images/logo.png')}
           style={styles.image}
          />
         <Text style={styles.text}>Welcome</Text>
       </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/money.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>My Aquacash</Text>
       </View>
        <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/order.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>My Orders</Text>
       </View>
        <View style={styles.content}>
          <Image
           resizeMode="contain"
           source={require('./images/cart.png')}
           style={styles.icon}
          />
           <Text style={styles.list}>My Cart</Text>
        </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/save.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>Wish List</Text>
       </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/profile.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>My Profile</Text>
       </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/bell.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>Notifications</Text>
       </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/offer.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>Offers Zone</Text>
       </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/share.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>Share & Earn</Text>
       </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/customercare.svg')}
           style={styles.icon}
          />
         <Text style={styles.list}>Customer Care</Text>
       </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/blog.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>Blog</Text>
       </View>
       <View style={styles.content}>
         <Image
           resizeMode="contain"
           source={require('./images/login.png')}
           style={styles.icon}
          />
         <Text style={styles.list}>Login/Sign Up</Text>
       </View>
     </ScrollView>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
