'use strict'


var initialState = false;

function setTempData(state=initialState,action){
	switch(action.type){
		case 'SET_TEMP_DATA' : return action.data;break;
		default : break;
	}
	return state;
}


export {setTempData}
