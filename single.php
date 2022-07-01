<?php
/**
 * The template for displaying all single posts
 * 
 * @package Aesto
 * @since 1.0.0
 */
get_header();

if ( have_posts() ) : 
    while ( have_posts() ) : the_post(); ?>

<article <?php post_class(array( 'it-article' )); ?>>

    <header class="it-header it-canvas">
        <?php if ( has_post_thumbnail() ) : ?>
        <figure class="it-feature-image-wrapper">
            <?php the_post_thumbnail( 'large', array( 'class' => 'it-feature-image' ) ); ?>
        </figure>
        <?php endif; ?>
        <div class="it-post-meta">
            <span class="it-post-by">
                <?php the_author_link(); ?>
            </span>
            <span class="it-pipe">&#124;</span>
            <span>
                <time><?php the_time(); ?></time>
            </span>
            <span class="it-pipe">&#124;</span>
            <span><?php echo aesto_post_reading_time() . " read"; ?></span>
        </div>
        <h1 class="it-title"><?php the_title(); ?></h1>
        <?php if ( has_excerpt() ) : ?>
        <p class="it-excerpt"><?php the_excerpt(); ?></p>
        <?php endif; ?>
    </header>

    <div class="it-content it-canvas">
        <?php the_content(); ?>
    </div>

    <footer class="it-footer it-canvas">
        <div class="it-post-info">
            <div class="it-post-tags">
                <?php echo get_the_category_list( ' ', ' ', $post->ID ); ?>
            </div>
            <?php get_template_part( 'template-parts/social-share' ); ?>
        </div>

        <?php if ( comments_open() || get_comments_number() ) :
                comments_template();
                endif; ?>

    </footer>

</article>

<aside class="it-readmore">
    <div class="it-readmore-inner it-container">
        <div class="it-readmore-next">
            <?php $next_post = get_next_post(); 
            if ( is_a( $next_post, 'WP_Post' ) ) : ?>
            <a href="<?php echo get_permalink( $next_post->ID ); ?>">
                <div class="it-readmore-media">
                    <?php echo get_the_post_thumbnail( $next_post->ID, 'thumbnail' ); ?>
                </div>
                <div class="it-readmore-content">
                    <div class="it-arrow-wrapper">
                        <?php get_template_part( 'assets/icons/arrow-left' );  echo __( ' Next Post ', 'aesto' ); ?>
                    </div>
                    <h4><?php echo get_the_title( $next_post->ID ); ?></h4>
                </div>
            </a>
            <?php endif; ?>
        </div>
        <div class="it-readmore-prev">
            <?php $prev_post = get_previous_post(); 
            if ( is_a( $prev_post, 'WP_Post' ) ) : ?>
            <a href="<?php echo get_permalink( $prev_post->ID ); ?>">
                <div class="it-readmore-content">
                    <div class="it-arrow-wrapper">
                        <?php echo __( 'Previous Post ', 'aesto'); get_template_part( 'assets/icons/arrow-right' ); ?>
                    </div>
                    <h4><?php echo get_the_title( $prev_post->ID ); ?></h4>
                </div>
                <div class="it-readmore-media">
                    <?php echo get_the_post_thumbnail( $prev_post->ID, 'thumbnail' ); ?>
                </div>
            </a>
            <?php endif; ?>
        </div>
    </div>
</aside>
<?php endwhile; endif; 
get_footer(); 