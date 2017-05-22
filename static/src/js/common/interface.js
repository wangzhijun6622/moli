/**
*@description:接口
**/
define('common/interface',[],function(){
	return {
		/**
		*接口连接配置
		**/
		getApiUrl : function (){
			var confUrlPath = ued_conf.interPath;
			return	{
				 
				/*登录*/
				_toLoginUrl :confUrlPath +'/toLogin'
				,_getValCodeUrl: confUrlPath +'/getValCode'//获取验证码
				,_tologoutUrl:confUrlPath + '/logout'
				,loginsendUrl:confUrlPath+'login' //登录提交


			};	

		}
	};

});