<?php
/**
 * Aesto functions and definitions
 *
 * @package Aesto
 * @since 1.0.0
 */
// Below define fucntion will be remove after complete the production.
if ( site_url() == "http://localhost/wp" ){
	define( "VERSION", time() );
}else{
	define( "VERSION", wp_get_theme()->get( "version" ));
}

if ( ! function_exists( 'aesto_theme_setup' ) ) :

	function aesto_theme_setup() {

		load_theme_textdomain( 'aesto', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );

		add_theme_support( 'title-tag' );

		add_theme_support( 'post-thumbnails' );

		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary', 'aesto' ),
				'secondary' => esc_html__( 'Secondary', 'aesto' ),
			)
		);

		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'aesto_theme_setup' );


/**
 * Register widget area.
 */
function aesto_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer Top', 'aesto' ),
			'id'            => 'popular-categories',
			'description'   => esc_html__( 'Add widgets here.', 'aesto' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s it-popular-tags-item">',
			'after_widget'  => '</div>',
			'before_title'  => '<div class="it-popular-tags-title"><a>',
			'after_title'   => '</a></div>',
		)
	);
}
add_action( 'widgets_init', 'aesto_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function aesto_theme_assets() {

	//CSS
	wp_enqueue_style('aesto-app', get_theme_file_uri( '/assets/built/app.min.css' ), array( ), VERSION);
	wp_enqueue_style( 'aesto-default', get_stylesheet_uri(), array( ), VERSION ); 

	// JS
	wp_enqueue_script( 'aesto-main', get_theme_file_uri( '/assets/js/main.js' ), array( 'jquery' ), VERSION, true );
	wp_enqueue_script( 'aesto-app', get_theme_file_uri( '/assets/built/app.min.js' ), array(  ), VERSION, false );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'aesto_theme_assets' );

/**
 * Get custom logo url.
 */
function get_custom_logo_url() {
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
    return $image[0];
}
/**
 * Post time ago function
 */
function aesto_post_time_ago() {
		return sprintf( esc_html__( '%s ago', 'aesto' ), human_time_diff(get_the_time ( 'U' ), current_time( 'timestamp' ) ) );
	}
	add_filter( 'the_time', 'aesto_post_time_ago' );

/**
 * Calculate Post Reading Time
 */
function aesto_post_reading_time() {

	// GET THE CONTENT OF THE WORDPRESS POST
	$content = get_post_field( 'post_content' );
		
	// COUNT THE NUMBER OF WORDS
	$word_count = str_word_count( strip_tags( $content ) );
		
	// COUNT THE NUMBER OF IMAGES
	$image_count = substr_count( $content, '<img' );
		
	// READING TIME OF TEXTS - 200 WORDS PER MINUTE
	$reading_time = $word_count / 200;
		
	// READING TIME OF IMAGES - 10 SECONDS PER IMAGE
	$image_time = ( $image_count * 10 ) / 60;
		
	// ADD READING TIME OF TEXTS AND IMAGES
	$total_time = round( $reading_time + $image_time );
		
	// DETERMINE IF SINGULAR OR PLURAL
	if ( $total_time == 1 ) { $minute = " min"; }
	else { $minute = " mins"; }
		
	return $total_time . $minute;
	
	}

/**
 * Posts by category widget.
 */
require get_template_directory() . '/inc/widgets/posts-by-category.php';
/**
 * Ajax Load more pagination 
 */
require get_template_directory() . '/inc/ajax.php';
require get_template_directory() . '/inc/customizer.php';