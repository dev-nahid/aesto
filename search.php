<?php
/**
 * The template for displaying search results pages
 *
 * @package Aesto
 */

get_header();
?>
<div class="it-page">
    <div class="it-container">
        <header class="it-header it-canvas">
            <h1 class="it-title">
                <?php 
                printf( esc_html__( 'Search Results for: %s', 'aesto' ), '<span>' . get_search_query() . '</span>' );
                    ?>
            </h1>
            <p class="it-excerpt">
                <?php
					$allsearch = new WP_Query("s=$s&showposts=0"); 
					echo $allsearch ->found_posts.' results found.';
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
<?php 
get_footer(); 