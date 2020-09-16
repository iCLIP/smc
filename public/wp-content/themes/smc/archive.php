<?php
/* -------------------------------------------------------------------------------------------------
 * #topicPath
 * -------------------------------------------------------------------------------------------------
 */
$topic_path = get_topic_path();


/* -------------------------------------------------------------------------------------------------
 * #archive_items
 * -------------------------------------------------------------------------------------------------
 */
$the_term = get_term_by("slug", $term, "news_category");
// classの出し分け
$class = get_class_by_term($the_term);
$years = get_archive_items($the_term->slug);
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
<meta name="copyright" content="Copyright (C) THE SMART MEDICAL CO.,LTD, All Rights Reserved.">
<meta name="keywords" content="スマートメディカル株式会社,医療モール,医療不動産開発,音声感情認識,こころの問題,メンタルヘルス対策,医療コンサルティング">
<meta name="description" content="スマートメディカルのコーポレートサイト。スマートメディカルの会社情報、Primary Care Clinic（次世代型医療クリニック）事業、ICTセルフケア事業、取り扱い商品「VALKEE」についてのお知らせのご案内です。">
<title>ニュース一覧｜スマートメディカル株式会社</title>

<!--  Include Css -->
<link rel="stylesheet" href="/css/base.css" type="text/css" media="screen,print">
<link rel="stylesheet" href="/css/news.css" type="text/css" media="screen,print">
<script type="text/javascript" src="/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="/js/header.js"></script>
<script type="text/javascript" src="/js/footer.js"></script>
<script type="text/javascript" src="/js/heightLine.js"></script>
<script type="text/javascript">
<!--
var heightLine = 0;
//-->
</script>
<script type="text/javascript" src="/js/news.js"></script>
<script type="text/javascript" src="/js/base.js"></script>

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
<body>

<!-- continuer start -->
<div id="continuer" class="newsList <?php print $class; ?>">

<h2 class="pt30 pb25"><img src="/img/news/title.png" width="418" height="44" alt="スマートメディカル ニュースリリース　SMARTMEDICAL NEWS"></h2>

<!-- navi start -->
<ul id="navi">
<li class="firstNavi"><p<?php if ($the_term->slug === 'pcc'){ print ' class="naviCarent"'; } ?>><a href="/news/pcc">PCC事業</a></p></li>
<li><p<?php if ($the_term->slug === 'ir'){ print ' class="naviCarent"'; } ?>><a href="/news/ir">広報・IR情報</a></p></li>
</ul>
<!-- navi end -->

<!-- news start -->
<?php
    $height_no = 0;
?>

<?php foreach ($years as $year): ?>
        <?php
            $c = 0;
        ?>
    <ul class="newsYear" id="newsYear<?php print $year['name']; ?>">
        <li><img src="/img/news/year_<?php print $year['name']; ?>.png" width="118" height="35" alt="<?php print $year['name']; ?>"></li>
        <li class="newsBtn"><a href="javascript:void(0);" class="newsOpenBtn<?php if ($year['is_open']){ print ' noObj'; } ?>"><img src="/img/news/btn_open.png" width="65" height="14" alt="OPEN" class="hover"></a><a href="javascript:void(0);" class="newsCloseBtn"><img src="/img/news/btn_close.png" width="65" height="14" alt="CLOSE" class="hover"></a></li>
    </ul>

    <div class="newsListInner" id="newsList<?php print $year['name']; ?>">
    <?php if ($year['has_item']): ?>
    <dl>
        <?php foreach ($year['items'] as $item_archive): ?>

        <?php
            if (($c % 4) === 0) {
                $height_no = $height_no + 1;
            }
            $c = $c + 1;
        ?>
        <dd>
        <a href="<?php print $item_archive['href']; ?>">
        <p class="pb15"><?php print $item_archive['img']; ?></p>
        <div class="heightLine-<?php print $height_no; ?>">
        <p class="newsThumTitle"><span><?php print $item_archive['date']; ?></span><?php print $item_archive['title']; ?></p>
        </div>
        <p class="newsThumDetail">詳しくはこちら</p>
        </a>
        <p class="newsThumBtm heightClear"></p>
        </dd>
        <?php endforeach; ?>
    </dl>
    <?php else: ?>
        <div class="noNewsList">
        <p class="noNewsInner">ニュースはありません。</p>
        <p class="noNewsBtm"></p>
        </div>
    <?php endif; ?>
    </div>
<?php endforeach; ?>
<!-- news end -->

</div>
<!-- continuer end -->

<!-- topicPath start -->
<p id="topicPath"><a href="/">HOME</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;ニュースリリース <?php print esc_html($the_term->name); ?></p>
<!-- topicPath end -->

</body>
</html>