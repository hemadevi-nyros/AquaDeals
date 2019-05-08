import {
GET_DEALOFFERS, 
RECEIVE_DEALOFFERS, 
RECEIVE_BRANDSTORE, 
RECEIVE_PROMOS,
RECEIVE_USERS,
INCREMENT,
DECREMENT,
} from '../actions';

const initialState = {
  dealoffers: '',
  brandstore: '',
  offers: '',
  user:'',
  count: 0,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DEALOFFERS:
    return {
     ...state, 
     dealoffers: action.result
    };
    case RECEIVE_BRANDSTORE:
    return{
     ...state,
     brandstore: action.data
    }
    case RECEIVE_PROMOS:
    return{
     ...state,
     offers: action.promo_data
    }
    case RECEIVE_USERS:
    return{
      ...state,
      user: action.user_data
    }
    case INCREMENT:
    return{
      ...state,
      count: state.count+1
    }
    case DECREMENT:
    return{
      ...state,
      count: state.count-1
    }
    default:
      return state;
  }
};
