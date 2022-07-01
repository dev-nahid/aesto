<?php
/**
 * Template for site footer
 * 
 * @package Aesto
 * @since 1.0.0
 */
?>
<footer class="it-foot">
    <div class="it-container">
        <div class="it-foot-inner">
            <div class="it-foot-brand">
                <h4>
                    <a class="it-foot-logo" href="<?php echo site_url(); ?>">
                        <?php if( has_custom_logo()) : ?>
                        <img src="<?php echo get_custom_logo_url(); ?>" alt="logo" />
                        <?php else: bloginfo( 'name' ); endif; ?>
                    </a>
                </h4>
                <?php if ( get_bloginfo( 'description' ) !== '' ) : ?>
                <p><?php bloginfo( 'description' ); ?></p>
                <?php endif; ?>
            </div>
            <div class="it-foot-menu">
                <h4><?php echo __( 'Link', 'aesto' ); ?></h4>
                <?php
                if ( has_nav_menu( 'secondary' ) ) {
                    wp_nav_menu( array( 'theme_location' => 'secondary' ) );
                }else {
                    wp_nav_menu( array( 'theme_location' => 'primary' ) );
                }
                ?>
            </div>
            <div class="it-foot-tag">
                <h4><?php echo __( 'Categories', 'aesto' ); ?></h4>
                <?php
                $args = array(
                    'show_option_all'    => '',
                    'container'           => false,
                    'orderby'            => 'name',
                    'order'              => 'ASC',
                    'hide_empty'         => 0,
                    'use_desc_for_title' => 0,
                    'child_of'           => 0,
                    'hierarchical'       => 1,
                    'number'             => null,
                    'echo'               => 1,
                    'depth'              => -1,
                    'taxonomy'           => 'category'

                );
                $categories = get_categories( $args );
                foreach ( $categories as $category ) {
                    echo '<a href="' . get_category_link( $category->term_id ) . '" title="' . $category->name . '">'. $category->name .'</a>';
                }
                ?>
            </div>
            <div class="it-subscribe-section">
                <h4><?php echo __( 'Subscribe', 'aesto' ); ?></h4>
                <p>Stay up to date! Get all the latest & greatest posts delivered straight to your inbox</p>
                <?php if( function_exists( 'mc4wp_form' ) ) : ?>
                <div class="it-subscribe-content">
                    <?php
                            echo do_shortcode('[mc4wp_form]'); 
                            ?>
                </div>
                <?php endif; ?>
            </div>
            <!-- Footer bottom -->
            <div class="it-foot-meta">
                <?php
				printf(
					/* translators: %s: WordPress. */
					esc_html__( '© Proudly powered by %s.', 'aesto' ),
					'<a href="' . esc_url( __( 'https://wordpress.org/', 'aesto' ) ) . '">WordPress</a> & <a href=" ' . esc_url(__( 'https://visioun.com/wp', 'aesto' )) .' ">aEsto</a>'
				);
				?>
            </div>
            <div class="it-foot-social">
                <?php 
                $fb_url = get_theme_mod( 'aesto_facebook_url' );
                $tw_url = get_theme_mod( 'aesto_twitter_url');
                $rss_url = get_theme_mod( 'aesto_rss_url');

                if ( $fb_url !== ''){
                    ?><a href="<?php echo get_theme_mod( 'aesto_facebook_url' )  ?>" title="facebook" target="_blank"
                    rel="noopener" aria-label="facebook"><?php get_template_part( 'assets/icons/facebook' ); ?></a><?php
                }

                if ( $tw_url !== ''){
                    ?><a href="#" title="twitter" target="_blank" rel="noopener"
                    aria-label="twitter"><?php get_template_part( 'assets/icons/twitter' ); ?></a><?php
                }
  
                if ( $rss_url !== ''){
                    ?><a href="#" title="RSS" target="_blank" rel="noopener"
                    aria-label="RSS"><?php get_template_part( 'assets/icons/rss' ); ?></a><?php
                }
                ?>

            </div>
        </div>
    </div>
</footer>