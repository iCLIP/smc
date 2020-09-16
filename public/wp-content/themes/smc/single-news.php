<?php
/* -------------------------------------------------------------------------------------------------
 * #topicPath
 * -------------------------------------------------------------------------------------------------
 */
$topic_path = get_topic_path();

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
<title><?php print esc_html(the_title()); ?>｜スマートメディカル株式会社</title>

<!--  Include Css -->
<link rel="stylesheet" href="/css/base.css" type="text/css" media="screen,print">
<link rel="stylesheet" href="/css/news.css" type="text/css" media="screen,print">
<script type="text/javascript" src="/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="/js/header.js"></script>
<script type="text/javascript" src="/js/footer.js"></script>
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
<div id="continuer" class="newsDetail">

<h2 class="pt30 pb25"><img src="/img/news/title.png" width="418" height="44" alt="スマートメディカル ニュースリリース　SMARTMEDICAL NEWS"></h2>

<!-- navi start -->
<ul id="navi">
<li class="firstNavi"><p<?php if(has_term('pcc', 'news_category')): ?>  class="naviCarent"<?php endif; ?>><a href="/news/pcc">PCC事業</a></p></li>
<li><p<?php if(has_term('ir', 'news_category')): ?> class="naviCarent"<?php endif; ?>><a href="/news/ir">広報・IR情報</a></p></li>
</ul>
<!-- navi end -->

<div id="newsTitle">
<span><?php the_time('Y.m.j') ?></span>
<h3><?php the_title(); ?></h3>
</div>

<div id="newsInner">

<?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <!-- 投稿内容　ここから -->
                        <?php the_content(); ?>
                        <!-- 投稿内容　ここまで -->

                    <?php endwhile; ?>

                    <?php else : ?>

                        <h2 class="title">記事が見つかりませんでした。</h2>
                        <p>検索で見つかるかもしれません。</p><br />
                        <?php get_search_form(); ?>

<?php endif; ?>


</div>
<p id="newsInnerBtm">
<?php if(has_term('pcc', 'news_category')): ?><a href="/news/pcc" class="newsPcc">PCC事業</a><?php endif; ?>
<?php if(has_term('ir', 'news_category')): ?><a href="/news/ir" class="newsIr">広報・IR情報</a><?php endif; ?>
</p>
</div>
<!-- continuer end -->

<!-- topicPath start -->
<p id="topicPath"><?php print $topic_path; ?></p>
<!-- topicPath end -->

</body>
</html>