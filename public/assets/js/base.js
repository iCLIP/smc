// JavaScript Document

$(function() {
	/*----------------------------------------
		変数を設定
	----------------------------------------*/
	var i,
	//ロールオーバー用
	image_cache = {},
	dot,
	//スクロール
	speed = 500,
	href,
	target,
	position,
    resizeTimer,
    //resizeWidthで現在の表示状態を管理：1→PC、2→TABLET、3→SP
    resizeWidth,
    imgsrc_change,
    //SP表示用のNAV切り替え
    spNav = false,
    navWidth,
    navPadding,
    navChangeFlag = false,
    //ナビのカレント
    //pageNum;
    //高さ調整
    //高さを揃える要素
    //heightLinePc = [''],
    //heightLineTab = [''],
    //heightLineSp = [''];
    heightLineClear = [],
    heightLineClear2 = [],
    heightLineSet = [],
    heightLineValue,
    heightLinestorage = {},
    heightLineMax,
    heightLineCheck,
    defHeight,
	heightLineTimer,
    telHref,
    navClearPosi,
    scrollLock = 0,
    winHeight,
    docHeight,
    scrollTop,
    queryWidth,
    spNavLock = 0,
    spHide = 0;


	/*----------------------------------------
		ページ内リンク
	----------------------------------------*/
	var scrollToFunc = function(){
		$('a[href^=#]').click(function() {
		href= $(this).attr('href');
		target = $(href == '#' || href == '' ? 'html' : href);
		position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed);
		return false;
		});
	}


    //====================
    //ページトップスクロールボタン処理
    //====================
    var pageTopFunc = function(){
        $('#footerPageTopBtn').click(function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '1000')
        });
    }


	/*----------------------------------------
		高さ調整用
	----------------------------------------*/
	var heightLineFunc = function(){
		if(resizeWidth == 1){
        	//PC用
        	heightLineClear = heightLineTab.concat(heightLineSp);
        }else if(resizeWidth == 2){
        	//TABLET用
        	heightLineClear = heightLinePc.concat(heightLineSp);
        }else{
        	//SP用
        	heightLineClear = heightLinePc.concat(heightLineTab);
        }
        heightLineClear2 = [];
        heightLinestorage = {};
        for(i = 0; i < heightLineClear.length; i++){
        	heightLineValue = heightLineClear[i];
        	if (!(heightLineValue in heightLinestorage)) {
        		heightLinestorage[heightLineValue] = true;
        		heightLineClear2.push(heightLineValue);
        	}
        }
        if(heightLineClear2.length > 0) {
        	for(i = 0 ; i < heightLineClear2.length ; i++){
            	$(heightLineClear2[i]).css('height','auto');
        	}
        }
        heightLineFunc2();
	}

	var heightLineFunc2 = function(){
		if(resizeWidth == 1){
        	//PC用
        	heightLineSet = heightLinePc;
        }else if(resizeWidth == 2){
        	//TABLET用
        	heightLineSet = heightLineTab;
        }else{
        	//SP用
        	heightLineSet = heightLineSp;
        }
        if(heightLineSet.length > 0) {
        	for(i = 0 ; i < heightLineSet.length ; i++){
        		heightLineMax = 0;
        		$(heightLineSet[i]).css('height','auto');
                $(heightLineSet[i]).each(function(i2) {
                	heightLineCheck = $(heightLineSet[i]).eq(i2).height();
                	if(heightLineCheck > heightLineMax){
                		heightLineMax = heightLineCheck;
                	}
                });
                heightLineMax = heightLineMax + 'px';
            	$(heightLineSet[i]).css('height',heightLineMax);
            }
        }
	}

	var heightLineCheckFunc = function(){
        if(defHeight != $('body').css('font-size')){
            defHeight = $('body').css('font-size');
            heightLineFunc2();
        }
    }


	/*----------------------------------------
		画像変更のロールオーバー
	----------------------------------------*/
	var rollOverFunc = function(){
		$('img.hover').not('[src*="_on."]').each(function(i) {
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
		$('.feadHover').mouseover(function() {
			$(this).stop().css({'opacity' : '0.7'});
		}).mouseout(function() {
			$(this).stop().css({'opacity' : '1'});
		});
        $('.feadAnimateHover').mouseover(function() {
            $(this).stop().animate({'opacity' : '0.7'});
        }).mouseout(function() {
            $(this).stop().animate({'opacity' : '1'});
        });
	}
    /*----------------------------------------
        スマホのフッターアコーディオン
    ----------------------------------------*/
    var spNavAccordionFunc = function(){
        queryWidth = $('#responsiveCheck').width();
        $("#footerFirstTable dd p").click(function() {
            if(spNavLock == 0){
                spNavLock = 1;
                queryWidth = $('#responsiveCheck').width();
                if(queryWidth == 3){
                    if($(this).hasClass('footerTitleActive')){
                        $(this).next('.footerNaviBox').stop().slideToggle(function(){
                            $(this).prev().removeClass('footerTitleActive');
                            spNavLock = 0;
                        });
                    }else{
                        $(this).addClass('footerTitleActive');
                        $(this).next('.footerNaviBox').stop().slideToggle(function(){
                            spNavLock = 0;
                        });
                    }
                }
            }
        });
    }

    /*----------------------------------------
        リサイズ処理
    ----------------------------------------*/
	//レスポンシブ画像差し替え
	var imgChangePcFunc = function(){
		$('img.responsive').not('[src*="_pc."]').each(function(i) {
			var imgsrc = this.src;
			var imgsrc_change = imgsrc.replace('_sp', '_pc');
			$(this).attr('src',imgsrc_change);
		});
	}
	var imgChangeSpFunc = function(){
		$('img.responsive').not('[src*="_sp."]').each(function(i) {
			var imgsrc = this.src;
			var imgsrc_change = imgsrc.replace('_pc', '_sp');
			$(this).attr('src',imgsrc_change);
		});
	}

	//スマホのナビ表示処理
	var spNavStartFunc = function(){
		spNav = false;
		$('.headerNav').css({'left':'-100%'});
	}

	var spNavOpenFunc = function(){
		$('#headerSpNavBtn,#navBack').click(function() {
			if(spNav == false){
				spNav = true;
				$('.headerNav').stop().animate({'left':'0'},400);
			}else{
				$('.headerNav').stop().animate({'left':'-100%'},400);
                spNavClearFunc();
			}
		});
	}

    var spNavClearFunc = function(){
        spNav = false;
        if(uaFlag == 2){
            $('body').removeClass('noScrollIe').css({'top':0});
        }else{
            $('body').removeClass('noScroll').css({'top':0});
        }
    }

    var resizeFunc = function(){
        resizeWidth = $('#responsiveCheck').width();
        if(resizeWidth == 1){
        	//PC用
        	imgChangePcFunc();
        	spNavStartFunc();
            //一応スクロール禁止解除
            spNavClearFunc();
            //footerスクロール用
            $('.footerNaviBox').css({'display':'block'});
            $('#footerFirstTable dd p').removeClass('footerTitleActive');
            $('.footerNaviBox').css({'height':'auto'});
            spHide =1;
        }else if(resizeWidth == 2){
        	//TABLET用
        	imgChangePcFunc();
        	spNavStartFunc();
            //一応スクロール禁止解除
            spNavClearFunc();
            //footerスクロール用
            $('.footerNaviBox').css({'display':'block'});
            $('#footerFirstTable dd p').removeClass('footerTitleActive');
            $('.footerNaviBox').css({'height':'auto'});
            spHide =1;
        }else{
        	//SP用
        	imgChangeSpFunc();
            spNavLock = 0;
            if (spHide == 1) {
                $('.footerNaviBox').css({'display':'none'});
                spHide = 0;
            };
        }
        heightLineFunc();
    }

    /*----------------------------------------
        各種デバイスごとの実行処理
    ----------------------------------------*/
    var uaStartFunc = function(){
        if(uaFlag == 1){
            //電話番号クリック処理
            $('.telLink').click(function() {
                telHref = $(this).data('link');
                location.href = telHref;
            });
        }else{
            //電話番号クリック非対応処理
            $('.telLink').css({'cursor':'default'});
            rollOverFunc();
            feadOverFunc();
        }
    }


	/*----------------------------------------
		各種実行処理
	----------------------------------------*/
	//リサイズ時の処理
	$(window).resize(function() {
		if (resizeTimer !== false) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(function() {
			resizeFunc();
            //spNavAccordionFunc();
		}, 100);
	});

	//初期処理
	scrollToFunc();
    spNavAccordionFunc();
	resizeFunc();
	spNavOpenFunc();
    uaStartFunc();
    pageTopFunc();
	heightLineFunc();
	defHeight = $('body').css('font-size');
	heightLineTimer = setInterval(heightLineCheckFunc,1000);
	$(window).load(function () {
        resizeFunc();
    });

});