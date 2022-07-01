<?php
/**
 * Template for displaying Category Archive pages
 *
 * @package Aesto
 *  @since 1.0.0 
 */

get_header();
?>
<div class="it-page">
    <div class="it-container">
        <header class="it-header it-canvas">
            <h1 class="it-title">
                <?php 
                printf( __( '%s', 'aesto' ), '<span>' . single_cat_title( '', false ) . '</span>' );
                    ?>
            </h1>
            <p class="it-excerpt">
                <?php
                global $wp_query;
                $category_description = category_description();
                if ( ! empty( $category_description ) ) {
                    echo apply_filters( 'category_archive_meta', $category_description );
                }else {
                    echo __( 'A collection of ', 'aesto' ) . $wp_query->found_posts . ' posts';
                }
                ?>
            </p>
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
</div>
<?php 
get_footer(); 