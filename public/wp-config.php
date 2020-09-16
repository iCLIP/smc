<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、MySQL、テーブル接頭辞、秘密鍵、言語、ABSPATH の設定を含みます。
 * より詳しい情報は {@link http://wpdocs.sourceforge.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86 
 * wp-config.php の編集} を参照してください。MySQL の設定情報はホスティング先より入手できます。
 *
 * このファイルはインストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さず、このファイルを "wp-config.php" という名前でコピーして直接編集し値を
 * 入力してもかまいません。
 *
 * @package WordPress
 */

// 注意: 
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.sourceforge.jp/Codex:%E8%AB%87%E8%A9%B1%E5%AE%A4 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'latest-smc-corporate');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'root');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'iclip1127');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '-drfn.2@=#2H(0+Hbxn-0yq:Z[}SrIIv$;ZPDP+G2Y<M4Jula!Ds81hz+-a];4aR');
define('SECURE_AUTH_KEY',  'a(NYEsZ%M;lk1x=D9+,,H~?~Q_TZ-f_s(xM#{.|mc-uuy[D4Bt,7-/Hk=;s|n-v7');
define('LOGGED_IN_KEY',    '~-x`C)&qtCNvi$ma%(`-$Xxz}$7?9@(hHq~ww/@yz4]X;L8|4:~i<WBTXq|In<(r');
define('NONCE_KEY',        '?dk |ZS/SNen`c3{FyYxip{qANMRv$-!o>d% MeQsRf*u%m:4Y*XM2=JhshFWDjN');
define('AUTH_SALT',        '*lV0To_gjX%5B0w!{RT;?vv_&t*;7^yu>fQ~:NY|NS!!sKa^-A1F,hZ&X#<pFC>S');
define('SECURE_AUTH_SALT', 'C/Dq#!2~15|n-QNU?CZVGB`_?:Wy<uCcm0/+Ob1}V$;IRD+~W|Hqc+9%o{lJ=23B');
define('LOGGED_IN_SALT',   'l<}ckn0qiE421Y2fp>zJ%OKe.LX[rz{Ej|qZuL9*4&;b{<.)|I-rhk.5j28{&9we');
define('NONCE_SALT',       '`,V+g-2c=?4IzGEJ~JPq[z_0-F+dm/h.*$CSj-E5w8[L~l9?<<%c{^$c/>Ct; j}');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * ローカル言語 - このパッケージでは初期値として 'ja' (日本語 UTF-8) が設定されています。
 *
 * WordPress のローカル言語を設定します。設定した言語に対応する MO ファイルが
 * wp-content/languages にインストールされている必要があります。たとえば de_DE.mo を
 * wp-content/languages にインストールし WPLANG を 'de_DE' に設定すると、ドイツ語がサポートされます。
 */
define('WPLANG', 'ja');

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
