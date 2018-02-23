'use strict'

import { combineReducers } from 'redux';


import setUserInfo from './member.js'
import {setTempData} from './common.js'




const rootReducer = combineReducers({
	userInfo:setUserInfo,
	tempData:setTempData,
});

export default rootReducer
