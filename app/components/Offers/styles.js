import EStyleSheet from 'react-native-extended-stylesheet';
import { Constants } from 'expo';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.4
export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
  smallimage:{
    height:50,
    width:50,
    position: "absolute",
  }
});