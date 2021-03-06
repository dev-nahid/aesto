<?php
/**
 * The ajax function .
 * 
 * @package Aesto
 * @since 1.0.0
 */

function aesto_load_more() {
	
	$paged = $_POST[ "page" ] + 1;
	
	$query = new WP_Query( array(
		'post_type' => 'post',
		'post_status' => 'publish',
		'paged' => $paged
	) );
	
	if ( $query->have_posts() ):
						
		while( $query->have_posts() ): $query->the_post();
		
			get_template_part( 'template-parts/content', get_post_format() );
		
		endwhile;
		
	endif;
	
	wp_reset_postdata();
	
	die();

 }
 
add_action( 'wp_ajax_nopriv_aesto_load_more', 'aesto_load_more' );
add_action( 'wp_ajax_aesto_load_more', 'aesto_load_more' );