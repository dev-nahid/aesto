<?php
/**
 * Template for displaying Author Archive pages
 *
 * @package Aesto
 * @since 1.0.0
 */

get_header(); ?>
<div class="it-page">
    <div class="it-container">
        <header class="it-header it-canvas">
            <div class="it-author-image">
                <?php 
                $aesto_author_avatar = get_avatar( get_the_author_meta( 'ID' ), 100 );
                if ( ! empty( $aesto_author_avatar ) ) {
                    echo $aesto_author_avatar;
                }
                ?>
            </div>
            <h1 class="it-title"><?php printf( __( '%s', 'aesto' ), get_the_author() ); ?></h1>
            <p class="it-excerpt"><?php the_author_meta( 'description' ); ?></p>
        </header>

        <div class="it-postfeed it-grid-c3">
            <?php  
            if ( have_posts() ) : 
                
            /* Start the Loop */
            while ( have_posts() ) : the_post();
                /*
                * Include the Post-Type-specific template for the content.
                */
                get_template_part( 'template-parts/content', get_post_type() );

            endwhile;

            else :

            get_template_part( 'template-parts/content', 'none' );

            endif;
        ?>
        </div> <!-- it-postfeed -->

    </div> <!-- it-container -->
</div>
<?php 
get_footer(); 