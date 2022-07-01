<?php
/**
 * The main header file.
 * 
 * @package Aesto
 * @since 1.0.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <script>
            if(typeof(Storage) !== 'undefined') {
               if (localStorage.getItem('selected-theme') == 'light') {
                   document.documentElement.setAttribute('data-theme', 'light');
               }
               else if (localStorage.getItem('selected-theme') == 'dark') {
                   document.documentElement.setAttribute('data-theme', 'dark');
               }
            }
        </script>
    <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <div class="it-viewport">
            <?php get_template_part( 'template-parts/site-structure/site', 'header' ); ?>