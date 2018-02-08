'use strict'


var initialState = false;

function setUserInfo(state=initialState,action){
	switch(action.type){
		case 'SET_USER_INFO' : return action.data;break;
		default : break;
	}
	return state;
}


export default setUserInfo
