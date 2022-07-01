<?php
/**
 * Template Name: Author List
 * This template able to show all author in one place.
 *
 * @package Aesto
 * @since 1.0.0
 */
get_header(); 
?>

<div class="it-page">
    <div class="it-container">
        <?php if ( have_posts() ) : the_post(); ?>
        <header class="it-page-head">
            <?php if ( has_post_thumbnail() ) : ?>
            <figure class="it-feature-image-wrapper">
                <?php if ( has_post_thumbnail()) : 
					the_post_thumbnail( 'large', array( 'class' => 'it-feature-image' ) );
				endif; ?>
            </figure>
            <?php endif; ?>
            <h1 class="it-title"><?php the_title(); ?></h1>
            <?php if ( has_excerpt() ) : ?>
            <p class="it-excerpt"><?php the_excerpt(); ?></p>
            <?php endif; ?>
        </header>
        <?php endif; ?>
    </div>
    <div class="it-container">
        <div class="it-authors it-grid-c3">
            <?php 
                $authors = get_users( array(
                    'role__in' => array( 'author' ),
                    'has_published_posts ' => true,
                ) );
                foreach ( $authors as $author ) {
                    ?>
            <a class="it-authors-item" title="<?php echo  esc_html( $author->display_name ); ?>"
                href="<?php echo esc_url( get_author_posts_url( $author->ID ) ) ?>">
                <figure class="it-avatar-wrapper">
                    <?php echo get_avatar( $author->ID ); ?>
                </figure>
                <h2 class="it-authors-title"><?php echo  esc_html( $author->display_name ); ?></h2>
                <p><?php echo esc_html( $author->user_description ); ?></p>
                <span><?php printf( __( 'Written %s articles', 'aesto' ), count_user_posts( $author->ID ) ); ?></span>
            </a>
            <?php
                }
            ?>
        </div>
    </div>
</div>
<?php 
get_footer(); 