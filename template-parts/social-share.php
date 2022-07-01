<?php
/**
 * The template for social share option
 * 
 * @package Aesto
 * @since 1.0.0
 */
?>
<div class="it-social-share">
    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" rel="external" target="_blank"
        class="icon-facebook" aria-label="Facebook">
        <?php get_template_part( 'assets/icons/facebook' ); ?>
    </a>
    <a href="http://twitter.com/share?text=<?php the_title(); ?>&amp;url=<?php the_permalink(); ?>" rel="external"
        target="_blank" class="icon-twitter" aria-label="Twitter">
        <?php get_template_part( 'assets/icons/twitter' ); ?>
    </a>
    <a href="whatsapp://send?text=<?php the_permalink(); ?>" data-action="share/whatsapp/share" rel="external"
        target="_blank" class="icon-whatsapp" aria-label="Whatsapp">
        <?php get_template_part( 'assets/icons/whatsapp' ); ?>
    </a>
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>"
        rel="external" target="_blank" class="icon-linkedin" aria-label="Linkedin">
        <?php get_template_part( 'assets/icons/linkedin' ); ?>
    </a>
    <a href="mailto:?subject=<?php the_title(); ?>&amp;body=Article:%20<?php the_permalink(); ?>" class="icon-email"
        aria-label="Email">
        <?php get_template_part( 'assets/icons/email' ); ?>
    </a>
</div>