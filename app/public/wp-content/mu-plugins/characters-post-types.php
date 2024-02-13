<?php
function face_characters_post_types() {
    register_post_type('characters', array(
        'rewrite' => array('slug' => 'characters'),
        'has_archive' => false,
        'public' => true,
        'show_in_rest' => false,

        'labels' => array(
            'name' => 'Personnages',
            'add_new_item' => 'Ajouter un nouveau Personnage',
            'edit_item' => 'Modifier  Personnage',
            'all_items' => 'Tours les personnages',
            'singular_name' => 'Personnage'
        ),
        'supports' => array('title', 'thumbnail'),
        'menu_icon' => 'dashicons-pets'
    ));
}
add_action('init', 'face_characters_post_types');
function face_add_custom_box() {
    $screens = [ 'characters' ];
    foreach ( $screens as $screen ) {
        add_meta_box(
            'face_box_character',                 // Unique ID
            'Main Character',      // Box title
            'face_custom_box_html',  // Content callback, must be of type callable
            $screen                            // Post type
        );
    }
}
function face_custom_box_html( $post ) {
    $value = get_post_meta( $post->ID, '_main_char_field', true );
    ?>

    <input type="checkbox" <?php if($value == 'on'){ echo 'checked'; }?> name="main_char_field" id="main_char_field" class="postbox">
    <label for="main_char_field">Is Main Character</label>
    <?php
}
add_action( 'add_meta_boxes', 'face_add_custom_box' );

function face_save_postdata( $post_id ) {
    if ( array_key_exists( 'main_char_field', $_POST ) ) {
        update_post_meta(
            $post_id,
            '_main_char_field',
            $_POST['main_char_field']
        );
    }else{
        update_post_meta(
            $post_id,
            '_main_char_field',
            0
        );
    }
}
add_action( 'save_post', 'face_save_postdata' );