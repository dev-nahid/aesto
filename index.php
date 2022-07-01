<?php
/**
 * The main template file.
 * 
 * @package Aesto
 * @since 1.0.0
 */
get_header();
?>
<main class="it-main">
    <div class="it-page">
        <div class="it-container">
            <?php  
                        if ( have_posts() ) : 
                        ?><div class="it-postfeed it-grid-c3"><?php
                        /* Start the Loop */
                        while ( have_posts() ) : the_post();
                            /*
                            * Include the Post-Type-specific template for the content.
                            */
                            get_template_part( 'template-parts/content', get_post_type() );

                        endwhile;

                        else :
                            ?><div class="it-postfeed"><?php
                        get_template_part( 'template-parts/content', 'none' );

                        endif;
                        ?>
                </div> <!-- it-postfeed -->

                <?php 

                /* Load More pagination  */
                get_template_part( 'template-parts/pagination' ); 
                
                wp_reset_postdata();

                /* Footer Top widget area  */
                get_template_part( 'template-parts/popular-tags' ); 

                ?>

            </div> <!-- it-container -->
        </div>
</main>
<?php 
get_footer();