import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.4

export default EStyleSheet.create({

  backgroundimage: {
    width,
    height,
  },
  image:{
  	marginTop:57,
    width: 50,
    marginLeft: 120,
    height: 50,
  },
});