<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ' xlwF0bs8y@qv4c_:1-HjLlP&L/QkSqZZo-F.?PML/xtXF|>9,8[ZH0U*jd!W2Oa' );
define( 'SECURE_AUTH_KEY',   'TdaEdDLLDJxzj>Q+E;fd}-T>FCpn`l+KukA?Z_=kP7)Jf`zq_f62Pj*.m?FZRaK~' );
define( 'LOGGED_IN_KEY',     'bHV8n?G.0EzuZL>Yi0fgQI>@^wM_)6zk61 xz;woPUY+m Njo Wf?{,iRjU`PdOK' );
define( 'NONCE_KEY',         'KT]G`]a5Mj!Yx<0)P$}HOQ RJ:c.6- nO(*O$NK)KTdLh.&p2oj^SbZTQm]$qDp7' );
define( 'AUTH_SALT',         ')/F*{$)InS2Qk,dKI2YnO<>bC_+r9+pXy/J>,LIn49(1w}mfV+IQ_}P9+66QW[>o' );
define( 'SECURE_AUTH_SALT',  's(Y[.q-wDPWLh%LCcK{&8W=c?JjMz,bEj|@1+_,8C=Ln51Rz*oQ:}jp.QpF^ T0{' );
define( 'LOGGED_IN_SALT',    ':$mqc<qt1@5.KtS<Wvq=7B$s%^H5a-k{Q erBFa4$K<{iXvA?(;Lj^M+[bW#scHW' );
define( 'NONCE_SALT',        'F+.A]TWh691+]B~XO|B`~w@eDeR]4d>rC8{#O<=NQ}-:B,Ux RVnSJG_h8Ys8}KN' );
define( 'WP_CACHE_KEY_SALT', 'CNOt&T<DJZM<><6?Igb2m`YmQ|tI,9J)Hfd(RqNXF6DQ$^K|VMHMI=6{bAmnOatT' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
