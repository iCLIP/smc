// JavaScript Document

$(function(){
	/*----------------------------------------
		var設定
	----------------------------------------*/
	var footerHTML;


	/*----------------------------------------
		FOOTER
	----------------------------------------*/
	var footerFunc = function(){
		footerHTML = '<footer>\n\
		<div id="footerNavi">\n\
		<dl id="footerFirstTable">\n\
		<dd>\n\
		<p class="footerTitle">ニュースリリース</p>\n\
		<ul class="footerNaviBox">\n\
		<li><a href="/news/pcc" class="feadHover">PCC関連情報</a></li>\n\
		<li><a href="/news/ir" class="feadHover">広報・IR情報</a></li>\n\
		</ul>\n\
		</dd>\n\
		<dd>\n\
		<p class="footerTitle">Smartmedicalについて</p>\n\
		<ul class="footerNaviBox">\n\
		<li><a href="/company/" class="feadHover">会社案内</a></li>\n\
		<li><a href="/company/mission.html" class="feadHover">企業理念</a></li>\n\
		<li><a href="/company/business-philosophy.html" class="feadHover">事業理念</a></li>\n\
		<li><a href="/company/about.html" class="feadHover">会社概要</a></li>\n\
		<li><a href="/company/recruit.html" class="feadHover">採用情報</a></li>\n\
		</ul>\n\
		</dd>\n\
		<dd>\n\
		<p class="footerTitle">PCC事業</p>\n\
		<ul class="footerNaviBox">\n\
		<li><a href="/pcc/" class="feadHover">PCC</a></li>\n\
		<li><a href="/pcc/iryohojin.html" class="feadHover">医療機関、医療法人の皆様へ</a></li>\n\
		<li><a href="/pcc/enant.html" class="feadHover">医療テナント誘致を<br>希望する皆様へ</a></li>\n\
		</ul>\n\
		</dd>\n\
		</dl>\n\
		</div>\n\
		<div id="footerNaviSecond">\n\
		<div id="footerNaviSecondBox">\n\
		<div class="footerTable">\n\
		<div class="footerTableRow">\n\
		<div class="footerTableCell">\n\
		<div class="footerNaviSecondLeft">\n\
		<p><a href="/policy.html" class="feadHover">個人情報保護方針</a></p>\n\
		<p><a href="/terms.html" class="feadHover">サイトポリシー</a></p>\n\
		<p><a href="/link.html" class="feadHover">関連リンク</a></p>\n\
		</div>\n\
		</div>\n\
		<div class="footerTableCell footerContactConts">\n\
		<div class="footerNaviSecondRight">\n\
		<p id="footerContact" class="feadHover"><a href="/contact.html"><span>お問い合わせ</span></a></p>\n\
		<p id="footerPageTopBtn" class="feadHover"><a href="#pageTop"><span>TOP</span></a></p>\n\
		</div>\n\
		</div>\n\
		</div>\n\
		</div>\n\
		</div>\n\
		</div>\n\
		<p id="footerCopyRight">Copyright &copy; Smartmedical Corp. All Rights Reserved.</p>\n\
		<div id="responsiveCheck"></div>\n\
		</footer>';

		$('body').append(footerHTML);
	}



	/*----------------------------------------
		処理の実行
	----------------------------------------*/
	footerFunc();
});

