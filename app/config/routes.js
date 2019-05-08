import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Cart from '../screens/Cart';
import Buttons from '../screens/Buttons';
import Signin from '../screens/Signin';


const HomeStack =  createStackNavigator({
  Home:{
   screen: Home, 
  },
  Notifications:{
  	screen: Notifications,
  	navigationOptions:{
     header: () => null,
    },
  },
  Cart: {
    screen: Cart,
    navigationOptions:{
     header: () => null,
    }, 
  },
  Buttons: {
    screen: Buttons,
    navigationOptions:{
     headerTitle: 'Buttons',
    }, 
  },
  Signin: {
    screen: Signin
  }
});

export default createStackNavigator({
  Home: {
    screen: HomeStack, 
    navigationOptions:{
     header: () => null,
    }, 
  },
 }
);
