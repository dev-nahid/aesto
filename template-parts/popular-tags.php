<?php
/**
 * Footer widget area.
 * 
 * @package Aesto
 * @since 1.0.0
 */

if ( is_active_sidebar( 'popular-categories' ) ) : ?>

    <div class="it-popular-tags it-grid-c3">
        <?php dynamic_sidebar( 'popular-categories' ); ?>
    </div><!-- .widget-area -->

<?php endif; ?>


