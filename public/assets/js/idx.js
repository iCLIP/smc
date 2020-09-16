// JavaScript Document

$(function() {
	/*----------------------------------------
		変数を設定
	----------------------------------------*/
	var i,
    idxResizeTimer,
    mediaWidth,
    idxNewsNum = 0,
    //スライドショー用
    idxSlideTimeOut,
    idxSlideCount = 0,
    idxSlideTimer = 6000,
    idxSlideSpeed = 500,
    idxSlideBtn,
    //画像の数の取得
    idxSlideImgCount,
    // 一つ右のものをスライドして表示するアニメーションを開始する
    idxSlideImgPos,
    idxStopSlideTimeCl,
    idxMeterNum,
    idxSlideMeter,
    idxMeterAmount = 0,
    idxMeterAmountMax,
    idxSlideInterval = setInterval(idxSlideCountFunc, idxSlideTimer),
    idxMainTitlePosi;

    /*----------------------------------------
        スクロール
    ----------------------------------------*/
    var idxScrollBarFunc = function(){
        $(window).load(function(){
            $("#idxNewsScrollBox").mCustomScrollbar({
                mouseWheelPixels: 50,
                autoHideScrollbar: false,
                advanced:{
                    updateOnContentResize: true
                }
            });
        });
    }
    var idxScrollBarStartFunc = function(){
        mediaWidth = $('#responsiveCheck').width();
        if(uaFlag == 1){
            $('#idxNewsScrollBox').css({'height':'auto','overfllow':'visible'});
        }else{
            mediaWidth = $('#responsiveCheck').width();
            if(mediaWidth == 3){
                $('#idxNewsScrollBox').css({'height':'auto','overfllow':'visible'});
            }else{
                $('#idxNewsScrollBox').css({'height':'255','overfllow':'hidden'});
                idxScrollBarFunc();
            }
        }
        idxMainTitleFunc();
    }
    var idxScrollBarRisizeFunc = function(){
        mediaWidth = $('#responsiveCheck').width();
        if(uaFlag == 1){
            $('#idxNewsScrollBox').css({'height':'auto','overfllow':'visible'});
        }else{
            mediaWidth = $('#responsiveCheck').width();
            if(mediaWidth == 3){
                $('#idxNewsScrollBox').css({'height':'auto','overfllow':'visible'});
            }else{
                $('#idxNewsScrollBox').css({'height':'255','overfllow':'hidden'});
                $("#idxNewsScrollBox").mCustomScrollbar({
                    mouseWheelPixels: 50,
                    autoHideScrollbar: false,
                    advanced:{
                        updateOnContentResize: true
                    }
                });
            }
        }
        idxMainTitleFunc();
    }
    var idxMainTitleFunc = function(){
        mediaWidth = $('#responsiveCheck').width();
        console.log(mediaWidth);
        if(mediaWidth <= 2){
            idxMainTitlePosi = 0 - (($('#idxMainTtl img').height() - $(window).height()) / 2);
            $('#idxMainTtl img').css({'top':idxMainTitlePosi});
        }
    }
    /*----------------------------------------
        ニュース変更処理
    ----------------------------------------*/
    var idxNewsNavOnFunc = function(){
        $('.idxNewsConts').hide();
        $('.idxNewsConts').eq(idxNewsNum).fadeIn(1000);
        $('#idxNewsNav .idxNewsNavCell a').removeClass('idxNewsNavActive');
        $('#idxNewsNav .idxNewsNavCell a').eq(idxNewsNum).addClass('idxNewsNavActive');
    }
    var idxNewsNavCurrentFunc = function(){
        $('#idxNewsNav .idxNewsNavCell a').click(function() {
            idxNewsNum = $('#idxNewsNav .idxNewsNavCell a').index(this);
            if($(this).hasClass('idxNewsNavActive')){
                null;
            }else{
                if(uaFlag == 1){
                    $('#idxNewsScrollBox').mCustomScrollbar("scrollTo","top",{scrollInertia:10});
                    idxNewsNavOnFunc();
                }else{
                    if(mediaWidth == 3){
                        idxNewsNavOnFunc();
                    }else{
                        $('#idxNewsScrollBox').mCustomScrollbar("scrollTo","top",{scrollInertia:10});
                        idxNewsNavOnFunc();
                    }
                }
            }
        });
    }
    /*----------------------------------------
        メインスライドショー
    ----------------------------------------*/
    var idxSlideStartFunc = function() {
        $(".idxMeterBtn").eq(0).css('background-color','#009b3f');
        //画像の数の取得
        idxSlideImgCount = $(".idxMainSlideConts").length;
        if(idxSlideImgCount>1){
            idxSlideWidthFunc();
            // 一つ目の画像枠を最後に追加しておく
            $(".idxMainSlideConts").eq(0).clone(true).appendTo("#idxMainSlide");
        };
    };
    //横幅の設定
    var idxSlideWidthFunc= function() {
        $("#idxMainSlide").css("width",( idxSlideImgCount + 1) * 100 +"%");
        $(".idxMainSlideConts").css("width",( 100 / (idxSlideImgCount + 1)) +"%");
        return true;
    }
    //ボタンをクリックした時の処理
    var idxSlideBtnFunc = function(){
        $(".idxMeterBtn").click(function(){
            idxMeterNum = $('.idxMeterBtn').index(this);
            if(idxMeterNum!==idxSlideCount){
                clearInterval(idxSlideInterval);
                idxSlideCount = idxMeterNum;
                $(".idxMeterBtn").css('background-color','');
                $(this).stop().css('background-color','#009b3f');
            	idxSlideFunc();
                idxMainSlideFunc();
            }
        });
        return true;
    };
    // 画像をスライド処理
    var idxSlideFunc = function() {
        // 一つ右のものをスライドして表示するアニメーションを開始する
        $("#idxMainSlide").stop().animate({ "left" : (idxSlideCount*-100) +"%"},idxSlideSpeed,'easeOutQuint',function(){
            if ( idxSlideCount >= idxSlideImgCount) {
                    // 現在動いてるアニメーションを止める, 最後の画像だったら一番左に戻す（一つ目なので見た目には表示が変わらない）
                    $("#idxMainSlide").stop().css("left","0");
                    idxSlideCount = 0;
            };
        });
        if(idxSlideCount >= idxSlideImgCount){
            $(".idxMeterBtn").css('background-color','');
            $(".idxMeterBtn").eq(0).css('background-color','#009b3f');
        }else{
            $(".idxMeterBtn").css('background-color','');
            $(".idxMeterBtn").eq(idxSlideCount).css('background-color','#009b3f');
        }
    };
    var idxSlideCountFunc = function() {
        idxSlideCount++;
        idxSlideFunc();
    };
    var idxMainSlideFunc = function(){
        idxSlideInterval = setInterval(idxSlideCountFunc, idxSlideTimer);
    }
    /*----------------------------------------
        リサイズ処理
    ----------------------------------------*/


	/*----------------------------------------
		各種実行処理
	----------------------------------------*/
	//リサイズ時の処理
	$(window).resize(function() {
		if (idxResizeTimer !== false) {
			clearTimeout(idxResizeTimer);
		}
		idxResizeTimer = setTimeout(function() {
            idxScrollBarRisizeFunc();
		}, 50);
	});

    $(window).load(function() {
        idxMainTitleFunc();
    });

	//初期処理
    idxScrollBarStartFunc();
    idxNewsNavCurrentFunc();
    idxSlideStartFunc();
    idxSlideBtnFunc();
    idxMainSlideFunc();
});