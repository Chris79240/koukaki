        <?php

        /**
         * The header for our theme
         *
         * This is the template that displays all of the <head> section and everything up until <div id="content">
         *
         * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
         *
         * @package Fleurs_d\'oranger_&_Chats_errants
         */

        ?>
        <!doctype html>
        <html <?php language_attributes(); ?>>

        <head>
            <meta charset="<?php bloginfo('charset'); ?>">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="profile" href="https://gmpg.org/xfn/11">
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


            <?php wp_head(); ?>
        </head>

        <body class="burger" <?php body_class(); ?>>
            <?php wp_body_open(); ?>
            <div id="page" class="site">
                <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

                <header id="masthead" class="site-header">
                    <nav id="site-navigation" class="main-navigation menu-burger">

                        <ul class="menu-ferme">
                            <li class="site-title">
                                <h1>Fleur d'oranger & chats errants</h1>
                            </li>

                            <div class="toggle">
                                <button type="button" aria-label="toggle curtain navigation" class="nav-toggler">

                                    <span class="line l1"></span>
                                    <span class="line l2"></span>
                                    <span class="line l3"></span>

                                </button>

                            </div>

                        </ul>

                        <div class="menu-ouvert">
                            <div class="images-menu">
                                <img src="<?php echo get_stylesheet_directory_uri() . './assets/images/minorchid.png'; ?> " alt="Orchidée" class="orchidee">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/minflower.png'; ?> " alt="Fleur" class="fleur">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/minsunflower.png'; ?> " alt="Marguerite" class="marguerite">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/minhibiscusfooter.png'; ?> " alt="Fleur hibiscus" class="hibiscus">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/minRandomFlower.png'; ?> " alt="Fleur random" class="fleurMauve">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/minchatmauve.png'; ?> " alt="Chat mauve" class="chat-mauve">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/minchatorange.png'; ?> " alt="Chat orange" class="chat-orange">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/minchatgris.png'; ?> " alt="Chat gris" class="chat-gris">
                            </div>

                            <div class="logo-menu">
                                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/minimagelogoparalax.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
                            </div>

                            <div>
                                <ul class="burger">
                                    <li><a href="#story">Histoire</a></li>
                                    <li><a href="#character">Personnages</a></li>
                                    <li><a href="#place">Lieu</a></li>
                                    <li><a href="#studio">Studio Koukaki</a></li>
                                </ul>
                            </div>

                            <div class="footer-burger">
                                <ul class="burger-menu-footer-link">
                                    <li><a href="#colophon">STUDIO KOUKAKI</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav><!-- #site-navigation -->
                </header><!-- #masthead -->