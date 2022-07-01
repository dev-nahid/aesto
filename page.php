<?php
/**
 * The template for displaying all pages
 *
 * @package Aesto
 * @since 1.0.0
 */

get_header();

if ( have_posts() ) : 
    while ( have_posts() ) : the_post(); ?>

<article <?php post_class( 'it-article' ); ?>>
    <header class="it-header it-canvas">
        <?php if ( has_post_thumbnail() ) : ?>
        <figure class="it-feature-image-wrapper">
            <?php the_post_thumbnail( 'medium', array( 'class' => 'it-feature-image' ) ); ?>
        </figure>
        <?php endif; ?>
        <h1 class="it-title"><?php the_title(); ?></h1>
        <?php if ( has_excerpt() ) : ?>
        <p class="it-excerpt"><?php the_excerpt(); ?></p>
        <?php endif; ?>
    </header>
    <div class="it-content it-canvas">
        <?php the_content(); ?>
    </div>
</article>

<?php endwhile; endif; 
get_footer(); 