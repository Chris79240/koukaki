<?php
/**
 * Fleurs d\'oranger & Chats errants Theme Customizer
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function foce_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'foce_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'foce_customize_partial_blogdescription',
			)
		);
	}
}
add_action( 'customize_register', 'foce_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function foce_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function foce_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function foce_customize_preview_js() {
	wp_enqueue_script( 'foce-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), _S_VERSION, true );
}
add_action( 'customize_preview_init', 'foce_customize_preview_js' );

function foce_customize_story_section($wp_customize) {


}

add_action( 'customize_register', 'foce_customize_story_section' );

function front_sections( $wp_customize ){
    //Setting
    $wp_customize->add_setting( 'story', array( 'default' => '' ) );
    $wp_customize->add_setting( 'place', array( 'default' => '' ) );


    //Section
    $wp_customize->add_section(
        'story-section',
        array(
            'title' => __( 'Story Section', 'foce' ),
            'priority' => 30,
            'description' => __( 'Enter the details of the story', 'foce' )
        )
    );
    //Section
    $wp_customize->add_section(
        'place-section',
        array(
            'title' => __( 'Place Section', 'foce' ),
            'priority' => 30,
            'description' => __( 'Enter the details of the place', 'foce' )
        )
    );

    //Control
    $wp_customize->add_control(
        new WP_Customize_Control(
            $wp_customize, 'story',
            array(
                'label' => __( 'Story', 'foce' ),
                'type' => 'textarea',
                'section' => 'story-section',
                'settings' => 'story'
            )
        )
    );
    //Control
    $wp_customize->add_control(
        new WP_Customize_Control(
            $wp_customize, 'place',
            array(
                'label' => __( 'Place', 'foce' ),
                'type' => 'textarea',
                'section' => 'place-section',
                'settings' => 'place'
            )
        )
    );

}
add_action('customize_register', 'front_sections');