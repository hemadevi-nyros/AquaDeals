export const GET_DEALOFFERS = 'GET_DEALOFFERS';
export const RECEIVE_DEALOFFERS = 'RECEIVE_DEALOFFERS';
export const GET_BRANDSTORE ='GET_BRANDSTORE';
export const RECEIVE_BRANDSTORE = 'RECEIVE_BRANDSTORE';
export const GET_PROMOS =  'GET_PROMOS';
export const RECEIVE_PROMOS = 'RECEIVE_PROMOS';
export const GET_USERS = 'GET_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const getdealOffers = () =>  ({
    type: 'GET_DEALOFFERS',
});
export const receivedealOffers = data =>  ({
    type: 'RECEIVE_DEALOFFERS',
    data
});
export const getbrandStore = () => ({
	type: 'GET_BRANDSTORE',
});
export const receivebrandStore = data => ({
    type:'RECEIVE_BRANDSTORE',
    data
});
export const getPromos= () => ({
	type: 'GET_PROMOS',
});
export const receivePromos = data => ({
    type:'RECEIVE_PROMOS',
    data
});
export const getUsers= () => ({
	type: 'GET_USERS',
});
export const receiveUsers = data => ({
    type:'RECEIVE_USERS',
    data
});
export const Increment = () => ({
    type: 'INCREMENT'
});
export const Decrement = () => ({
    type: 'DECREMENT'
});

