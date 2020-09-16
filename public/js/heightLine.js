// JavaScript Document

$(function(){
	/*----------------------------------------
		var設定
	----------------------------------------*/
	//共通
	var i,
	heightLineNameArray = [],
	heightLineHeightArray = [],
	heightLineName,
	heightLineHeight,
	heightLineCheck,
	heightLineTimer;

	var heightLineFunc = function(){
		//級数縮小にも対応したい場合は以下を有効にする
		if(heightLine >= 1){
			heightLineNameArray = [];
			heightLineHeightArray = [];
		}
		$('[class^=heightLine-]').each(function () {
			heightLineName = $(this).attr('class');
			heightLineHeight = $(this).children().outerHeight(true);
			heightLineCheck = $.inArray(heightLineName, heightLineNameArray);
			if(heightLineCheck < 0){
				heightLineNameArray.push(heightLineName);
				heightLineHeightArray.push(heightLineHeight);
			}else{
				if(heightLineHeightArray[heightLineCheck] < heightLineHeight){
					heightLineHeightArray.splice(heightLineCheck, 1, heightLineHeight);
				}
			}
        });
		$.each(heightLineNameArray, function(i) {
   			heightLineName = '.' + this;
			heightLineHeight = heightLineHeightArray[i] + 'px';
			$(heightLineName).css('height',heightLineHeight);
		});
	}


	/*----------------------------------------
		処理の実行
	----------------------------------------*/
	heightLineFunc();
	heightLineTimer = setInterval(heightLineFunc,1000);

});

