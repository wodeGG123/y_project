'use strict'

import { combineReducers } from 'redux';

var initialState = 0;
function reducer(state=initialState,action){
	switch(action.type){
		case 'TEST' : return ({
			test:'1'
		});break;
		default : break;
	}
	return state;
}

const rootReducer = combineReducers({
	reducer,
});

export default rootReducer
