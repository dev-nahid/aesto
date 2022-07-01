<?php
/**
 * Theme option using customizer.
 * 
 * @package Aesto
 * @since 1.0.0
 */

 function aesto_customizer_register( $wp_customize ){

    $wp_customize->add_section( 'aesto_social_links', array(
        'title' => __( 'Social Media Links', 'aesto' ),
        'priority' => 105,
    ) );

    $wp_customize->add_setting( 'aesto_facebook_url', array(
        'type' => 'theme_mod',
        'transport' => 'refresh',
    ) );
    $wp_customize->add_control( 'aesto_facebook_url', array(
        'label' => __( 'Facebook', 'aesto' ),
        'type' => 'url',
        'section' => 'aesto_social_links',
    ) );
    $wp_customize->add_setting( 'aesto_twitter_url', array(
        'type' => 'theme_mod',
        'transport' => 'refresh',
    ) );
    $wp_customize->add_control( 'aesto_twitter_url', array(
        'label' => __( 'Twitter', 'aesto' ),
        'type' => 'url',
        'section' => 'aesto_social_links',
    ) );
    $wp_customize->add_setting( 'aesto_rss_url', array(
        'type' => 'theme_mod',
        'transport' => 'refresh',
    ) );
    $wp_customize->add_control( 'aesto_rss_url', array(
        'label' => __( 'RSS', 'aesto' ),
        'type' => 'url',
        'section' => 'aesto_social_links',
    ) );

 }
 add_action( 'customize_register', 'aesto_customizer_register' );