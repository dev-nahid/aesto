<?php
/**
 * Search Modal
 * 
 * @package Aesto
 * @since 1.0.0
 */
?>
<a href="#" class="search-btn"><?php get_template_part( 'assets/icons/search' ); ?></a>
<div class="search-box search-elem">
    <button class="close"><?php get_template_part( 'assets/icons/cancel' ); ?></button>
    <div class="inner row">
        <div class="small-12 columns">
            <form action="/" method="get">
                <i class="search-icon"><?php get_template_part( 'assets/icons/search' ); ?></i>
                <input id="sge-input" type="text" name="s" placeholder="Search" value="<?php the_search_query(); ?>">
            </form>
        </div>
    </div>
</div>