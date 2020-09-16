// JavaScript Document

$(function(){
	/*----------------------------------------
		var設定
	----------------------------------------*/
	//共通
	var i,
	//スクロール
	speed = 300,
	href,
	target,
	position,
	//ロールオーバー
	image_cache = {},
	dot;



	/*----------------------------------------
		スクロール
	----------------------------------------*/
	var scrollToFunc = function(){
		$('a[href^=#]').click(function() {
		href= $(this).attr("href");
		target = $(href == "#" || href == "" ? 'html' : href);
		position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed);
		return false;
		});
	}


	/*----------------------------------------
		画像変更のロールオーバー
	----------------------------------------*/
	var rollOverFunc = function(){
		$("img.hover").not("[src*='_on.']").each(function(i) {
			var imgsrc = this.src;
			dot = this.src.lastIndexOf('.');
			var imgsrc_on = this.src.substr(0, dot) + '_on' + this.src.substr(dot, 4);
			image_cache[this.src] = new Image();
			image_cache[this.src].src = imgsrc_on;
			$(this).hover(
				function() { this.src = imgsrc_on; },
				function() { this.src = imgsrc; }
			);
		});
	}


	/*----------------------------------------
		フェードのロールオーバー
	----------------------------------------*/
	var feadOverFunc = function(){
		$(".feadHover").mouseover(function() {
			$(this).css('opacity', 0.7);
		}).mouseout(function() {
			$(this).css('opacity', 1);
		});
	}


	/*----------------------------------------
		処理の実行
	----------------------------------------*/
	scrollToFunc();
	rollOverFunc();
	feadOverFunc();

	//ブラウザでBACKした際のリセット
	window.onunload = function() {};

});

