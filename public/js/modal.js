// JavaScript Document

$(function(){
	/*----------------------------------------
		var設定
	----------------------------------------*/
	//共通
	var modalId,
	//処理を開始してもよいかの判別（0：処理OK／1：処理NG）
	modalCheck = 0,
	windowHeight,
	modalHeight,
	modalPosi;



	/*----------------------------------------
		モーダル表示
	----------------------------------------*/
	var modalFunc = function(){
		$('.modalOpen').click(function() {
			if(modalCheck == 0){
				modalCheck = 1;
				modalId = $(this).attr('href');
				modalStartFunc();
				return false;
			}
		});

		$('#modalBg').click(function() {
			if(modalCheck == 0){
				modalCheck = 1;
				modalCloseFunc();
			}
		});
	}

	var modalStartFunc = function(){
		modalPosiFunc();
		$('#modalBg').fadeIn(500, function() {
			$(modalId).fadeIn(500, function() {
				modalCheck = 0;
				$(modalId).click(function() {
					modalCheck = 1;
					modalCloseFunc();
				});
			});
		});
	}

	var modalCloseFunc = function(){
		$(modalId).fadeOut(500, function() {
			$('#modalBg').fadeOut(500, function() {
				modalCheck = 0;
			});
		});
	}


	/*----------------------------------------
		リサイズ処理
	----------------------------------------*/
	var modalPosiFunc = function(){
		windowHeight  = $(window).height();
		modalHeight = $(modalId).height();
		modalPosi = (windowHeight / 2) - (modalHeight / 2) + 'px';
		$(modalId).css('top',modalPosi);
	}


	
	/*----------------------------------------
		処理の実行
	----------------------------------------*/
	modalFunc();

	//リサイズ処理開始
	$(window).resize(function() {
		modalPosiFunc();
	});

});

