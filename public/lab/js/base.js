// Base JavaScript Document

$(function() {
	/*----------------------------------------
		変数を設定
	----------------------------------------*/
	var i,
    //ロールオーバー用
    imageCache = {},
    imageDot,
    //スクロール
    scrollSpeed = 500,
    scrollHref,
    scrollTarget,
    scrollPosition,
    //ブラウザ判別
    ua,
    chromeCheck = false,
    //リサイズ
    resizeTimer,
    //ウィンドウの横幅＆高さなど
    winWidth,
    winHeight,
    logoPosi,
    defHeight,
    heightLineTimer,
    checkHeightLine,
    maxHeightLine,
    //活用例の高さを揃える
    exHeight,
    exMaxHeight,
    //声ダケノ感情認識テスト
    testNum = 0,
    testSec2Num = 0,
    testSec3Num = 0,
    testSec3Text = '',
    testPosiY,
    testName,
    testTimer,
    testCount,
    id = "dfjkhg48JKHsdkj398kKJ398dkjjksdfggj39DJ",
    audio_context,
    analyser,
    recorder,
    localStream,
    analysisComplete,
    volumeArray = ['/lab/img/com_main_sec2_circle0.png','/lab/img/com_main_sec2_circle1.png','/lab/img/com_main_sec2_circle2.png','/lab/img/com_main_sec2_circle3.png','/lab/img/com_main_sec2_circle4.png','/lab/img/com_main_sec2_circle5.png','/lab/img/com_main_sec2_circle6.png','/lab/img/com_main_sec2_circle7.png','/lab/img/com_main_sec2_circle8.png'],
    isRecordable = true,
    //画像の先読み込み
    preImg = new Array(),
    newImgArray = ['/lab/img/com_main_sec2_bg1.jpg','/lab/img/com_main_sec2_bg2.jpg','/lab/img/com_main_sec2_bg3.jpg','/lab/img/com_main_sec2_bg4.jpg','/lab/img/com_main_sec3_bg1.jpg','/lab/img/com_main_sec3_bg2.jpg','/lab/img/com_main_sec3_bg3.jpg','/lab/img/com_main_sec3_bg4.jpg','/lab/img/com_main_sec2_circle_bg2.png','/lab/img/com_main_sec2_count2.png','/lab/img/com_main_sec2_count1.png','/lab/img/com_main_sec2_circle1.png','/lab/img/com_main_sec2_circle2.png','/lab/img/com_main_sec2_circle3.png','/lab/img/com_main_sec2_circle4.png','/lab/img/com_main_sec2_circle5.png','/lab/img/com_main_sec2_circle6.png','/lab/img/com_main_sec2_circle7.png','/lab/img/com_main_sec2_circle8.png','/lab/img/com_main_sec3_img2.png','/lab/img/com_main_sec3_img3.png','/lab/img/com_main_sec3_img4.png','/lab/img/com_main_sec2_lead2.png'];


    /*----------------------------------------
        ページ内リンク
    ----------------------------------------*/
    var scrollToFunc = function(){
        $('a[href^=#]').click(function() {
        scrollHref= $(this).attr("href");
        scrollTarget = $(scrollHref == "#" || scrollHref == "" ? 'html' : scrollHref);
        scrollPosition = scrollTarget.offset().top;
        $('body,html').animate({scrollTop:scrollPosition}, scrollSpeed,'easeOutCubic');
        return false;
        });
    }



    /*----------------------------------------
        画像変更のロールオーバー
    ----------------------------------------*/
    var rollOverFunc = function(){
        $("img.hover").not("[src*='_on.']").each(function(i) {
            var imgsrc = this.src;
            imageDot = this.src.lastIndexOf('.');
            var imgsrc_on = this.src.substr(0, imageDot) + '_on' + this.src.substr(imageDot, 4);
            imageCache[this.src] = new Image();
            imageCache[this.src].src = imgsrc_on;
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
        $("img.feadHover").mouseover(function() {
            $(this).stop().animate({'opacity' : '0.5'},300);
        }).mouseout(function() {
            $(this).stop().animate({'opacity' : '1'},300);
        });
    }



    /*----------------------------------------
        リサイズ処理（常時）
    ----------------------------------------*/
    var resizeFunc = function(){
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;
        //PC版ヘッダーのロゴ
        logoPosi = (winWidth - $('#pcHeader').outerWidth()) / 2;
        if(logoPosi <= 0){
            logoPosi = 0;
        }
        $('#pcLogo').stop().css({'left':logoPosi});
    }



    /*----------------------------------------
        リサイズ処理（リサイズ調整後）
    ----------------------------------------*/
    var resizeFunc2 = function(){
        maxHeightLine = 0;
        //スマホのポイント高さ調整
        $('#spPoint li').css('height','auto');
        $('#spPoint li').each(function(i) {
            checkHeightLine = $(this).height();
            if(maxHeightLine < checkHeightLine){
                maxHeightLine = checkHeightLine;
            }
        });
        $('#spPoint li').stop().css('height',maxHeightLine)

        //テストの結果画面位置調整
        if(testNum == 5){
            testPosiY = ($('#mainSec3Inner').height() - $('#mainSec3Result').height()) / 2;
            $('#mainSec3Result').css({'padding-top':testPosiY});
        }

        //活用例の高さを揃える
        exMaxHeight = 0;
        $('.exInner p').css({'height':'auto'});
        $('.exInner p').each(function(i) {
            exHeight = $('.exInner p').eq(i).height();
            if(exMaxHeight < exHeight){
                exMaxHeight = exHeight;
            }
        });
        $('.exInner p').css({'height':exMaxHeight});
        return true;
    }

    var heightLineCheck = function(){
        if(defHeight != $('body').css('font-size')){
            defHeight = $('body').css('font-size');
            resizeFunc2();
        }
    }



    /*----------------------------------------
        SP版ナビゲーションの開閉
    ----------------------------------------*/
    var navToggleFunc = function(){
        $('#spHeader #spNavOpen,#spNavClose a').click(function() {
            $('#spNav').stop().slideToggle(500,function(){
                $('img[usemap]').rwdImageMaps();
            });
        });
    }



    /*----------------------------------------
        声ダケノ感情認識テスト
    ----------------------------------------*/
    //初期化処理
    var testInitFunc = function(){
        var audioSupport = false
        try {
          window.AudioContext = window.AudioContext || window.webkitAudioContext;
          navigator.getUserMedia = navigator.getUserMedia
                               || navigator.webkitGetUserMedia
                               || navigator.mozGetUserMedia
                               || navigator.msGetUserMedia;

          window.URL = window.URL || window.webkitURL;

          audio_context = new AudioContext;
          analyser = audio_context.createAnalyser();
          if(navigator.getUserMedia) {
            audioSupport = true
          }
        } catch (e) {
            //エラーの時にはAudio使えないとみなす
        }
        return audioSupport;
    }
    var startUserMedia = function(stream){
        localStream = stream;
        var input = audio_context.createMediaStreamSource(stream);
        recorder = new Recorder(input);
        input.connect(analyser);
        var timeDomainData = new Uint8Array(analyser.frequencyBinCount);
        var animation = function(){
            analyser.getByteTimeDomainData(timeDomainData);
            if(recorder && recorder.isRecording()){
                var max = timeDomainData[0]
                for (var i = 1, l = timeDomainData.length; i < l; i++) {
                    //最大値を取る
                    if (max < timeDomainData[i]){
                        max = timeDomainData[i]
                    }
                }
                //ボリューム表示
                $('#sec2CircleMeter img').attr("src",volumeArray[(Math.floor((max - 128) / 14.5 ) )])
            }
            requestAnimationFrame(animation);
        };
        animation();
    }
    //Empathとの通信
    var sendData = function(){
        recorder && recorder.exportWAV(function(blob) {
            var data = new FormData();
            data.append('file', blob);
            $.ajax({
                url :  "http://emo.geo.jp/empathwav/analyze/" + id,
                type: 'POST',
                data: (id,data),
                contentType: false,
                processData: false,
                crossDomain: true,
                success: function(result) {
                    if(!result || result == -1) {
                        alert('サーバとの通信に失敗しました。')
                        location.reload();
                        return false;
                    }
                    analysisComplete = true
                    var Fine = result.ANGER + result.JOY - result.SORROW
                    if(Fine > 40) {
                        testSec3Num = 1
                    } else if(Fine > 25) {
                        testSec3Num = 2
                    } else if(Fine > 10) {
                        testSec3Num = 3
                    } else {
                        testSec3Num = 4
                    }

                },
                error: function() {
                  alert("解析に失敗しました。再読み込みしてください。");
                  location.reload();
                }
            });
        });
    }

    //画像先読み
    var preImgFunc = function(){
        for (i=0;i < newImgArray.length;i++){
            preImg[i] = new Image();
            preImg[i].src = newImgArray[i];
       }
    }

    var testReplayFunc = function(){
        $('#mainSection3').fadeOut(500,function() {
            testStep2Func();
        });
    }

    var testStep5Func = function(){
        //↓↓↓↓↓↓診断結果（1〜4で設定）↓↓↓↓↓
        //sendDataメソッドのコールバックで設定
        //↑↑↑↑↑↑診断結果（1〜4で設定）↑↑↑↑↑↑
        //↓↓↓↓↓↓診断結果文言↓↓↓↓↓
        testSec3Text = resultText[testSec2Num][testSec3Num][Math.floor(Math.random() * resultText[testSec2Num][testSec3Num].length)];
        //↑↑↑↑↑↑診断結果文言↑↑↑↑↑↑
        testNum = 5;
        //背景画像変更
        testName = $('#mainSection3').attr('class');
        $('#mainSection3').removeClass(testName);
        testName = 'sec3bg' + testSec3Num;
        $('#mainSection3').addClass(testName);
        testName = '/lab/img/com_main_sec3_img' + testSec3Num + '.png'
        $('#mainSec3Img img').attr({'src':testName});
        $('#mainSec3Text').html(testSec3Text);
        $('#mainSec3Inner').hide();
        $('#mainSection3').stop().fadeIn(1000,function() {
            $('#mainSec3Inner').css({'visibility':'hidden','display':'block'});
            resizeFunc2();
            $('#mainSec3Inner').css({'display':'none','visibility':'visible',});
            $('#mainSec3Inner').stop().fadeIn(500,function(){
                $('#mainSec3Replay').click(function(){
                    if(testNum == 5){
                        testNum = 6;
                        testStep2StartFunc();
                    }
                });
            });
        });
    }


    var testStep4Func = function(){
        //結果解析
        analysisComplete = false;
        recorder && recorder.stop();
        sendData();
        recorder.clear();
        testNum = 4;
        $('#mainSec2Lead').stop().fadeOut(500);
        $('#mainSec2Text').stop().fadeOut(500);
        $('#mainSec2Finish').stop().fadeOut(500,function() {
            $('#mainSec2Circle p').removeClass('mainSec2CircleRecord');
            $('#sec2CircleMeter').hide();
            $('#sec2CircleAnalytic').show();
            $('#mainSec2Circle p').stop().animate({'background-size':'60%'},800,'easeOutCubic',function(){
                $('#sec2CircleAnalytic').stop().fadeOut(800, function() {
                    $(this).stop().fadeIn(800, function() {
                        $(this).stop().fadeOut(800, function() {
                            $(this).stop().fadeIn(800, function() {
                                $(this).stop().fadeOut(800);
                                if(analysisComplete) {
                                    $('#mainSec2Circle p').stop().animate({'background-size':'100%'},800,'easeOutCubic',function(){
                                        testStep5Func();
                                    });
                                } else {
                                    alert("解析に失敗しました。サーバが混み合っている可能性があります。")
                                    location.reload();
                                }
                            });
                        });
                    });
                });
            });
        });
    }

    var testStep3CountFunc = function(){
        testCount--;
        if(testCount > 0){
            testName = '/lab/img/com_main_sec2_count' + testCount + '.png';
            $('#sec2CircleCount img').attr({'src':testName});
            testTimer = setTimeout(function(){testStep3CountFunc()},1000);
        }else{
            $('#sec2CircleCount').hide();
            $('#mainSec2Circle p').addClass('mainSec2CircleRecord');
            $('#mainSec2Lead img').attr({'src':'/lab/img/com_main_sec2_lead2.png'});
            $('#mainSec2Lead,#mainSec2Text,#sec2CircleMeter,#mainSec2Finish').show();
            $('#mainSec2Finish .mainBtn').click(function(){
                if(testNum == 3){
                    testStep4Func();
                }
            });
            //録音開始
            recorder && recorder.record();
        }
    }

    var testStep3Func = function(){
        testNum = 3;
        $('#mainSec2Lead').stop().fadeOut(500);
        $('#mainSec2Text').stop().fadeOut(500);
        $('#mainSec2Start').stop().fadeOut(500,function() {
            $('#sec2CircleCount').show();
            testTimer = setTimeout(function(){testStep3CountFunc()},1000);
        });
    }

    var testStep2StartFunc = function(){
        //↓↓↓↓↓↓診断文言設定（1〜4で設定）↓↓↓↓↓
        do{
            var tmpNum = Math.floor( Math.random() * 4 ) + 1
        } while (tmpNum == testSec2Num);
        testSec2Num = tmpNum;
        //↑↑↑↑↑↑診断文言設定（1〜4で設定）↑↑↑↑↑↑
        //初期値設定
        $('#mainSec2Lead,#mainSec2Text,#mainSec2Start,#mainSec2Finish,#mainSec2Circle,#sec2CircleCount,#sec2CircleMeter,#sec2CircleAnalytic').hide();
        $('#mainSec2Lead img').attr({'src':'/lab/img/com_main_sec2_lead1.png'});
        $('#mainSec2Text img').attr({'src':'/lab/img/com_main_sec2_lead1.png'});
        $('#sec2CircleCount img').attr({'src':'/lab/img/com_main_sec2_count3.png'});
        testCount = 3;
        //背景画像等変更
        testName = $('#mainSection2').attr('class');
        $('#mainSection2').removeClass(testName);
        testName = 'sec2bg' + testSec2Num;
        $('#mainSection2').addClass(testName);
        //文言変更
        testName = '/lab/img/com_main_sec2_text' + testSec2Num + '.png';
        $('#mainSec2Text img').attr({'src':testName});
        if(testNum == 2){
            $('#mainSection2').stop().fadeIn(1000,function() {
                $('#mainSection1').hide();
                testStep2Func();
            });
        }else{
            $('#mainSection3').stop().fadeOut(500,function() {
                testNum = 2;
                testStep2Func();
            });
        }
    }

    var testStep2Func = function(){
        $('#mainSection2').stop().fadeIn(1000,function() {
            $('#mainSec2Circle').stop().fadeIn(500,function() {
                $('#mainSec2Lead').stop().fadeIn(500,function() {
                    $('#mainSec2Text').stop().fadeIn(500,function() {
                        $('#mainSec2Start').stop().fadeIn(500,function() {
                            $('#mainSec2Start .mainBtn').click(function() {
                                if(testNum == 2){
                                    testStep3Func();
                                }
                            });
                        });
                    });
                });
            });
        });
    }

    var testStartFunc = function(){
        if(isRecordable) {
            $('#mainSection1 .mainBtn').show();
            testNum = 1;
            $('#mainSection1 .mainBtn').click(function(){
                if(testNum == 1){
                    testNum = 2;
                    testStep2StartFunc();
                }
            });
        }

    }

    var testLoadFunc = function(){
        //ua = window.navigator.userAgent.toLowerCase();
        //if ((ua.indexOf('chrome') != -1)||(ua.indexOf('crios') != -1)){
        if (testInitFunc()) {
            chromeCheck = true;
            $('#mainSection1 .mainBtn').hide().css({'visibility':'visible'});
            navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
                //ブラウザが対応していても音声入力機能が使えない時
                alert("音声入力機能が使用できません");
                $('#mainSection1 .mainBtn').hide();
                isRecordable = false;
            });
        }else{
            $('#mainSection1 .mainBtn').hide();
            $('#mainSection1 #mainSec1Error').css({'visibility':'visible'});
        }
    }


    /*----------------------------------------
        インフォメーションの電話設定
    ----------------------------------------*/
    var infoTelFunc = function(){
        $('#infoSpTel').click(function() {
            if(spCheck){
                window.location.href = 'tel:0332304010';
            }
            return false;
        });
    }



    /*----------------------------------------
        各種実行処理
    ----------------------------------------*/
    $(window).on('resize orientationchange', function () {
        if (resizeTimer !== false) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(function() {
            resizeFunc2();
        }, 50);
        resizeFunc();
    });

    resizeFunc();
    scrollToFunc();
    rollOverFunc();
    feadOverFunc();
    preImgFunc();
    navToggleFunc();
    testLoadFunc();
    infoTelFunc();

    $(window).load(function(){
        resizeFunc2();
        if(chromeCheck == true){
            testStartFunc();
        }
    })

    defHeight = $('body').css('font-size');
    heightLineTimer = setInterval(function(){heightLineCheck()},1000);

});