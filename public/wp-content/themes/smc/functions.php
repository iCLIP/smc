<?php
/* -------------------------------------------------------------------------------------------------
 * remove_menus
* -------------------------------------------------------------------------------------------------
*/
function remove_menus(){
    global $menu;

    $restricted = array(
            '投稿'
    );

    foreach ($menu as $k => $v) {
        $item_terms = explode(' ', $v[0]);
        $item = $item_terms[0];
        if (in_array($item, $restricted)) {
            unset($menu[$k]);
        }
    }

    remove_submenu_page('edit.php?post_type=shop_info', 'post-new.php?post_type=shop_info');
}
add_action('admin_menu', 'remove_menus');

/* -------------------------------------------------------------------------------------------------
 * thumbnail size
* -------------------------------------------------------------------------------------------------
*/
add_theme_support('post-thumbnails');
add_image_size('archive-thumb', 201, 151, TRUE);

/* -------------------------------------------------------------------------------------------------
 * Common functions
 * -------------------------------------------------------------------------------------------------
 */
function cpt_get_labels($cpt_name)
{
    $labels = array(
            'name' => _x($cpt_name, 'post type general name'),
            'singular_name' => _x($cpt_name, 'post type singular name'),
            'add_new' => _x('新規追加', 'news'),
            'add_new_item' => __('新規' . $cpt_name . 'を追加'),
            'edit_item' => __($cpt_name . 'の編集'),
            'new_item' => __('新しい' . $cpt_name),
            'view_item' => __($cpt_name . 'を見る'),
            'search_items' => __($cpt_name . 'を探す'),
            'not_found' =>  __($cpt_name . 'はありません'),
            'not_found_in_trash' => __('ゴミ箱に' . $cpt_name . 'はありません'),
            'parent_item_colon' => ''
    );
    return $labels;
}

/* -------------------------------------------------------------------------------------------------
 * filter
* -------------------------------------------------------------------------------------------------
*/
function terms($a, $b)
{
    if ( intval($a->term_order) == intval($b->term_order)) {
        return 0;
    }
    return (intval($a->term_order) < intval($b->term_order)) ? -1 : 1;
}

function terms_sort($terms, $object_ids, $taxonomies, $args)
{
    if (!is_admin()) {
        usort($terms , "terms");
    }
    return $terms;
}
add_filter('wp_get_object_terms', 'terms_sort', 99, 4);

/* -------------------------------------------------------------------------------------------------
 * Custom Post Type: news
 * -------------------------------------------------------------------------------------------------
 */
add_action('init', 'cpt_news_init');
function cpt_news_init()
{
    $labels = cpt_get_labels('news');
    $args = array(
            'labels' => $labels,
            'public' => TRUE,
            'show_ui' => TRUE,
            'query_var' => TRUE,
            'capability_type' => 'post',
            'has_archive' => TRUE,
            'rewrite' => array(
                    'slug' => 'news/detail',
                    'with_front' => FALSE,
                    'pages' => TRUE,
                    'feeds' => FALSE
            ),
            'hierarchical' => FALSE,
            'menu_position' => 5,
            'supports' => array('title', 'editor', 'thumbnail', 'comments', 'revisions')
    );

    register_post_type('news', $args);

    // news_categoryを追加
    $args = array(
            'labels' => array(
                    'name' => 'ニュースカテゴリー',
                    'singular_name' => 'ニュースカテゴリー',
                    'search_items' => 'ニュースカテゴリーを検索',
                    'popular_items' => 'よく使われているニュースカテゴリー',
                    'all_items' => 'すべてのニュースカテゴリー',
                    'parent_item' => '親ニュースカテゴリー',
                    'edit_item' => 'ニュースカテゴリーの編集',
                    'update_item' => '更新',
                    'add_new_item' => 'ニュースカテゴリーを追加',
                    'new_item_name' => '新しいニュースカテゴリー'
            ),
            'public' => TRUE,
            'show_ui' => TRUE,
            'hierarchical' => TRUE,
            'query_var' => TRUE,
            'rewrite' => array(
                    'slug' => 'news',
                    'with_front' => FALSE
            )
    );
    register_taxonomy('news_category', 'news', $args);

    flush_rewrite_rules();
}

/* -------------------------------------------------------------------------------------------------
 * top
* -------------------------------------------------------------------------------------------------
*/

function get_top_items()
{
    $items = array();

    $args = array(
            'post_type' => 'news',
            'orderby' => 'post_date',
            'order' => 'DESC',
            'posts_per_page' => 10,
            'tax_query' => array(
                array(
                    'taxonomy' => 'news_category',
                    'field' => 'slug',
                    'terms' => array( 'ppc','ir','performance' ),
                    ),
            ),
    );
    $posts = get_posts($args);

    foreach ($posts as $post) {
        $ts = strtotime($post->post_date);
        $item = array();
        $item['title'] = $post->post_title;
        $item['date'] = date('Y.m.d', $ts);
        $item['href'] = '/news/detail/' . $post->ID . '/';
        $item['terms'] = array();

        $terms = wp_get_object_terms($post->ID, 'news_category');

        $first_slug = '';
        foreach ($terms as $term) {
            $slug = $term->slug;
            if ($first_slug === '') {
                $first_slug = $slug;
            }
            array_push($item['terms'], $slug);
        }

        switch ($first_slug) {
        case 'pcc':
            $class = 'newsPcc';
            break;
        case 'ict':
            $class = 'newsIct';
            break;
        case 'valkee':
            $class = 'newsValkee';
            break;
        case 'media':
            $class = 'newsMedia';
            break;
        case 'other':
        default:
            $class = 'newsOther';
            break;
        }

        $item['class'] = $class;

        array_push($items, $item);

    }

    return $items;
}


function get_top_items_by_slugname($slug)
{
    // inputチェック
    switch($slug){
        case 'pcc':
        case 'ict':
        case 'healthcare':
        case 'ir':
            break;
        default:
            return NULL;
    }

    $items = array();

    $args = array(
            'post_type' => 'news',
            'orderby' => 'post_date',
            'order' => 'DESC',
            'posts_per_page' => 10,
            'term' => $slug,
            'taxonomy' => 'news_category'
    );
    $posts = get_posts($args);

    foreach ($posts as $post) {
        $ts = strtotime($post->post_date);
        $item = array();
        $item['title'] = $post->post_title;
        $item['date'] = date('Y.m.d', $ts);
        $item['href'] = '/news/detail/' . $post->ID . '/';
        $item['terms'] = array();

        $terms = wp_get_object_terms($post->ID, 'news_category');

        $first_slug = '';
        foreach ($terms as $term) {
            $slug = $term->slug;
            if ($first_slug === '') {
                $first_slug = $slug;
            }
            array_push($item['terms'], $slug);
        }

        switch ($first_slug) {
        case 'pcc':
            $class = 'newsPcc';
            break;
        case 'ict':
            $class = 'newsIct';
            break;
        case 'valkee':
            $class = 'newsValkee';
            break;
        case 'media':
            $class = 'newsMedia';
            break;
        case 'other':
        default:
            $class = 'newsOther';
            break;
        }

        $item['class'] = $class;

        array_push($items, $item);

    }

    return $items;
}




/* -------------------------------------------------------------------------------------------------
 * archive
* -------------------------------------------------------------------------------------------------
*/

function get_archive_items($term)
{
    $years = array();

    $year_start = date('Y');
    $year_end = '2011';
    $year_cur = $year_start;

    while ($year_cur >= $year_end) {
        $year = array();

        $year['name'] = $year_cur;
        $year['is_open'] = ($year_cur === $year_start);
        $year['has_item'] = FALSE;
        $year['items'] = array();
        $years[$year['name']] = $year;

        $year_cur = (string) (intval($year_cur) - 1);
    }

    $args = array(
            'post_type' => 'news',
            'orderby' => 'post_date',
            'order' => 'DESC',
            'posts_per_page' => -1,
            'tax_query' => array(
                    array(
                            'taxonomy' => 'news_category',
                            'terms' => array($term),
                            'field' => 'slug',
                            'operator' => 'IN'
                    )
            )
    );
    $posts = get_posts($args);

    foreach ($posts as $post) {
        $ts = strtotime($post->post_date);
        $name = date('Y', $ts);
        $item = array();
        $item['title'] = $post->post_title;
        $item['date'] = date('Y.m.d', $ts);
        $item['href'] = '/news/detail/' . $post->ID . '/';

        // 記事にぶら下がる画像の情報を取得
        $images = get_children(array(
                'post_parent' => $post->ID,
                'post_type' => 'attachment',
                'exclude' => get_post_thumbnail_id($post->ID),
                'post_mime_type' => 'image'
        ));
        // 画像情報の最初の配列だけを取得
        $first_img = array_shift($images);
        if ($first_img !== NULL) {
            $item['img'] = wp_get_attachment_image($first_img->ID, 'archive-thumb');
        } else {
            // 記事に画像がなかった場合にサムネイルに表示する画像
            $item['img'] = '<img width="201" height="151" src="/img/news/thum_noimg.jpg" alt="noimage" />';
        }

        $years[$name]['has_item'] = TRUE;
        array_push($years[$name]['items'], $item);

    }

    return $years;
}

/* -------------------------------------------------------------------------------------------------
 * Topic Path
* -------------------------------------------------------------------------------------------------
*/
function get_topic_path()
{
    global $post;

    $tp = '';
    $tp .= '<a href="/">HOME</a>';
    $tp .= '&nbsp;&gt;&nbsp;';

    if (is_single()) {
        $tp .= $post->post_title;
    }

    return $tp;
}

/* -------------------------------------------------------------------------------------------------
 * 各Term アーカイブ画面のclass出し分け
* -------------------------------------------------------------------------------------------------
*/
//function get_class_by_term($the_term)
//{
//    if ($the_term->slug === 'pcc') {
//        $class = 'newsPcc';
//    } else if ($the_term->slug === 'ict') {
//        $class = 'newsIct';
//    } else if ($the_term->slug === 'valkee') {
//        $class = 'newsValkee';
//    } else if ($the_term->slug === 'media') {
//        $class = 'newsMedia';
//    } else if ($the_term->slug === 'other') {
//        $class = 'newsOther';
//    }
//    return $class;
//}

function get_class_by_term($the_term)
{
    if ($the_term->slug === 'pcc') {
        $class = 'newsPcc';
    } else if ($the_term->slug === 'ict') {
        $class = 'newsIct';
    } else if ($the_term->slug === 'healthcare') {
        $class = 'newsHealthCare';
    } else if ($the_term->slug === 'ir') {
        $class = 'newsIr';
    }
    return $class;
}