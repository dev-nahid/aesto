<?php
/**
 * Template for site header
 * 
 * @package Aesto
 * @since 1.0.0
 */
?>
<header id="it-head" class="it-head">
    <nav class="it-head-inner it-container">
        <div class="it-head-brand">
            <h1>
                <a class="it-head-logo" href="<?php echo site_url(); ?>">
                    <?php if( has_custom_logo()) : ?>
                    <img src="<?php echo get_custom_logo_url(); ?>" alt="<?php get_bloginfo( 'name' ); ?>" />
                    <?php else: bloginfo( 'name' ); endif; ?>
                </a>
            </h1>
            <a class="it-burger" role="button">
                <div class="it-burger-box">
                    <div class="it-burger-inner"></div>
                </div>
            </a>
        </div>
        <div class="it-head-menu">
            <?php wp_nav_menu( array(
                'theme_location' => 'primary',
                'container' => '',
                'menu_class' => 'nav',
            )); ?>
        </div>
        <div class="it-head-actions">
            <div class="it-head-actions-list">
                <?php echo get_search_form(); ?>
                <div class="it-dark-light">
                    <div class="icon-dark">
                        <?php get_template_part( 'assets/icons/light' ); ?>
                    </div>
                    <div class="icon-light">
                        <?php get_template_part( 'assets/icons/dark' ); ?>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>