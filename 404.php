<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Aesto
 * @since 1.0.0
 */

get_header();
?>
<section class="it-page it-error">
    <div class="it-container">
        <section class="it-error-content">
            <h1 class="it-error-code"><?php _e('404', 'aesto'); ?></h1>
            <p class="it-error-description"><?php _e( 'Page not found', 'aesto' ); ?></p>
            <p class="it-error-link"><a
                    href="<?php echo site_url(); ?>"><?php _e( 'Go to the front page →', 'aesto' ); ?></a></p>
        </section>
    </div>
</section>
<?php
get_footer();