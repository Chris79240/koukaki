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


            <?php wp_head(); ?>
        </head>

        <body <?php body_class(); ?>>
            <?php wp_body_open(); ?>
            <div id="page" class="site">
                <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

                <header id="masthead" class="site-header">
                    <nav id="site-navigation" class="main-navigation">
                        <h1>Fleur d'oranger & chats errants</h1>

                        <button type="button" aria-label="toggle curtain navigation" class="nav-toggler">

                            <span class="line l1"></span>
                            <span class="line l2"></span>
                            <span class="line l3"></span>
                            
                        </button>


                        <ul>
                            <li><a href="#story">Histoire</a></li>
                            <li><a href="#characters">Personnages</a></li>
                            <li><a href="#place">Lieu</a></li>
                            <li><a href="#studio">Studio Koukaki</a></li>
                        </ul>

                    </nav><!-- #site-navigation -->
                </header><!-- #masthead -->