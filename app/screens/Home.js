import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet,Text, ScrollView,Button, Image,ImageBackground,TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';
import {ImageCarousel} from '../components/ImageCarousel';
import {InfoButton} from '../components/Buttons';
import {AddButton} from '../components/AdButton';
import {BrandButton} from '../components/BrandButton';
import {Offer} from '../components/Offers';
import {Header} from '../components/Header';
import {Organic} from '../components/OrganicInfo';
import {Promotion} from '../components/Promotion';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {getdealOffers, getbrandStore, getPromos, Increment, Decrement} from '../actions';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };
  static propTypes = {
   navigation: PropTypes.object,
  }
  constructor(props){
   super(props);
   this.state = {
     homedealOffers: '',
     homebrandStore: '',
     homePromos:'',
     status: true,
   }
 }
  componentDidMount() {
    this.props.dispatch(getdealOffers());
    this.props.dispatch(getbrandStore());
    this.props.dispatch(getPromos());
  }
  componentWillReceiveProps(nextProps){
   console.log("Next Props", nextProps)
   this.setState({homedealOffers: nextProps.dealoffers})
   this.setState({homebrandStore: nextProps.brandstore}) 
   this.setState({homePromos: nextProps.offers})
  }
  handlePress= (id) =>{
    if(this.state.status == true)
    {
      this.setState({status:false})
    }
    else
    {
      this.setState({status:true})
    }
  }
  render(){
  return(
   <ScrollView>
   <Container>
     <ImageCarousel />
     <View style= {styles.box}>
       <InfoButton />
     </View>
     <View style= {styles.addbox}>
        <Text style={styles.text}>AD STORES </Text>
        <AddButton 
         AddButtonData={this.state.homedealOffers.deal_offers}
         onPress = {this.handlePress} 
        />
     </View>
     { !this.state.status?
       <View style= {styles.storebox}>
        <Image
         resizeMode="contain"
         source={require('./images/Organic.png')}
         style ={styles.image}
        />
        <View style= {styles.organic}>
         <Organic />
        </View>
       </View>: null
      } 
     <View style= {styles.brandbox}>
       <Text style={styles.text}>BRAND STORES </Text>
        <BrandButton BrandButtonData={this.state.homebrandStore.deal_offers}/>
     </View>
        <View style= {styles.promobox}>
          <View style={styles.promo}>
            <Text style={styles.text}>PROMOTIONS</Text>
            <TouchableOpacity><Text style={styles.view}>VIEW ALL</Text></TouchableOpacity>
         </View>
         <Promotion PromotionData={this.state.homePromos.offers} />
         <View style={styles.truck}>
           <Image
             resizeMode="contain"
             source={require('./images/promotions_truck.png')}
             style={styles.truckimage}
            />
         </View>
         <Button onPress ={() => {this.props.dispatch(Increment());}} title='Incremet' />
         <Text style={{marginLeft: 60}}>{this.props.count}</Text>
         <Button onPress = {() => {this.props.dispatch(Decrement());}} title='Decrement' />
       </View>
   </Container>
   </ScrollView>
  );
 };
};

const styles = StyleSheet.create({
  box:{
   marginTop: 10,
   width: 370,
   height: 100,
   backgroundColor:"#FFFFFF",
  },
  addbox: {
   marginTop: 10,
   width: 370,
   height: 200,
   backgroundColor:"#FFFFFF",
  },
  storebox:{
   width: 370,
   height: 200,
   backgroundColor:"#FFFFFF",
  },
  text:{
   fontSize: 12,
   marginTop: 10,
   marginLeft: 10,
  },
  brandbox: {
   marginTop: 10,
   width: 370,
   height: 250,
   backgroundColor:"#FFFFFF",
  },
  store: {
   flexDirection: "row",
  },
  image:{
   height: 200,
   width: 400,
  },
  promobox:{
   marginTop: 10,
   width: 370,
   height:250,
   backgroundColor:"#FFFFFF",
  },
  promo:{
   flexDirection: 'row',
  },
  view: {
   marginTop: 10,
   marginLeft:200,
   color: "#FF7F50",
  },
  organic:{
   position: "absolute",
  },
  truck:{
   marginTop: 55,
   marginLeft: 80,
   position: 'absolute',
   alignItems: 'center',
   justifyContent: 'center',
  },
  truckimage:{
   height: 150,
   width: 150,
  },
  promotions:{
   position: 'absolute',
  },
});

const mapStateToProps = (state) => {
 return{
   dealoffers: state.apidata.dealoffers,
   brandstore: state.apidata.brandstore,
   offers: state.apidata.offers,
   count: state.apidata.count,
 }
}

export default connect(mapStateToProps)(Home);
