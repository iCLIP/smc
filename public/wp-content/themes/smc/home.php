<?php
/* -------------------------------------------------------------------------------------------------
 * #archive_items
 * -------------------------------------------------------------------------------------------------
 */


 $items = get_top_items();

 $items_pcc         = get_top_items_by_slugname('pcc');
 $items_ict         = get_top_items_by_slugname('ict');
 $items_healthcare  = get_top_items_by_slugname('healthcare');
 $items_ir          = get_top_items_by_slugname('ir');
// var_dump($items_pcc);

?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-status-bar-style" content="blacktranslucent">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
<meta name="copyright" content="Copyright (C) THE SMART MEDICAL CO.,LTD, All Rights Reserved.">
<meta name="keywords" content="スマートメディカル株式会社,医療モール,医療不動産開発,音声感情認識,こころの問題,メンタルヘルス対策,医療コンサルティング">
<meta name="description" content="スマートメディカル株式会社は、医療モールの提案、日常の気分測定技術こころコンパスによるメンタルヘルス対策、感情解析技術を利用したソリューションを提供いたします。">
<title>スマートメディカル株式会社のコーポレートサイト</title>
<!--[if lt IE 9]>
<script type="text/javascript" src="/js/html5.js"></script>
<script type="text/javascript" src="/js/css3-mediaqueries.js"></script>
<![endif]-->

<!--  Include Css -->
<link rel="stylesheet" href="/assets/css/base.css" type="text/css" media="screen,print">
<link rel="stylesheet" href="/assets/css/jquery.mCustomScrollbar.css" type="text/css" media="screen,print">
<link rel="stylesheet" href="/assets/css/idx.css" type="text/css" media="screen,print">

<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27370025-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>

</head>
<body id="idx">
	<header id="pageTop">
		<div class="table">
			<div class="tableRow">
				<div class="headerLogo tableCell">
					<h1><a href="/"><img src="/assets/img/common/header_logo.png" alt="スマートメディカル株式会社"></a></h1>
				</div>
				<div id="headerSpNavBtn" class="pcNone tabNone"><a href="javascript:void(0);"><img src="/assets/img/common/btn_header_sp_nav.png" alt="" class="feadHover"></a></div>
				<div class="headerNav tableCell">
					<div id="navBack" class="pcNone tabNone"><img src="/assets/img/common/btn_header_sp_nav_back.png" alt="" class="feadHover"></div>
					<div class="navTable">
						<div class="navTableRow">
							<div class="navTableCell">
								<p><a href="/news/pcc" class="feadHover">ニュース</a></p>
							</div>
							<div class="navTableCell">
								<p><a href="/company/" class="feadHover">Smartmedicalについて</a></p>
							</div>
							<div class="navTableCell">
								<p><a href="/pcc/" class="feadHover">PCC事業</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div id="mainSlideArea">
		<div id="idxMainSlide">
			<div id="idxMain01" class="idxMainSlideConts">
			<div id="idxMainTtl"><img src="/assets/img/idx/ttl_main.png" alt="スマートメディカル We support the realization of sustainable health care?人々が健康であり続ける未来のために"></div>
			</div>
			<div id="idxMain02" class="idxMainSlideConts"><a href="/pcc/" class="feadAnimateHover">
			<div class="idxContsTtl"><img src="/assets/img/idx/ttl_pcc.png" alt="PCC事業 駅+医療＝PCC"></div>
			</a></div>
		</div>
	</div>
	<div id="idxMeter" class="idxMeterTable">
		<ul id="idxMeterConts"class="idxMeterTableRow">
		<li class="idxMeterBox idxMeterTableCell"><div class="idxMeterTable idxMeterBoxInner"><p class="idxMeterTableRow"><a href="javascript:void(0)" class="heightLineMeter idxMeterTableCell idxMeterBtn">SMC</a></p></div></li>
		<li class="idxMeterBox idxMeterTableCell"><div class="idxMeterTable idxMeterBoxInner"><p class="idxMeterTableRow"><a href="javascript:void(0)" class="heightLineMeter idxMeterTableCell idxMeterBtn">PCC</a></p></div></li>
		</ul>
	</div>

<!-- continuer start -->
<article>
	<section>
		<h2 id="idxNewsTtl"><img src="/assets/img/idx/ttl_news.gif" alt="SMARTMEDICAL NEWS"></h2>
		<div id="idxNewsNav">
			<div class="idxNewsNavTable">
				<div class="idxNewsNavRow">
					<div id="idxNewsNavLatest" class="idxNewsNavCell"><a href="javascript:void(0)" class="heightLine1 idxNewsNavActive"><span><span>最新</span></span></a></div>
					<div id="idxNewsNavPcc" class="idxNewsNavCell"><a href="javascript:void(0)" class="heightLine1"><span><span>PCC</span></span></a></div>
					<div id="idxNewsNavIr" class="idxNewsNavCell"><a href="javascript:void(0)" class="heightLine1"><span><span>広報・<br class="pcNone tabNone">IR情報</span></span></a></div>
				</div>
			</div>
		</div>
		<div id="idxNewsScrollBox">
			<div class="idxNewsConts idxNewsContsFirst">
			<!-- ここに最新のニュースを入れる -->
               <?php foreach ($items as $item): ?>
                <a href="<?php print $item['href']; ?>" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p><?php print $item['date']; ?></p>
                              <?php foreach ($item['terms'] as $term): ?>
                                  <?php if($term != 'ict'):?>
                                    <p class="idxNewsTag"><img src="/assets/img/idx/tag_<?php print $term; ?>.gif" alt="<?php print $term; ?>"></p>
                                  <?php endif; ?>
							 <?php endforeach; ?>
						</dd>
						<dd class="idxNewsTxt"><?php print $item['title']; ?></dd>
					</dl>
				</a>
              <?php endforeach; ?>


                                <!--
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_healthcare.gif" alt="ヘルスケア"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ict.gif" alt="ICT"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_healthcare.gif" alt="ヘルスケア"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ict.gif" alt="ICT"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_healthcare.gif" alt="ヘルスケア"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
                                -->
			<!-- 最新のニュースここまで -->
			</div>
			<div class="idxNewsConts ">
                                <?php foreach ($items_pcc as $item): ?>
                                <a href="<?php print $item['href']; ?>" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p><?php print $item['date']; ?></p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="<?php print $term; ?>"></p>
						</dd>
						<dd class="idxNewsTxt"><?php print $item['title']; ?></dd>
					</dl>
				</a>
                                <?php endforeach; ?>
                                <!--
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_pcc.gif" alt="PCC"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
                                -->
			</div>
			
			
			<div class="idxNewsConts ">
                                <?php foreach ($items_ir as $item): ?>
                                <a href="<?php print $item['href']; ?>" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p><?php print $item['date']; ?></p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="<?php print $term; ?>"></p>
						</dd>
						<dd class="idxNewsTxt"><?php print $item['title']; ?></dd>
					</dl>
				</a>
                                <?php endforeach; ?>
                                <!--
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.17</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">「高度管理医療機器等販売業／貸与業許可」を取得しました。</dd>
					</dl>
				</a>
				<a href="#" class="table feadHover">
					<dl>
						<dd class="idxNewsDays">
							<p>2015.09.09</p>
							<p class="idxNewsTag"><img src="/assets/img/idx/tag_ir.gif" alt="広報・IR"></p>
						</dd>
						<dd class="idxNewsTxt">2015年9月　スマートメディカルは、VALKEE（バルケー）の日本における総販売代理店になりました。</dd>
					</dl>
				</a>
                                -->
			</div>
		</div>
	</section>
</article>
<!-- continuer end -->
<footer>
	<div id="footerNavi">
		<dl id="footerFirstTable">
			<dd>
				<p class="footerTitle">ニュースリリース</p>
				<ul class="footerNaviBox">
					<li><a href="/news/pcc" class="feadHover">PCC関連情報</a></li>
					<li><a href="/news/ir" class="feadHover">広報・IR情報</a></li>
				</ul>
			</dd>
			<dd>
				<p class="footerTitle">Smartmedicalについて</p>
				<ul class="footerNaviBox">
					<li><a href="/company/" class="feadHover">会社案内</a></li>
					<li><a href="/company/mission.html" class="feadHover">企業理念</a></li>
					<li><a href="/company/business-philosophy.html" class="feadHover">事業理念</a></li>
					<li><a href="/company/about.html" class="feadHover">会社概要</a></li>
					<li><a href="/company/recruit.html" class="feadHover">採用情報</a></li>
				</ul>
			</dd>
			<dd>
				<p class="footerTitle">PCC事業</p>
				<ul class="footerNaviBox">
					<li><a href="/pcc/" class="feadHover">PCC</a></li>
					<li><a href="/pcc/iryohojin.html" class="feadHover">医療機関、医療法人の皆様へ</a></li>
					<li><a href="/pcc/enant.html" class="feadHover">医療テナント誘致を<br>希望する皆様へ</a></li>
				</ul>
			</dd>
		</dl>
	</div>
	<div id="footerNaviSecond">
		<div id="footerNaviSecondBox">
			<div class="footerTable">
				<div class="footerTableRow">
					<div class="footerTableCell">
						<div class="footerNaviSecondLeft">
						<p><a href="/policy.html" class="feadHover">個人情報保護方針</a></p>
							<p><a href="/terms.html" class="feadHover">サイトポリシー</a></p>
							<p><a href="/link.html" class="feadHover">関連リンク</a></p>
						</div>
					</div>
					<div class="footerTableCell footerContactConts">
						<div class="footerNaviSecondRight">
							<p id="footerContact" class="feadHover"><a href="/contact.html"><span>お問い合わせ</span></a></p>
							<p id="footerPageTopBtn" class="feadHover"><a href="#idx"><span>TOP</span></a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<p id="footerCopyRight">Copyright &copy; Smartmedical Corp. All Rights Reserved.</p>
	<div id="responsiveCheck"></div>
</footer>
<script type="text/javascript" src="/assets/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript">
var pageNum,
heightLinePc = ['.heightLine1','.heightLineMeter'],
heightLineTab = ['.heightLine1','.heightLineMeter'],
heightLineSp = ['.heightLine1','.heightLineMeter'];
</script>
<script type="text/javascript" src="/assets/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="/assets/js/ua.js"></script>
<script type="text/javascript" src="/assets/js/jquery.mCustomScrollbar.js"></script>
<script type="text/javascript" src="/assets/js/base.js"></script>
<script type="text/javascript" src="/assets/js/idx.js"></script>
</body>
</html>
