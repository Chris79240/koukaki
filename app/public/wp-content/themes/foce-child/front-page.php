<?php

get_header();
?>

<main id="primary" class="site-main">

    <section class="banner">

        <img class="banner__parallaxe-logo" src="<?= get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt=" logo Fleurs d'oranger & chats errants" data-aos="fade-up" data-aos-duration="3000">

        <video class="banner__video" autoplay muted loop poster="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?>">
            <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/Studio-Koukaki-vidéo.mp4'; ?>" type="video/mp4">
        </video>

    </section>



    <section id="#story" class="story" data-aos="fade-up" data-aos-duration="3000">
        <h2>L'histoire</h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>


        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>


        <article id="characters">
            <div class="main-character">
                <div class="titre-personnages">
                    <h3>Les personnages</h3>
                </div>
                <!-- Ajout du Swiper -->
                <?php get_template_part('templates-parts/personnages'); ?>





            </div>
        </article>


        <article id="place">
            <div>
                <img class="gros-nuage" src="<?php echo get_theme_file_uri() . '/assets/images/big_cloud.png'; ?>" alt="gros nuage">
                <img class="petit-nuage" src="<?php echo get_theme_file_uri() . '/assets/images/little_cloud.png'; ?>" alt="petit nuage">
                <h3>Le Lieu</h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>

        </article>
    </section>


    <section id="studio" class="studio">

        <h2>Studio Koukaki</h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>

    <section id=" nomination aux oscars">
        <div class="nomination">
            <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/lespersonnages.png'; ?>" alt="Fleurs d'oranger & chats errants nominé aux oscars">
        </div>
    </section>


    <script src=" ./index.js/"></script>
    <script>
        AOS.init();
    </script>

</main><!-- #main -->

<?php
get_footer();
