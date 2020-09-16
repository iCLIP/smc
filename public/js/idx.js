// JavaScript Document

$(function(){
	/*----------------------------------------
		var設定
	----------------------------------------*/
	//共通
	var i,
	bnrMath,
	bnrNowNum = 0,
	bnrNextNum,
	bnrWidth,
	bnrPosi,
	bnrPosiMax,
	bnrTimer,
	brnHtml;


	/*----------------------------------------
		スクロール
	----------------------------------------*/
	var idxStartFunc = function(){
		bnrMath = $('#idxMainBnr dl dd').size();
		for (i = 0; i < bnrMath; i++) {
			brnHtml = '<li><p><img src="/img/idx/main_icon_on.png" width="20" height="20" alt=""></p><a href="javascript:void(0);" class="bnrIcon' + i + '"><img src="/img/idx/main_icon.png" width="20" height="20" alt="" class="hover"></a></li>';
			$('#idxNavi ul').append(brnHtml);
		};

		$('#idxNavi ul li a').click(function() {
			bnrNextNum = $(this).attr('class');
			bnrNextNum = bnrNextNum.replace('bnrIcon','');
			idxSlideFunc();
		});

		//初期状態設定
		$('#idxNavi ul li p').eq(0).css({'display':'block'});
		if(bnrMath > 0){
			//スタート処理
			$('#idxMainBnr dl dd').eq(0).clone(true).appendTo('#idxMainBnr dl');
			idxResizeFunc();
		}
	}

	var idxSlideFunc = function(){
		//スライドアイコン調整
		$('#idxNavi ul li p').each(function(i) {
			if(bnrNextNum == i) {
				$('#idxNavi ul li p').eq(i).css({'display':'block'});
			}else{
				$('#idxNavi ul li p').eq(i).css({'display':'none'});
			}
		});

		if(bnrNextNum == bnrMath) {
			$('#idxNavi ul li p').eq(0).css({'display':'block'});
		}
		//（注）アニメーション開始時に以下の処理を行うこと
		//（注）アニメーション終了後だとリサイズ時に問題がおこる為NG
		bnrPosi = 0 - ($(window).width() * bnrNextNum) + 'px';
		bnrNowNum = bnrNextNum;
		if(bnrNowNum >= bnrMath){
			bnrNowNum = 0;
		}
		$('#idxMainBnr dl').stop().animate({'margin-left':bnrPosi},700,'easeOutCirc',function(){
			bnrPosiMax = 0 - ($(window).width() * bnrMath) + 'px';
			if($(this).css('margin-left') == bnrPosiMax){
				$('#idxMainBnr dl').css({'margin-left':'0px'});
			}
		});
		clearTimeout(bnrTimer);
		bnrTimer = setTimeout(idxTimerFunc,8000);
	}

	var idxTimerFunc = function(){
		bnrNextNum = Number(bnrNowNum) + 1;
		idxSlideFunc();
	}

	var idxResizeFunc = function(){
		bnrWidth = $(window).width() + 'px';
		$('#idxMainBnr dl dd').css({'width':bnrWidth});
		bnrWidth = $(window).width() * $('#idxMainBnr dl dd').size() + 'px';
		$('#idxMainBnr dl').css({'width':bnrWidth});
		$('#idxMainBnr dl').stop();
		bnrPosi = 0 - ($(window).width() * bnrNowNum) + 'px';
		$('#idxMainBnr dl').css({'margin-left':bnrPosi});
		if(bnrMath > 0){
			clearTimeout(bnrTimer);
			bnrTimer = setTimeout(idxTimerFunc,8000);
		}
		return true;
	}


	/*----------------------------------------
		処理の実行
	----------------------------------------*/
	idxStartFunc();

	//リサイズ時処理開始
	$(window).resize(function() {
		idxResizeFunc();
	});

});

