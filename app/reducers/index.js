'use strict'

import { combineReducers } from 'redux';


import setUserInfo from './member.js'


const rootReducer = combineReducers({
	userInfo:setUserInfo,
});

export default rootReducer
