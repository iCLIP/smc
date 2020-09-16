// JavaScript Document

$(function(){
	/*----------------------------------------
		var設定
	----------------------------------------*/
	//共通
	var i,
	yearName,
	preloadArray = ['/img/news/over_bg_pcc.gif','/img/news/bg_pcc_on.gif','/img/news/over_bg_ict.gif','/img/news/bg_ict_on.gif','/img/news/over_bg_valkee.gif','/img/news/bg_valkee_on.gif','/img/news/over_bg_media.gif','/img/news/bg_media_on.gif','/img/news/over_bg_other.gif','/img/news/bg_other_on.gif'];
	
	//一覧のアコーディオン処理
	var newsFunc = function(){
		$('.newsListInner').each(function (i) {
			if(i > 0){
				$(this).hide();
			}
        });
		
		$('.newsOpenBtn').click(function () {
			$(this).toggleClass('noObj');
			yearName = $(this).parent().parent().attr('id');
			yearName = '#newsList' + yearName.replace('newsYear','');
			$(yearName).slideToggle();
		});
		
		$('.newsCloseBtn').click(function () {
			$(this).parent().find($('.newsOpenBtn')).toggleClass('noObj');
			yearName = $(this).parent().parent().attr('id');
			yearName = '#newsList' + yearName.replace('newsYear','');
			$(yearName).slideToggle();
		});
	}
	
	
	/*----------------------------------------
		画像の先読み込み処理
	----------------------------------------*/
	//一覧と詳細の背景ロールオーバー画像読み込み
	var preloadImgFunc = function(){
		for( i = 0; i < preloadArray.length; i++){
			$('<img>').attr('src', preloadArray[i]);
		}
	}


	/*----------------------------------------
		処理の実行
	----------------------------------------*/
	newsFunc();
	preloadImgFunc();

});

