//ユーザーエージェント判別
var uaFlag = 0,
uaCheck;

/*----------------------------------------
	ユーザーエージェント判別
----------------------------------------*/
//uaFlag：1→スマホ・2→IE・3→その他PC
if ((navigator.userAgent.indexOf('iPhone') > 0) || (navigator.userAgent.indexOf('iPod') > 0) || (navigator.userAgent.indexOf('iPad') > 0) || (navigator.userAgent.indexOf('Android') > 0) || (navigator.userAgent.indexOf('blackberry') > 0) || (navigator.userAgent.indexOf('kindle') > 0)) {
	uaFlag = 1;
}else{
	uaCheck = window.navigator.userAgent.toLowerCase();
	if ((uaCheck.indexOf("msie") != -1)||(uaCheck.indexOf("trident") != -1)){
		uaFlag = 2;
	}else{
		uaFlag = 3;
	}
}