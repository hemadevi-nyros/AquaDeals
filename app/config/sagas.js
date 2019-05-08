import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';

import {
 GET_DEALOFFERS, 
 RECEIVE_DEALOFFERS, 
 GET_BRANDSTORE, 
 RECEIVE_BRANDSTORE, 
 GET_PROMOS, 
 RECEIVE_PROMOS,
 GET_USERS,
 RECEIVE_USERS,
} from '../actions';

export const getDealData = () => fetch(`https://www.aquadeals.in/admin/web2/user/getdealOffers`);
export const getBrandData = () => fetch(`https://www.aquadeals.in/admin/web2/user/brand_store`);
export const getOfferData = () => fetch(`https://www.aquadeals.in/admin/web2/user/getOffers`);
export const getUserData = () => fetch(`https://www.aquadeals.in/admin/web2/user/login`);

const fetchApiData = function* (action){
  try {
  	const response = yield call(getDealData);
    const result = yield response.json();
    yield put({ type: RECEIVE_DEALOFFERS, result });
  } catch (e) {
    console.log(e);
  }
};

const fetchBrandData = function* (action){
  try{
  	const response = yield call(getBrandData);
  	const data = yield response.json();
  	yield put({ type: RECEIVE_BRANDSTORE, data });
  } catch (e) {
  	console.log(e);
  }
};

const fetchOfferData= function* (action){
  try{
  	const response = yield call(getOfferData);
  	const promo_data = yield response.json();
  	yield put({ type: RECEIVE_PROMOS, promo_data });
  } catch (e) {
  	console.log(e);
  }
};

const fetchUserData = function* (action) {
  try{
    const response = yield call(getUserData);
    const user_data = yield response.json();
    yield put({ type: RECEIVE_USERS, user_data });
  } catch (e) {
    console.log(e);
  }
};

const rootSaga = function* () {
  yield takeEvery( GET_DEALOFFERS, fetchApiData);
  yield takeEvery( GET_BRANDSTORE, fetchBrandData);
  yield takeEvery( GET_PROMOS, fetchOfferData);
  yield takeEvery( GET_USERS, fetchUserData);
};

export default rootSaga;