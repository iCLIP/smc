// JavaScript Document

$(function(){
	/*----------------------------------------
		var設定
	----------------------------------------*/
	var headerHTML;


	/*----------------------------------------
		HEADER
	----------------------------------------*/
	var headerFunc = function(){
		headerHTML = '<header id="pageTop">\n\
		<div class="table">\n\
		<div class="tableRow">\n\
		<div class="headerLogo tableCell">\n\
		<h1><a href="/"><img src="/assets/img/common/header_logo.png" alt="スマートメディカル株式会社"></a></h1>\n\
		</div>\n\
		<div class="headerNav tableCell">\n\
		<div class="navTable">\n\
		<div class="navTableRow">\n\
		<div class="navTableCell">\n\
		<p><a href="/news/pcc" class="feadHover">ニュース</a></p>\n\
		</div>\n\
		<div class="navTableCell">\n\
		<p><a href="/company/" class="feadHover">Smartmedicalについて</a></p>\n\
		</div>\n\
		<div class="navTableCell">\n\
		<p><a href="/pcc/" class="feadHover">PCC事業</a></p>\n\
		</div>\n\
		</div>\n\
		</div>\n\
		</div>\n\
		</div>\n\
		</div>\n\
		</header>';

		$('body').prepend(headerHTML);
	}


	/*----------------------------------------
		処理の実行
	----------------------------------------*/
	headerFunc();

});






