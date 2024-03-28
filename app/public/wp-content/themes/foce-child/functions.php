<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
    //Met en file d'attente le style du thème parent en utilisant son chemin absolu et le nom de fichier 'style.css'.
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

    //Met en file d'attente le style spécifique au thème enfant, notant le chemin vers 'sass/style.css',
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/sass/style.css');

    // Met en file d'attente un script JavaScript spécifique au thème enfant, avec une dépendance à jQuery,
    wp_enqueue_script('child-theme-script', get_stylesheet_directory_uri() . '/index.js', array('jquery'), '', true);

    // Charge le script JavaScript de Swiper depuis un CDN, permettant d'ajouter des fonctionnalités de carrousel.
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');

    // Charge le style CSS de AOS (Animate On Scroll) depuis un CDN,
    // permettant des animations lors du défilement.
    wp_enqueue_style('aos-css', 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css', array(), '2.3.4');

    // Charge le script JavaScript de AOS depuis un CDN, pour activer les animations déclarées par le CSS chargé précédemment.
    wp_enqueue_script('aos-js', 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js', array('jquery'), '2.3.4', true);
}


// La condition suivante vérifie si le thème actif est un thème enfant (en comparant les chemins des répertoires de styles).
// Cela permet d'effectuer des actions spécifiques au thème enfant concernant les options de personnalisation.
if (get_stylesheet() !== get_template()) {

    //Avant de mettre à jour les options de personnalisation du thème enfant, cette action copie les valeurs
    // au thème parent pour garantir une cohérence entre les thèmes parent et enfant.
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // Empêche la mise à jour des options de personnalisation du thème enfant.s
    }, 10, 2);

    // Permet de récupérer les options de personnalisation du thème parent pour utilisation dans le thème enfant,
    // assurant que le thème enfant hérite des options de personnalisation du parent.
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}
