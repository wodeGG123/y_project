let API = {
	DOMAIN : 'http://www.lms.19apps.com/',
	REGIST : 'api/member/reg',
	LOGIN : 'api/member/login',
	LOGIN_OUT : 'api/member/logout',
	COURSE_LIST : 'api/goods/course',
	COURSE_INFO : 'api/course-info',
	CONTENT_LIST : 'api/content/list',
    COURSE_PLAY : 'api/course/play',
    EDIT_USERINFO: 'api/member/update',
	RESET_PWD:'api/member/reset-pwd',
	BANNER:'api/advertisement/get',
	COURSE_CATEGORY:'api/course-config/list',
	ADD_SHOPPINGCART:'api/cart/cartin?accesstoken=',
	SHOPPINGCART:'api/cart/cart',
	ORDER_SUBMIT:'api/order/submit',
	ORDER_LIST:'api/order/list',
	QA_Q_ADD:'api/question/create',
	QA_Q_LIST:'api/question/list',
	QA_A_ADD:'api/answer/create',
	QA_A_LIST:'api/answer/list',
}



export default API